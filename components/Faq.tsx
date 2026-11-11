"use client";

import { useState } from "react";
import { FAQS } from "@/lib/content";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section bg-offwhite" id="faq">
      <div className="container faq">
        <div className="faq__aside">
          <span className="eyebrow">FAQ</span>
          <h2 className="h2">Frequently Asked Questions</h2>
          <p className="lede">
            The practical questions owners ask before moving a portfolio across.
            If yours is not covered, ask us directly.
          </p>
          <a href="#contact" className="link-arrow">
            Ask a question
          </a>
        </div>

        <div className="faq__list">
          {FAQS.map((faq, index) => {
            const open = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;
            return (
              <div className="faq__item" key={faq.question} data-open={open}>
                <h3>
                  <button
                    type="button"
                    className="faq__trigger"
                    id={buttonId}
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(open ? null : index)}
                  >
                    {faq.question}
                    <span className="faq__sign" aria-hidden="true" />
                  </button>
                </h3>
                <div
                  className="faq__panel"
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  aria-hidden={!open}
                >
                  <div className="faq__panel-inner">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
