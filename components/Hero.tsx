import { IconArrow } from "./icons";

const TRUST_INDICATORS = [
  "AI-powered operations",
  "24/7 guest support",
  "Local operational partners",
];

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__media">
        <img
          src="/images/exterior-dusk-1600.webp"
          srcSet="/images/exterior-dusk-800.webp 800w, /images/exterior-dusk-1600.webp 1600w"
          sizes="100vw"
          alt="A contemporary short-term rental property at dusk, with warm interior lighting and landscaped garden"
          width={1600}
          height={1067}
          fetchPriority="high"
          decoding="async"
        />
      </div>
      <div className="hero__scrim" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">AI-powered short-term rental management</p>

          <h1 className="hero__title">
            Smarter Property Management.
            <br />
            <span>Higher Rental Potential.</span>
          </h1>

          <p className="hero__lede">
            Your short-term rental portfolio deserves more than traditional
            management. Monten Top combines AI-powered operations, intelligent
            revenue optimisation and trusted local teams to maximise performance
            while taking the day-to-day work off your hands.
          </p>

          <div className="hero__actions">
            <a href="#contact" className="btn btn--light">
              Get a Free Portfolio Assessment
              <IconArrow className="btn__arrow" />
            </a>
            <a href="#how-it-works" className="btn btn--on-dark">
              Discover How It Works
            </a>
          </div>

          <ul className="hero__trust">
            {TRUST_INDICATORS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="hero__meta" aria-hidden="true">
        <strong>Cork · Dublin · Limerick</strong>
        <span>Fully managed portfolios</span>
        <span className="hero__scroll" />
      </div>
    </section>
  );
}
