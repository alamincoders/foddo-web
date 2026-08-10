import { ShieldCheck, HardDrive, UserX, Lock, ArrowDownToLine } from "lucide-react";

export function PrivacySection() {
  return (
    <section id="privacy" className="py-20 sm:py-32 bg-surface/50 border-t border-border/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-muted px-4 py-1.5 text-xs font-bold text-primary shadow-sm mb-4">
            <ShieldCheck className="h-3.5 w-3.5 fill-primary text-primary" />
            <span>Local-First & Data Sovereignty</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Your Grocery Lists Stay <span className="text-primary">100% Private</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg leading-relaxed">
            FODDO is architected from the ground up as a local-first application. We don&apos;t collect your personal lists, store your grocery habits on central cloud servers, or sell advertising data.
          </p>
        </div>

        {/* 4 Core Pillars */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-muted text-primary mb-5">
              <HardDrive className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-foreground">100% On-Device Storage</h3>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
              All your shopping lists and items are persisted directly on your device. Instant reads and writes with zero network tracking.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-muted text-primary mb-5">
              <UserX className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-foreground">Zero Account Gate</h3>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
              No mandatory sign-in, email validation, or phone verification required. Open the app and start creating shopping lists right away.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-muted text-primary mb-5">
              <Lock className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-foreground">Contextual Demographics</h3>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
              Demographic inputs (gender/age) are entirely optional and contextual—used strictly for tailored household product suggestions, never as a gate.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-muted text-primary mb-5">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-foreground">Complete Data Ownership</h3>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
              You own your data completely. Backup, export, or clear your list history anytime with one click in the app Settings menu.
            </p>
          </div>
        </div>

        {/* Play Store Download Callout Card */}
        <div className="mt-20 rounded-3xl bg-gradient-to-r from-primary via-primary-soft to-primary p-8 sm:p-12 text-white shadow-2xl text-center relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h3 className="text-3xl font-extrabold sm:text-4xl">
              Ready to Upgrade Your Grocery Shopping?
            </h3>
            <p className="text-white/90 text-base sm:text-lg leading-relaxed">
              Experience the instant speed of FODDO today. Download free from Google Play and start organizing shopping trips in under 3 seconds.
            </p>
            <div className="pt-4 flex justify-center">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 text-base font-extrabold text-primary shadow-xl hover:bg-slate-50 transition-all hover:scale-105 active:scale-100"
              >
                <ArrowDownToLine className="h-5 w-5 text-primary" />
                <span>Get FODDO on Google Play</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
