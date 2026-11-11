import type { Metadata } from "next";
import { CONTACT_EMAIL, PROPERTY_RANGES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern use of the Monten Top website and the basis on which portfolio management services are discussed.",
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <main id="main" className="legal-page">
      <div className="container legal-page__inner">
        <span className="eyebrow">Legal</span>
        <h1 style={{ marginTop: "1rem" }}>Terms of Service</h1>
        <p className="legal-page__meta">Last updated: 11 November 2026</p>

        <p className="legal-page__notice">
          These terms are a working template for review. Management services are
          provided under a separate written agreement, and these website terms
          should be confirmed by a qualified adviser before launch.
        </p>

        <h2>Use of this website</h2>
        <p>
          This website provides information about Monten Top&apos;s short-term
          rental management services. By using it, you agree not to misuse the
          site, attempt to disrupt access, or rely on its content as professional
          financial, tax or legal advice.
        </p>

        <h2>Services</h2>
        <p>
          Monten Top provides a fully managed short-term rental operating
          service, delivered through AI-enabled systems, a human team and vetted
          local service partners. The scope of any engagement is confirmed in a
          written proposal or agreement for each portfolio.
        </p>

        <h2>No guarantee of performance</h2>
        <p>
          Information on this website, including any illustrative dashboard figures,
          is for demonstration purposes only. It is not a forecast, quotation or
          guarantee of income, occupancy, nightly rate or revenue. Short-term rental
          performance depends on location, property condition, seasonality, platform
          dynamics, regulation and market conditions.
        </p>

        <h2>Owner responsibilities</h2>
        <p>
          Owners remain responsible for ownership of their properties, for the
          accuracy of information supplied to us, and for compliance with
          applicable legislation, licensing, taxation and safety requirements.
          Operational responsibilities are allocated in the written agreement.
        </p>

        <h2>Third-party platforms and partners</h2>
        <p>
          We coordinate with booking platforms and local suppliers. Their
          availability, policies and performance are outside our direct control,
          although we will act reasonably to manage them on your behalf.
        </p>

        <h2>Coverage</h2>
        <p>
          We focus on Cork, Dublin and Limerick, Ireland. Coverage depends on
          location and operational requirements, and is confirmed during the
          portfolio assessment. Enquiries are welcome for portfolios of{" "}
          {PROPERTY_RANGES.join(", ")} properties.
        </p>

        <h2>Liability</h2>
        <p>
          Nothing in these terms excludes liability that cannot lawfully be
          excluded. Otherwise, and to the extent permitted by law, Monten Top is
          not liable for indirect or consequential loss arising from use of this
          website.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about these terms can be sent to{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      </div>
    </main>
  );
}
