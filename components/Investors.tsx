import { BENEFITS } from "@/lib/content";
import { IconArrow } from "./icons";
import { Reveal } from "./Reveal";

export function Investors() {
  return (
    <section className="section bg-offwhite" id="investors">
      <div className="container investors">
        <Reveal className="investors__media-wrap">
          <div className="investors__media">
            <img
              src="/images/exterior-timber-1400.webp"
              srcSet="/images/exterior-timber-800.webp 800w, /images/exterior-timber-1400.webp 1400w"
              sizes="(max-width: 900px) 100vw, 46vw"
              alt="Contemporary timber and glass investment property with a landscaped entrance"
              width={1400}
              height={933}
              loading="lazy"
              decoding="async"
            />
            <div className="investors__badge">
              <strong>5 – 100+</strong>
              <span>Properties per portfolio</span>
            </div>
          </div>
        </Reveal>

        <div className="investors__content">
          <span className="eyebrow">For property investors</span>
          <h2 className="h2">
            Built for Investors Who Think Beyond One Property.
          </h2>
          <p className="lede">
            Whether you own five properties or fifty, managing a growing
            short-term rental portfolio should not become another full-time job.
          </p>

          <ul className="benefit-list">
            {BENEFITS.map((benefit, index) => (
              <li key={benefit}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {benefit}
              </li>
            ))}
          </ul>

          <div>
            <a href="#contact" className="btn">
              Explore What&apos;s Possible for Your Portfolio
              <IconArrow className="btn__arrow" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
