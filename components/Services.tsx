import { SERVICES } from "@/lib/content";
import { SERVICE_ICONS, IconArrow } from "./icons";
import { Reveal } from "./Reveal";

export function Services() {
  return (
    <section className="section bg-paper" id="services">
      <div className="container">
        <Reveal className="section-head">
          <div className="section-head__title">
            <span className="eyebrow">Our services</span>
            <h2 className="h2">
              Everything Your Properties Need. Nothing You Need to Manage.
            </h2>
          </div>
          <div className="section-head__aside">
            <p className="lede">
              A complete operating function for your portfolio — commercial,
              guest-facing and physical. Select the full service or the areas
              where you need the most support.
            </p>
          </div>
        </Reveal>

        <div className="services-grid">
          {SERVICES.map((service) => {
            const Icon = SERVICE_ICONS[service.icon];
            return (
              <article className="service-card" key={service.index}>
                <div className="service-card__top">
                  <Icon className="service-card__icon" />
                  <span className="service-card__index">{service.index}</span>
                </div>
                <h3 className="h3">{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-card__features">
                  {service.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="services__cta">
          <div>
            <h3>Not sure which services you need?</h3>
            <p>
              We will review your portfolio and recommend the right scope of
              management.
            </p>
          </div>
          <a href="#contact" className="btn btn--light">
            Let&apos;s Discuss Your Portfolio
            <IconArrow className="btn__arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}
