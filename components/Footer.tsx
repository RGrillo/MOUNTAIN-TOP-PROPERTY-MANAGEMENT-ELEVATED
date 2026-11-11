import { CONTACT_EMAIL, NAV_LINKS, SERVICES } from "@/lib/content";
import { LogoMark } from "./Logo";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer-logo">
              <LogoMark size={30} />
              <span className="nav-logo__text">
                <span className="nav-logo__name">Monten Top</span>
                <span className="nav-logo__tag">Property Intelligence</span>
              </span>
            </div>
            <p>
              AI-powered short-term rental management for property investors
              across Cork, Dublin and Limerick, Ireland. Your properties. Our
              intelligence. Better performance.
            </p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="link-arrow">
              {CONTACT_EMAIL}
            </a>
          </div>

          <div className="footer__col">
            <h4>Company</h4>
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4>Services</h4>
            <ul>
              {SERVICES.map((service) => (
                <li key={service.index}>
                  <a href="#services">{service.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4>Coverage</h4>
            <ul>
              <li>Dublin</li>
              <li>Cork</li>
              <li>Limerick</li>
              <li>
                <a href="#contact">Check your location</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Monten Top. All rights reserved.</span>
          <div className="footer__legal">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="#faq">FAQs</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
