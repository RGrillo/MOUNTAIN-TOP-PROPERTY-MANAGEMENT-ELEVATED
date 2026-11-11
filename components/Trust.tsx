import { TRUST_POINTS } from "@/lib/content";
import { TRUST_ICONS } from "./icons";
import { Reveal } from "./Reveal";

export function Trust() {
  return (
    <section className="section bg-white" id="about">
      <div className="container trust">
        <Reveal className="trust__intro">
          <span className="eyebrow">Trust and reliability</span>
          <h2 className="h2">
            Technology Does the Heavy Lifting. People Ensure the Standard.
          </h2>
          <p className="lede">
            We believe the best property management combines intelligent
            automation with reliable human oversight.
          </p>
          <div className="trust__note">
            <p className="body-sm">
              Monten Top is a fully managed service. We take responsibility for
              operating your properties and for the standard of delivery — the
              technology is the engine, not the product you are buying.
            </p>
          </div>
        </Reveal>

        <div className="trust__list">
          {TRUST_POINTS.map((point) => {
            const Icon = TRUST_ICONS[point.icon];
            return (
              <div className="trust__item" key={point.title}>
                <Icon />
                <div>
                  <strong>{point.title}</strong>
                  <p>{point.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
