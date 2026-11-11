import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Comparison } from "@/components/Comparison";
import { Investors } from "@/components/Investors";
import { Dashboard } from "@/components/Dashboard";
import { Trust } from "@/components/Trust";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Contact } from "@/components/Contact";
import { FAQS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Monten Top | AI-Powered Short-Term Rental Management",
  description:
    "Maximise your short-term rental portfolio with Monten Top. AI-powered property management, guest operations and revenue optimisation across Cork, Dublin and Limerick, Ireland.",
  alternates: { canonical: "/" },
};

const organisationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Monten Top",
  url: "https://monten.top",
  description:
    "AI-powered short-term rental management for property investors in Cork, Dublin and Limerick, Ireland. A fully managed service combining AI operations, human oversight and local partners.",
  slogan: "Your properties. Our intelligence. Better performance.",
  email: "hello@monten.top",
  areaServed: [
    { "@type": "City", name: "Cork" },
    { "@type": "City", name: "Dublin" },
    { "@type": "City", name: "Limerick" },
  ],
  knowsAbout: [
    "Short-term rental management",
    "Revenue management",
    "Guest communication",
    "Property operations",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([organisationSchema, faqSchema]),
        }}
      />
      <main id="main">
        <Hero />
        <Problem />
        <Solution />
        <Services />
        <Process />
        <Comparison />
        <Investors />
        <Dashboard />
        <Trust />
        <Faq />
        <FinalCta />
        <Contact />
      </main>
    </>
  );
}
