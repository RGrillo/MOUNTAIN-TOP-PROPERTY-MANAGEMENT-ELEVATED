import { IconArrow } from "./icons";

export function FinalCta() {
  return (
    <section className="final-cta" id="assessment">
      <div className="final-cta__media" aria-hidden="true">
        <img
          src="/images/exterior-eaves-1400.webp"
          srcSet="/images/exterior-eaves-800.webp 800w, /images/exterior-eaves-1400.webp 1400w"
          sizes="100vw"
          alt=""
          width={1400}
          height={933}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="final-cta__scrim" aria-hidden="true" />

      <div className="container final-cta__inner">
        <span className="eyebrow eyebrow--light">Portfolio assessment</span>
        <h2>Ready to Get More From Your Property Portfolio?</h2>
        <p>
          Let Monten Top take care of the complexity while you focus on growing
          your investments.
        </p>
        <div className="final-cta__actions">
          <a href="#contact" className="btn btn--light">
            Get Your Free Portfolio Assessment
            <IconArrow className="btn__arrow" />
          </a>
        </div>
        <p className="final-cta__note">
          No obligation. Just a conversation about your portfolio and its potential.
        </p>
      </div>
    </section>
  );
}
