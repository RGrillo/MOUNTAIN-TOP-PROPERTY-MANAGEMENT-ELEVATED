"use client";

import { useRef, useState, type FormEvent } from "react";
import {
  INTERESTS,
  MANAGEMENT_SITUATIONS,
  PROPERTY_RANGES,
  PROPERTY_REGIONS,
} from "@/lib/content";
import { IconArrow, IconCheck } from "./icons";

type Errors = Record<string, string>;
type Status = "idle" | "submitting" | "success" | "error";

type Submitted = {
  name: string;
  email: string;
  reference: string;
};

const FIELD_ORDER = [
  "fullName",
  "email",
  "phone",
  "properties",
  "region",
  "management",
  "interest",
  "consent",
] as const;

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

function isPhone(value: string) {
  const digits = value.replace(/[^\d]/g, "");
  return digits.length >= 7 && digits.length <= 15 && /^[\d+\s()\-]+$/.test(value);
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState<Submitted | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    const form = event.currentTarget;
    const data = new FormData(form);
    const values = Object.fromEntries(data.entries()) as Record<string, string>;

    const nextErrors: Errors = {};
    if (!values.fullName?.trim()) nextErrors.fullName = "Please tell us your name.";
    if (!values.email?.trim()) {
      nextErrors.email = "Please add an email address.";
    } else if (!isEmail(values.email.trim())) {
      nextErrors.email = "Please check the email address.";
    }
    if (!values.phone?.trim()) {
      nextErrors.phone = "Please add a phone number.";
    } else if (!isPhone(values.phone.trim())) {
      nextErrors.phone = "Please check the phone number.";
    }
    if (!values.properties) nextErrors.properties = "Select a portfolio size.";
    if (!values.region) nextErrors.region = "Select a property location.";
    if (!values.management) nextErrors.management = "Select your current setup.";
    if (!values.interest) nextErrors.interest = "Select what you are looking for.";
    if (!values.consent) nextErrors.consent = "Please confirm you agree to be contacted.";

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      setMessage("");
      const firstKey = FIELD_ORDER.find((key) => nextErrors[key]);
      if (firstKey) {
        const field = form.querySelector<HTMLElement>(`[name="${firstKey}"]`);
        field?.focus();
      }
      return;
    }

    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = (await response.json().catch(() => ({}))) as {
        ok?: boolean;
        reference?: string;
        message?: string;
      };

      if (!response.ok || !result.ok) {
        throw new Error(result.message ?? "We could not send your enquiry.");
      }

      setSubmitted({
        name: values.fullName.trim(),
        email: values.email.trim(),
        reference: result.reference ?? "—",
      });
      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again or email us directly.",
      );
    }
  }

  if (status === "success" && submitted) {
    return (
      <div className="form-card">
        <div className="form-success" role="status" aria-live="polite">
          <span className="form-success__mark" aria-hidden="true">
            <IconCheck />
          </span>
          <h3>Thank you, {submitted.name.split(" ")[0]}.</h3>
          <p>
            Your portfolio assessment request has been received. A member of the
            Monten Top team will review the details and contact you to arrange a
            conversation. We usually respond within two business days.
          </p>
          <dl>
            <dt>Reference</dt>
            <dd>{submitted.reference}</dd>
            <dt>Confirmation sent to</dt>
            <dd>{submitted.email}</dd>
          </dl>
          <button
            type="button"
            className="btn btn--outline"
            onClick={() => {
              setStatus("idle");
              setSubmitted(null);
            }}
          >
            Submit another enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="form-card">
      <form ref={formRef} onSubmit={handleSubmit} noValidate>
        <div className="form-grid">
          <div className="field">
            <label htmlFor="fullName">Full name</label>
            <input
              className="input"
              id="fullName"
              name="fullName"
              type="text"
              autoComplete="name"
              placeholder="Jane Whitfield"
              aria-invalid={Boolean(errors.fullName)}
              aria-describedby={errors.fullName ? "error-fullName" : undefined}
            />
            {errors.fullName && (
              <span className="field__error" id="error-fullName">
                {errors.fullName}
              </span>
            )}
          </div>

          <div className="field">
            <label htmlFor="email">Email address</label>
            <input
              className="input"
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="jane@company.ie"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "error-email" : undefined}
            />
            {errors.email && (
              <span className="field__error" id="error-email">
                {errors.email}
              </span>
            )}
          </div>

          <div className="field">
            <label htmlFor="phone">Phone number</label>
            <input
              className="input"
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="+44 7700 900000"
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "error-phone" : undefined}
            />
            {errors.phone && (
              <span className="field__error" id="error-phone">
                {errors.phone}
              </span>
            )}
          </div>

          <div className="field">
            <label htmlFor="company">
              Company name <span className="optional">(optional)</span>
            </label>
            <input
              className="input"
              id="company"
              name="company"
              type="text"
              autoComplete="organization"
              placeholder="Whitfield Property Group"
            />
          </div>

          <div className="field">
            <label htmlFor="properties">Number of properties</label>
            <select
              className="select"
              id="properties"
              name="properties"
              defaultValue=""
              aria-invalid={Boolean(errors.properties)}
              aria-describedby={errors.properties ? "error-properties" : undefined}
            >
              <option value="" disabled>
                Select portfolio size
              </option>
              {PROPERTY_RANGES.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>
            {errors.properties && (
              <span className="field__error" id="error-properties">
                {errors.properties}
              </span>
            )}
          </div>

          <div className="field">
            <label htmlFor="region">Property locations</label>
            <select
              className="select"
              id="region"
              name="region"
              defaultValue=""
              aria-invalid={Boolean(errors.region)}
              aria-describedby={errors.region ? "error-region" : undefined}
            >
              <option value="" disabled>
                Select location
              </option>
              {PROPERTY_REGIONS.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
            {errors.region && (
              <span className="field__error" id="error-region">
                {errors.region}
              </span>
            )}
          </div>

          <div className="field">
            <label htmlFor="management">Current management situation</label>
            <select
              className="select"
              id="management"
              name="management"
              defaultValue=""
              aria-invalid={Boolean(errors.management)}
              aria-describedby={errors.management ? "error-management" : undefined}
            >
              <option value="" disabled>
                Select an option
              </option>
              {MANAGEMENT_SITUATIONS.map((situation) => (
                <option key={situation} value={situation}>
                  {situation}
                </option>
              ))}
            </select>
            {errors.management && (
              <span className="field__error" id="error-management">
                {errors.management}
              </span>
            )}
          </div>

          <div className="field">
            <label htmlFor="interest">What are you looking for?</label>
            <select
              className="select"
              id="interest"
              name="interest"
              defaultValue=""
              aria-invalid={Boolean(errors.interest)}
              aria-describedby={errors.interest ? "error-interest" : undefined}
            >
              <option value="" disabled>
                Select a service
              </option>
              {INTERESTS.map((interest) => (
                <option key={interest} value={interest}>
                  {interest}
                </option>
              ))}
            </select>
            {errors.interest && (
              <span className="field__error" id="error-interest">
                {errors.interest}
              </span>
            )}
          </div>

          <div className="field field--full">
            <label htmlFor="details">
              Additional information <span className="optional">(optional)</span>
            </label>
            <textarea
              className="textarea"
              id="details"
              name="details"
              rows={4}
              maxLength={2000}
              placeholder="Tell us about your properties, locations and what you would like to improve."
            />
          </div>

          <div className="honeypot" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
          </div>

          <div className="field field--full">
            <label className="checkbox" htmlFor="consent">
              <input
                id="consent"
                name="consent"
                type="checkbox"
                aria-invalid={Boolean(errors.consent)}
                aria-describedby={errors.consent ? "error-consent" : undefined}
              />
              <span>
                I agree to Monten Top contacting me about my enquiry and
                processing my details in line with the{" "}
                <a href="/privacy">Privacy Policy</a>.
              </span>
            </label>
            {errors.consent && (
              <span className="field__error" id="error-consent">
                {errors.consent}
              </span>
            )}
          </div>
        </div>

        <div className="form-card__foot">
          {status === "error" && message && (
            <p className="form-status" role="alert">
              {message}
            </p>
          )}

          <button
            type="submit"
            className="btn btn--block"
            disabled={status === "submitting"}
            aria-busy={status === "submitting"}
          >
            {status === "submitting" ? (
              "Sending your request…"
            ) : (
              <>
                Request My Portfolio Assessment
                <IconArrow className="btn__arrow" />
              </>
            )}
          </button>

          <div className="form-card__hint">
            <span>No obligation. No cost.</span>
            <span>Your details are never sold.</span>
          </div>
        </div>
      </form>
    </div>
  );
}
