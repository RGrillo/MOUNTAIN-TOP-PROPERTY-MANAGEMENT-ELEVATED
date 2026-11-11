"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/content";
import { Logo } from "./Logo";
import { IconArrow } from "./icons";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header
      className="site-header"
      data-scrolled={scrolled}
      data-open={open}
      id="site-header"
    >
      <div className="container nav-inner">
        <a
          href="#top"
          className="nav-logo"
          aria-label="Mountain Top — home"
          onClick={() => setOpen(false)}
        >
          <Logo />
        </a>

        <nav className="nav-links" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a href="#contact" className="btn nav-cta">
            Get a Free Portfolio Assessment
          </a>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="nav-toggle__bars" aria-hidden="true">
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      <div className="mobile-menu" id="mobile-menu">
        <nav aria-label="Mobile">
          <div className="mobile-menu__links">
            {NAV_LINKS.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className="mobile-menu__link"
                onClick={() => setOpen(false)}
              >
                {link.label}
                <span>{String(index + 1).padStart(2, "0")}</span>
              </a>
            ))}
          </div>
        </nav>
        <a
          href="#contact"
          className="btn btn--block mobile-menu__cta"
          onClick={() => setOpen(false)}
        >
          Get a Free Portfolio Assessment
          <IconArrow className="btn__arrow" />
        </a>
      </div>
    </header>
  );
}
