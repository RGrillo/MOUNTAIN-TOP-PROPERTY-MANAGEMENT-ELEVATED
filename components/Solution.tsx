import { AI_CAPABILITIES, HUMAN_CAPABILITIES } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Solution() {
  return (
    <section className="section bg-forest on-dark" id="solution">
      <div className="container">
        <Reveal className="section-head">
          <div className="section-head__title">
            <span className="eyebrow">Our solution</span>
            <h2 className="h2">One Intelligent Operation. Your Entire Portfolio.</h2>
          </div>
          <div className="section-head__aside">
            <p className="lede">
              We combine AI-powered management with reliable local operations to
              deliver a seamless experience for property owners and guests.
            </p>
          </div>
        </Reveal>

        <div className="solution-grid">
          <article className="layer layer--ai">
            <div className="layer__head">
              <span className="layer__tag">Layer 01</span>
              <h3 className="layer__title">AI-Powered Operations</h3>
            </div>
            <ul className="layer__list">
              {AI_CAPABILITIES.map((capability) => (
                <li key={capability}>{capability}</li>
              ))}
            </ul>
            <p className="layer__note">
              Always-on systems that price, respond, schedule and monitor — with
              every automated decision logged and reviewable.
            </p>
          </article>

          <article className="layer layer--human">
            <div className="layer__head">
              <span className="layer__tag">Layer 02</span>
              <h3 className="layer__title">Human-Powered Local Operations</h3>
            </div>
            <ul className="layer__list layer__list--single">
              {HUMAN_CAPABILITIES.map((capability) => (
                <li key={capability}>{capability}</li>
              ))}
            </ul>
            <p className="layer__note">
              Physical delivery, coordinated by people who are accountable for the
              standard of every property.
            </p>
          </article>

          <article className="layer layer--outcome">
            <h3 className="layer__title">What that means for you</h3>
            <ul>
              <li>One management partner and one point of contact.</li>
              <li>Consistent standards across every property you own.</li>
              <li>Performance visibility without day-to-day involvement.</li>
            </ul>
          </article>
        </div>

        <div className="solution__foot">
          <p>
            AI handles repetitive, administrative and analytical work. Our human
            team and trusted local partners ensure that the physical property
            operations are delivered to the required standard.
          </p>
          <div className="solution__flow" aria-label="How the operating model fits together">
            <span>Data</span>
            <i aria-hidden="true" />
            <span>AI operations</span>
            <i aria-hidden="true" />
            <span>Human oversight</span>
            <i aria-hidden="true" />
            <span>Local delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
}
