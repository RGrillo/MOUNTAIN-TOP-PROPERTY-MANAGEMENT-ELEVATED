import { STEPS } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Process() {
  return (
    <section className="section bg-offwhite" id="how-it-works">
      <div className="container">
        <Reveal className="section-head">
          <div className="section-head__title">
            <span className="eyebrow">How it works</span>
            <h2 className="h2">A Simpler Way to Operate Your Property Portfolio.</h2>
          </div>
          <div className="section-head__aside">
            <p className="lede">
              A structured onboarding and a continuously managed operation. You
              stay informed and in control; we carry the operational load.
            </p>
          </div>
        </Reveal>

        <div className="process">
          {STEPS.map((step) => (
            <article className="process__step" key={step.index}>
              <div className="process__marker">
                <span className="process__dot" aria-hidden="true" />
                <span className="process__line" aria-hidden="true" />
              </div>
              <span className="process__num">Step {step.index}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
