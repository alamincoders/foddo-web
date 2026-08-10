"use client";

import { FAQ_DATA } from "@/components/seo/JsonLd";
import { ChevronDown, HelpCircle, Mail } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Reveal } from "./motion/Reveal";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-20 sm:py-32 bg-surface/40 border-t border-border/70 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-120 w-160 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <Reveal direction="down">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-muted px-4 py-1.5 text-xs font-bold text-primary shadow-xs mb-4">
              <HelpCircle className="h-3.5 w-3.5 fill-primary text-primary" />
              <span>Frequently Asked Questions</span>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.1}>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl leading-[1.25] sm:leading-[1.2]">
              Got Questions? <br className="hidden sm:inline" />
              <span className="text-primary mt-1 inline-block">We&apos;ve Got Answers.</span>
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <p className="mt-5 text-base text-muted-foreground sm:text-lg leading-relaxed">
              Everything you need to know about Foddo&apos;s local-first architecture, privacy guarantees, speed, and household family sync.
            </p>
          </Reveal>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <Reveal key={faq.question} direction="up" delay={0.05 * index}>
                <div
                  className={`rounded-2xl border transition-all duration-200 ${
                    isOpen ? "border-primary/40 bg-card shadow-soft-lg" : "border-border/80 bg-card/60 hover:border-primary/30 hover:bg-card"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer select-none"
                  >
                    <span className="text-base sm:text-lg font-bold text-foreground pr-2">{faq.question}</span>
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl transition-transform duration-200 ${
                        isOpen ? "bg-primary text-white rotate-180" : "bg-surface text-muted-foreground"
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-border/60 px-5 pb-6 pt-4 sm:px-6 text-sm sm:text-base text-muted-foreground leading-relaxed">{faq.answer}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <Reveal direction="up" delay={0.3} className="mt-12">
          <div className="rounded-2xl border border-border/70 bg-card p-6 text-center sm:flex sm:items-center sm:justify-between sm:text-left">
            <div>
              <h4 className="font-bold text-foreground text-base">Have additional questions?</h4>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">Our support engineering team is here to help you get the most out of Foddo.</p>
            </div>
            <a
              href="mailto:hello@itechills.com"
              className="mt-4 sm:mt-0 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs font-bold text-white shadow-sm transition-transform hover:scale-105"
            >
              <Mail className="h-4 w-4" />
              <span>hello@itechills.com</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
