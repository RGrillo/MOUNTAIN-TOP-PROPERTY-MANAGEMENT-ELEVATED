import { CONTACT_EMAIL } from "@/lib/content";
import { ContactForm } from "./ContactForm";

const POINTS = [
  "A review of your properties, current performance and objectives.",
  "An honest view of where revenue and operations could improve.",
  "A tailored scope of management and a clear proposal.",
  "No obligation, no pressure and no cost.",
];

export function Contact() {
  return (
    <section className="section bg-paper" id="contact">
      <div className="container contact">
        <div className="contact__aside">
          <span className="eyebrow">Contact</span>
          <h2 className="h2">Let&apos;s Talk About Your Portfolio.</h2>
          <p className="lede">
            Tell us a little about your properties. We will come back to you with
            a considered view of what better management could look like — and what
            it would take to get there.
          </p>

          <ul className="contact__points">
            {POINTS.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>

          <div className="contact__direct">
            <span>Prefer email?</span>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
