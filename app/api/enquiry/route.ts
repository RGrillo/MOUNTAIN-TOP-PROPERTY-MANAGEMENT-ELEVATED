import { NextResponse } from "next/server";

type Enquiry = {
  fullName: string;
  email: string;
  phone: string;
  company?: string;
  properties: string;
  region: string;
  management: string;
  interest: string;
  details?: string;
  consent: string;
};

const FIELDS = [
  "fullName",
  "email",
  "phone",
  "properties",
  "region",
  "management",
  "interest",
  "consent",
] as const;

const LABELS: Record<string, string> = {
  fullName: "Full name",
  email: "Email",
  phone: "Phone",
  company: "Company",
  properties: "Number of properties",
  region: "Property locations",
  management: "Current management",
  interest: "Looking for",
  details: "Additional information",
};

function clean(value: unknown, max = 400) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

function isPhone(value: string) {
  const digits = value.replace(/[^\d]/g, "");
  return digits.length >= 7 && digits.length <= 15;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Enquiry delivery.
 *
 * Configure at least one destination:
 *  - RESEND_API_KEY + ENQUIRY_TO_EMAIL  → email the enquiry to the team inbox
 *  - ENQUIRY_WEBHOOK_URL                → POST the enquiry to a CRM / automation
 *
 * Until a destination is configured the route refuses to fake a successful
 * submission in production, so enquiries are never silently lost.
 */
export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request." },
      { status: 400 },
    );
  }

  const body = (payload ?? {}) as Record<string, unknown>;

  // Honeypot: accept and discard automated submissions.
  if (clean(body.website)) {
    return NextResponse.json({ ok: true, reference: "MT-RECEIVED" });
  }

  const errors: Record<string, string> = {};
  for (const field of FIELDS) {
    if (!clean(body[field])) errors[field] = "Required";
  }
  if (!errors.email && !isEmail(clean(body.email))) errors.email = "Invalid email";
  if (!errors.phone && !isPhone(clean(body.phone))) errors.phone = "Invalid phone";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { ok: false, message: "Please check the highlighted fields.", errors },
      { status: 422 },
    );
  }

  const enquiry: Enquiry = {
    fullName: clean(body.fullName, 120),
    email: clean(body.email, 180),
    phone: clean(body.phone, 40),
    company: clean(body.company, 160),
    properties: clean(body.properties, 40),
    region: clean(body.region, 60),
    management: clean(body.management, 80),
    interest: clean(body.interest, 80),
    details: clean(body.details, 2000),
    consent: clean(body.consent, 20),
  };

  const reference = `MT-${Date.now().toString(36).toUpperCase().slice(-6)}`;
  const submittedAt = new Date().toISOString();
  const record = { reference, submittedAt, ...enquiry };

  const resendKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.ENQUIRY_TO_EMAIL;
  const fromEmail =
    process.env.ENQUIRY_FROM_EMAIL ?? "Mountain Top Website <onboarding@resend.dev>";
  const webhookUrl = process.env.ENQUIRY_WEBHOOK_URL;

  const configured = Boolean((resendKey && toEmail) || webhookUrl);

  if (!configured) {
    console.warn(
      "[enquiry] No delivery destination configured. Set RESEND_API_KEY + ENQUIRY_TO_EMAIL, or ENQUIRY_WEBHOOK_URL.",
      record,
    );
    if (process.env.NODE_ENV === "production") {
      return NextResponse.json(
        {
          ok: false,
          message:
            "Our enquiry system is being configured. Please email hello@mountaintop.co.uk and we will respond directly.",
        },
        { status: 503 },
      );
    }
    // Development: surface success so the UI can be reviewed end to end.
    return NextResponse.json({ ok: true, reference, delivery: "development-log" });
  }

  const tasks: Promise<Response>[] = [];

  if (resendKey && toEmail) {
    const rows = Object.entries(LABELS)
      .map(([key, label]) => {
        const value = enquiry[key as keyof Enquiry];
        if (!value) return "";
        return `<tr><td style="padding:6px 12px 6px 0;color:#52605a;font-size:13px;vertical-align:top">${label}</td><td style="padding:6px 0;color:#14201b;font-size:13px">${escapeHtml(String(value)).replace(/\n/g, "<br/>")}</td></tr>`;
      })
      .join("");

    tasks.push(
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [toEmail],
          reply_to: enquiry.email,
          subject: `Portfolio assessment request — ${enquiry.fullName} (${enquiry.properties} properties)`,
          html: `<div style="font-family:Inter,Helvetica,Arial,sans-serif;max-width:560px">
            <p style="font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#9c7d47;margin:0 0 8px">Mountain Top · New enquiry</p>
            <h1 style="font-size:20px;color:#173d32;margin:0 0 16px">${escapeHtml(enquiry.fullName)}</h1>
            <table style="border-collapse:collapse;width:100%">${rows}</table>
            <p style="font-size:12px;color:#6d7a74;margin-top:20px">Reference ${reference} · ${submittedAt}<br/>Consent given: ${enquiry.consent ? "yes" : "no"}</p>
          </div>`,
        }),
      }),
    );
  }

  if (webhookUrl) {
    tasks.push(
      fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source: "mountaintop-website", ...record }),
      }),
    );
  }

  const results = await Promise.allSettled(tasks);
  const delivered = results.some(
    (result) => result.status === "fulfilled" && result.value.ok,
  );

  if (!delivered) {
    console.error(
      "[enquiry] Delivery failed",
      results.map((result) =>
        result.status === "fulfilled" ? result.value.status : String(result.reason),
      ),
    );
    return NextResponse.json(
      {
        ok: false,
        message:
          "We could not send your enquiry just now. Please try again, or email hello@mountaintop.co.uk.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, reference });
}
