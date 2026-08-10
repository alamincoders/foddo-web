"use client";

import React, { useState, useMemo } from "react";
import { 
  Sparkles, 
  Languages, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  SlidersHorizontal,
  LayoutList,
  ShieldCheck,
  Cpu
} from "lucide-react";
import { motion } from "motion/react";
import { Reveal, StaggerContainer, StaggerItem } from "./motion/Reveal";

interface ParsedResult {
  name: string;
  quantity: string | null;
  unit: string | null;
}

const PRESET_EXAMPLES = [
  { text: "2kg Fresh Red Apples", lang: "English", flag: "🇬🇧" },
  { text: "দেড় লিটার খাঁটি দুধ", lang: "বাংলা", flag: "🇧🇩" },
  { text: "500g Brown Sugar", lang: "English", flag: "🇬🇧" },
  { text: "১ ডজন হাঁসের ডিম", lang: "বাংলা", flag: "🇧🇩" },
  { text: "3 packets pasta", lang: "English", flag: "🇬🇧" },
  { text: "হাফ কেজি কাঁচা মরিচ", lang: "Banglish / বাংলা", flag: "🇧🇩" },
  { text: "2 bottles extra virgin olive oil", lang: "English", flag: "🇬🇧" },
  { text: "1 হালি দেশি ডিম", lang: "বাংলা", flag: "🇧🇩" },
];

// Lightweight client parser for live landing playground
function parseInputLive(input: string): ParsedResult {
  if (!input.trim()) {
    return {
      name: "Type an item...",
      quantity: null,
      unit: null,
    };
  }

  let text = input.trim();
  let quantity: string | null = null;
  let unit: string | null = null;

  // Fraction words
  const fractionMap: Record<string, string> = {
    "হাফ": "0.5",
    "আধা": "0.5",
    "half": "0.5",
    "adha": "0.5",
    "দেড়": "1.5",
    "দেড়": "1.5",
    "derh": "1.5",
    "পৌনে": "0.75",
    "সোয়া": "1.25",
    "সোয়া": "1.25",
    "পোয়া": "250g",
    "পোয়া": "250g",
  };

  for (const [word, val] of Object.entries(fractionMap)) {
    const reg = new RegExp(`\\b${word}\\b`, "i");
    if (reg.test(text)) {
      quantity = val;
      text = text.replace(reg, "").trim();
      break;
    }
  }

  // Number extraction (English & Bangla digits)
  const banglaDigits: Record<string, string> = {
    "০": "0", "১": "1", "২": "2", "৩": "3", "৪": "4",
    "৫": "5", "৬": "6", "৭": "7", "৮": "8", "৯": "9",
  };

  let normalized = "";
  for (const ch of text) {
    normalized += banglaDigits[ch] || ch;
  }

  const numMatch = normalized.match(/(\d+(\.\d+)?)/);
  if (numMatch && !quantity) {
    quantity = numMatch[1];
    text = text.replace(numMatch[0], "").trim();
    for (const bDigit of Object.keys(banglaDigits)) {
      text = text.replaceAll(bDigit, "");
    }
  }

  // Units extraction
  const unitsMap: Record<string, string> = {
    "কেজি": "kg",
    "kg": "kg",
    "kilo": "kg",
    "kilogram": "kg",
    "গ্রাম": "gm",
    "gm": "gm",
    "gram": "gm",
    "g": "gm",
    "লিটার": "Liter",
    "liter": "Liter",
    "litre": "Liter",
    "l": "Liter",
    "প্যাকেট": "Packet",
    "packet": "Packet",
    "packets": "Packet",
    "pkt": "Packet",
    "ডজন": "Dozen",
    "dozen": "Dozen",
    "হালি": "Hali (4 pcs)",
    "hali": "Hali (4 pcs)",
    "বোতল": "Bottle",
    "bottle": "Bottle",
    "bottles": "Bottle",
    "বক্স": "Box",
    "box": "Box",
    "boxes": "Box",
    "পিস": "Pcs",
    "pcs": "Pcs",
    "pc": "Pcs",
    "টা": "Pcs",
    "টি": "Pcs",
  };

  for (const [uWord, uStandard] of Object.entries(unitsMap)) {
    const reg = new RegExp(`\\b${uWord}\\b`, "i");
    if (reg.test(text)) {
      unit = uStandard;
      text = text.replace(reg, "").trim();
      break;
    }
  }

  // Clean item name
  const cleanName = text.replace(/\s+/g, " ").trim() || "Item";

  return {
    name: cleanName.charAt(0).toUpperCase() + cleanName.slice(1),
    quantity: quantity || "1",
    unit: unit || "Piece",
  };
}

export function SmartInputSection() {
  const [inputText, setInputText] = useState("দেড় লিটার খাঁটি দুধ");
  const parsed = useMemo(() => parseInputLive(inputText), [inputText]);

  return (
    <section id="smart-input" className="py-20 sm:py-32 bg-background relative overflow-hidden">
      {/* Background Subtle Gradient Blobs */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -z-10 h-140 w-220 -translate-x-1/2 rounded-full bg-linear-to-tr from-primary/10 via-accent/10 to-transparent blur-3xl opacity-60" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <Reveal direction="down">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-muted px-4 py-1.5 text-xs font-bold text-primary shadow-xs mb-4">
              <Languages className="h-3.5 w-3.5 fill-primary text-primary" />
              <span>Proprietary Multilingual Smart Parser</span>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.1}>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl leading-[1.25] sm:leading-[1.2]">
              Type Naturally in Any Language. <br className="hidden sm:inline" />
              <span className="text-primary mt-1 inline-block">Foddo Understands Instantly.</span>
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <p className="mt-5 text-base text-muted-foreground sm:text-lg leading-relaxed">
              No clunky unit dropdowns, quantity dials, or distracting category dividers. Type exactly how you speak in English, বাংলা, or Romanized Banglish. Foddo automatically separates the item name, quantity, and measurement unit in a clean, distraction-free list.
            </p>
          </Reveal>
        </div>

        {/* Interactive Live Playground Showcase Card */}
        <Reveal direction="up" delay={0.3} className="mb-16 sm:mb-24">
          <div className="rounded-3xl border border-black/8 dark:border-white/12 bg-card p-6 sm:p-10 lg:p-12 shadow-soft-2xl relative overflow-hidden">
            {/* Top Bar Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/70 pb-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-muted text-primary">
                  <Cpu className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-base sm:text-lg">
                    Interactive Natural Language Parser Playground
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Try typing below or tap any sample phrase to see zero-delay token extraction.
                  </p>
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 self-start sm:self-auto rounded-full border border-primary/20 bg-primary-muted/70 px-3 py-1 text-xs font-semibold text-primary">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span>100% On-Device Engine</span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 items-center">
              {/* Left Column: Interactive Input & Sample Chips */}
              <div className="lg:col-span-6 space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center justify-between">
                    <span>Single-Row Smart Input</span>
                    <span className="text-[11px] font-normal text-primary lowercase">type anything</span>
                  </label>

                  {/* Smart Input Box */}
                  <div className="relative flex items-center rounded-2xl border-2 border-primary/40 bg-surface/80 p-2 shadow-inner focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10 transition-all">
                    <div className="pl-3 pr-2 text-primary font-bold text-lg select-none">
                      ✍️
                    </div>
                    <input
                      type="text"
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      placeholder="e.g. 2kg alu or দেড় লিটার খাঁটি দুধ..."
                      className="w-full bg-transparent px-2 py-2.5 text-base sm:text-lg font-semibold text-foreground placeholder:text-muted-foreground/60 focus:outline-none"
                    />
                    {inputText && (
                      <button
                        type="button"
                        onClick={() => setInputText("")}
                        className="rounded-xl px-3 py-1.5 text-xs font-bold text-muted-foreground hover:bg-card hover:text-foreground cursor-pointer transition-colors"
                      >
                        Clear
                      </button>
                    )}
                  </div>
                </div>

                {/* Quick Presets / Try It Chips */}
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block">
                    Quick Examples (Tap to Test):
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {PRESET_EXAMPLES.map((example) => {
                      const isSelected = inputText === example.text;
                      return (
                        <button
                          key={example.text}
                          type="button"
                          onClick={() => setInputText(example.text)}
                          className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-medium transition-all duration-200 cursor-pointer ${
                            isSelected
                              ? "bg-primary text-white font-bold shadow-md shadow-primary/20 scale-[1.02]"
                              : "border border-border/80 bg-surface text-foreground hover:border-primary/40 hover:bg-card"
                          }`}
                        >
                          <span>{example.flag}</span>
                          <span>{example.text}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right Column: Real-Time Token Extraction Visualizer */}
              <div className="lg:col-span-6">
                <div className="rounded-2xl border border-border/80 bg-surface/60 p-5 sm:p-6 shadow-xs relative">
                  <div className="flex items-center justify-between border-b border-border/60 pb-3 mb-5">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-primary flex items-center gap-1.5">
                      <Sparkles className="h-3.5 w-3.5" />
                      <span>Zero-Click Parsed Breakdown</span>
                    </span>
                    <span className="text-[11px] font-mono text-muted-foreground">
                      Execution: &lt; 0.5ms
                    </span>
                  </div>

                  {/* Dynamic Extraction Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {/* Item Name */}
                    <div className="rounded-xl border border-border/70 bg-card p-4 shadow-xs">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block">
                        Detected Item Name
                      </span>
                      <div className="mt-1 text-base font-extrabold text-foreground truncate">
                        {parsed.name}
                      </div>
                    </div>

                    {/* Quantity & Unit */}
                    <div className="rounded-xl border border-border/70 bg-card p-4 shadow-xs">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block">
                        Quantity & Unit
                      </span>
                      <div className="mt-1 flex items-baseline gap-1.5">
                        <span className="text-lg font-black text-primary font-mono">
                          {parsed.quantity || "1"}
                        </span>
                        <span className="text-xs font-bold text-foreground bg-primary-muted px-2 py-0.5 rounded-md">
                          {parsed.unit || "Piece"}
                        </span>
                      </div>
                    </div>

                    {/* Clean Minimalist List Preview */}
                    <div className="sm:col-span-2 rounded-xl border border-primary/25 bg-linear-to-r from-primary-muted/80 to-accent-muted/40 p-4 shadow-xs">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-primary block">
                          Clean Flat List Entry (Zero Clutter)
                        </span>
                        <span className="text-xs font-bold text-primary">Instant Save</span>
                      </div>
                      <div className="flex items-center justify-between gap-3 mt-2 bg-card rounded-lg p-3 border border-border/60">
                        <div className="flex items-center gap-3">
                          <div className="h-5 w-5 rounded-md border-2 border-primary/40 flex items-center justify-center" />
                          <span className="font-bold text-sm text-foreground">{parsed.name}</span>
                        </div>
                        <span className="text-xs font-semibold text-primary bg-primary-muted px-2.5 py-1 rounded-md">
                          {parsed.quantity} {parsed.unit}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Guarantee Banner */}
                  <div className="mt-4 pt-3 border-t border-border/50 flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    <span>No category distractions. No dropdown clicks. Clean, flat, and instant.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* 4 Core Pillars Grid */}
        <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
          <StaggerItem className="h-full flex">
            <div className="h-full w-full flex flex-col justify-start rounded-2xl border border-border/70 bg-card p-6 shadow-xs hover:shadow-md hover:border-primary/40 transition-all duration-200">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-muted text-primary mb-4 shrink-0">
                <Languages className="h-5 w-5" />
              </div>
              <h4 className="text-base font-bold text-foreground">True Multilingual NLP</h4>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                Understands English, native Bangla script, Romanized Banglish, and mixed numerals without configuration.
              </p>
            </div>
          </StaggerItem>

          <StaggerItem className="h-full flex">
            <div className="h-full w-full flex flex-col justify-start rounded-2xl border border-border/70 bg-card p-6 shadow-xs hover:shadow-md hover:border-primary/40 transition-all duration-200">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-muted text-primary mb-4 shrink-0">
                <SlidersHorizontal className="h-5 w-5" />
              </div>
              <h4 className="text-base font-bold text-foreground">Fraction & Unit Mastery</h4>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                Auto-parses fractions like &quot;হাফ&quot; (0.5), &quot;দেড়&quot; (1.5), and units like &quot;হালি&quot;, &quot;ডজন&quot;, &quot;kg&quot;, &quot;packets&quot;, and &quot;L&quot;.
              </p>
            </div>
          </StaggerItem>

          <StaggerItem className="h-full flex">
            <div className="h-full w-full flex flex-col justify-start rounded-2xl border border-border/70 bg-card p-6 shadow-xs hover:shadow-md hover:border-primary/40 transition-all duration-200">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-muted text-primary mb-4 shrink-0">
                <LayoutList className="h-5 w-5" />
              </div>
              <h4 className="text-base font-bold text-foreground">Zero-Clutter Flat List</h4>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                No complex category folders or distracting aisle dividers. Pure, minimalist list view for maximum speed.
              </p>
            </div>
          </StaggerItem>

          <StaggerItem className="h-full flex">
            <div className="h-full w-full flex flex-col justify-start rounded-2xl border border-border/70 bg-card p-6 shadow-xs hover:shadow-md hover:border-primary/40 transition-all duration-200">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-muted text-primary mb-4 shrink-0">
                <Zap className="h-5 w-5" />
              </div>
              <h4 className="text-base font-bold text-foreground">Sub-Millisecond On-Device</h4>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                Parser algorithms run 100% locally on your smartphone with zero remote server lag and zero internet required.
              </p>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
