import { PROBLEMS } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Problem() {
  return (
    <section className="section bg-offwhite" id="problem">
      <div className="container">
        <Reveal className="section-head">
          <div className="section-head__title">
            <span className="eyebrow">The operational reality</span>
            <h2 className="h2">
              Owning Multiple Properties Shouldn&apos;t Mean Managing Multiple
              Problems.
            </h2>
          </div>
          <div className="section-head__aside">
            <p className="lede">
              Growing a short-term rental portfolio brings increasing operational
              complexity. More bookings, more guest communication, more
              maintenance and more moving parts.
            </p>
          </div>
        </Reveal>

        <div className="problem-grid">
          {PROBLEMS.map((problem) => (
            <article className="problem-card" key={problem.index}>
              <span className="problem-card__index">{problem.index}</span>
              <h3 className="h3">{problem.title}</h3>
              <div className="problem-card__rule" aria-hidden="true" />
              <p>{problem.body}</p>
            </article>
          ))}
        </div>

        <p className="problem__summary">
          Mountain Top brings everything together in one intelligent, fully
          managed operation.
        </p>
      </div>
    </section>
  );
}
