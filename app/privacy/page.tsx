import type { Metadata } from "next";
import { CONTACT_EMAIL } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Monten Top collects, uses and protects personal information submitted through this website.",
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <main id="main" className="legal-page">
      <div className="container legal-page__inner">
        <span className="eyebrow">Legal</span>
        <h1 style={{ marginTop: "1rem" }}>Privacy Policy</h1>
        <p className="legal-page__meta">Last updated: 11 November 2026</p>

        <p className="legal-page__notice">
          This policy is provided as a working template for review. It should be
          checked against Monten Top&apos;s final data-processing arrangements and
          confirmed by a qualified adviser before the website is launched.
        </p>

        <p>
          Monten Top respects your privacy. This page explains what information
          we collect when you use this website, why we collect it, and the choices
          available to you.
        </p>

        <h2>Who we are</h2>
        <p>
          Monten Top provides short-term rental management services in Cork, Dublin and Limerick, Ireland. For any privacy question, contact us at{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>

        <h2>Information we collect</h2>
        <ul>
          <li>
            Enquiry details you submit: name, email address, phone number, company
            name, portfolio size, property locations, current management
            arrangements, service interest and any additional information.
          </li>
          <li>
            Technical information generated when you use the site, such as pages
            viewed, approximate location and device type, where analytics consent
            has been given.
          </li>
          <li>Cookie preferences stored in your browser.</li>
        </ul>

        <h2>How we use your information</h2>
        <ul>
          <li>To respond to your enquiry and prepare a portfolio assessment.</li>
          <li>To provide services where we agree to manage a property portfolio.</li>
          <li>To meet legal, regulatory and accounting obligations.</li>
          <li>To improve the website and our services, using aggregated data only.</li>
        </ul>

        <h2>Lawful basis</h2>
        <p>
          We process enquiry information on the basis of our legitimate interests
          in responding to prospective clients and, where relevant, taking steps to
          enter a contract. We rely on consent for non-essential cookies and, where
          required, for marketing communications.
        </p>

        <h2>Sharing</h2>
        <p>
          We share information only with service providers that help us operate
          the business, such as email delivery, hosting and enquiry management
          providers, and with professional advisers where necessary. We do not sell
          personal information.
        </p>

        <h2>Retention</h2>
        <p>
          Enquiry records are kept for as long as needed to handle the enquiry and
          maintain a record of the conversation, after which they are deleted or
          anonymised unless a longer period is required by law.
        </p>

        <h2>Cookies</h2>
        <p>
          Essential cookies are used to operate the site and remember your
          preferences. Analytics cookies are used only where you accept them. You
          can change your choice at any time by clearing your browser storage for
          this site.
        </p>

        <h2>Your rights</h2>
        <p>
          You may have the right to access, correct, delete, restrict or object to
          the processing of your personal information, and to withdraw consent at
          any time. You can also raise a concern with the Irish Data Protection
          Commission. We will respond to requests within the period required by
          applicable law.
        </p>

        <h2>Changes</h2>
        <p>
          We may update this policy to reflect changes in our services or legal
          requirements. The date at the top of this page shows the most recent
          revision.
        </p>
      </div>
    </main>
  );
}
