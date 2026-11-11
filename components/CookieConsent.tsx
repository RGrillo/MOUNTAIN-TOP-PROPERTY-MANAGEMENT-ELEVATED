"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "mt-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = window.localStorage.getItem(STORAGE_KEY);
    } catch {
      stored = null;
    }
    if (stored) return;
    const timer = window.setTimeout(() => setVisible(true), 1400);
    return () => window.clearTimeout(timer);
  }, []);

  const choose = (value: "all" | "essential") => {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* storage unavailable — dismiss for this session only */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie" role="dialog" aria-label="Cookie consent" aria-live="polite">
      <p>
        We use essential cookies to operate this site and, with your consent,
        analytics cookies to understand how it performs. See our{" "}
        <a href="/privacy">Privacy Policy</a>.
      </p>
      <div className="cookie__actions">
        <button type="button" className="btn btn--light" onClick={() => choose("all")}>
          Accept all
        </button>
        <button
          type="button"
          className="btn btn--on-dark"
          onClick={() => choose("essential")}
        >
          Essential only
        </button>
      </div>
    </div>
  );
}
