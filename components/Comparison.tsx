import { COMPARISON } from "@/lib/content";
import { LogoMark } from "./Logo";
import { Reveal } from "./Reveal";

export function Comparison() {
  return (
    <section className="section bg-white" id="why-mountain-top">
      <div className="container">
        <Reveal className="section-head">
          <div className="section-head__title">
            <span className="eyebrow">Why Mountain Top</span>
            <h2 className="h2">Traditional Management. Reimagined.</h2>
          </div>
          <div className="section-head__aside">
            <p className="lede">
              Two different operating models produce different outcomes. This is a
              comparison of approaches — not a claim about any individual firm.
            </p>
          </div>
        </Reveal>

        <Reveal className="compare">
          <div className="compare__head">
            <span>Criteria</span>
            <span className="compare__head-col">Traditional management</span>
            <span className="compare__head-col compare__head-col--mt">
              <LogoMark size={18} />
              Mountain Top
            </span>
          </div>

          {COMPARISON.map((row) => (
            <div className="compare__row" key={row.criterion}>
              <span className="compare__label">{row.criterion}</span>
              <span className="compare__cell" data-label="Traditional">
                {row.traditional}
              </span>
              <span className="compare__cell compare__cell--mt" data-label="Mountain Top">
                {row.mountainTop}
              </span>
            </div>
          ))}
        </Reveal>

        <p className="compare__note">
          Traditional management can work well for single properties. Mountain Top
          is designed for owners operating at portfolio scale, where coordination,
          reporting and consistency carry more weight.
        </p>
      </div>
    </section>
  );
}
