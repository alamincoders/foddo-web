import { Zap, Clock, ShieldCheck, Check, X } from "lucide-react";

export function TTFVSection() {
  return (
    <section id="speed" className="py-20 sm:py-28 bg-surface/60 border-y border-border/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-muted px-4 py-1.5 text-xs font-bold text-accent shadow-sm mb-4">
            <Zap className="h-3.5 w-3.5 fill-accent text-accent" />
            <span>Time-To-First-Value Standard</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            From Launch to &quot;Milk&quot; in Under <span className="text-primary">3 Seconds</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg leading-relaxed">
            Most grocery apps force you through sign-up walls, mandatory email verification, and onboarding surveys before you can add a single item. FODDO gets out of your way immediately.
          </p>
        </div>

        {/* Side-by-Side Comparison */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12 max-w-5xl mx-auto">
          {/* Traditional Grocery App (Slow & Frustrating) */}
          <div className="rounded-3xl border border-red-200 dark:border-red-950 bg-card p-6 sm:p-8 shadow-sm relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-border pb-4 mb-6">
              <div className="flex items-center gap-2 text-red-600 dark:text-red-400 font-bold text-sm">
                <Clock className="h-4 w-4" />
                <span>Other Shopping Apps</span>
              </div>
              <span className="rounded-full bg-red-100 dark:bg-red-900/40 px-3 py-1 text-xs font-bold text-red-600 dark:text-red-400">
                Avg. ~120 Seconds
              </span>
            </div>

            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="mt-0.5 rounded-full bg-red-100 p-1 text-red-600 dark:bg-red-900/40 dark:text-red-400">
                  <X className="h-3.5 w-3.5" />
                </div>
                <div>
                  <strong className="text-foreground">Mandatory Sign-Up Gate:</strong> Create account with email, password, or OAuth.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-0.5 rounded-full bg-red-100 p-1 text-red-600 dark:bg-red-900/40 dark:text-red-400">
                  <X className="h-3.5 w-3.5" />
                </div>
                <div>
                  <strong className="text-foreground">Intrusive Surveys:</strong> Demographic questionnaires, household size, and zip code prompts.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-0.5 rounded-full bg-red-100 p-1 text-red-600 dark:bg-red-900/40 dark:text-red-400">
                  <X className="h-3.5 w-3.5" />
                </div>
                <div>
                  <strong className="text-foreground">Cloud Loading Latency:</strong> Waiting for remote server response to save an item.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-0.5 rounded-full bg-red-100 p-1 text-red-600 dark:bg-red-900/40 dark:text-red-400">
                  <X className="h-3.5 w-3.5" />
                </div>
                <div>
                  <strong className="text-foreground">No Offline Operation:</strong> App freezes when network connectivity drops in store aisles.
                </div>
              </li>
            </ul>
          </div>

          {/* FODDO App (Instant & Local) */}
          <div className="rounded-3xl border-2 border-primary bg-card p-6 sm:p-8 shadow-xl relative overflow-hidden ring-1 ring-primary/20">
            <div className="absolute top-0 right-0 bg-primary px-4 py-1.5 rounded-bl-2xl text-xs font-extrabold text-white uppercase tracking-wider">
              FODDO Standard
            </div>

            <div className="flex items-center justify-between border-b border-border pb-4 mb-6">
              <div className="flex items-center gap-2 text-primary font-bold text-sm">
                <Zap className="h-4 w-4 fill-primary" />
                <span>FODDO Local-First</span>
              </div>
              <span className="rounded-full bg-primary-muted px-3 py-1 text-xs font-extrabold text-primary">
                &lt; 3 Seconds
              </span>
            </div>

            <ul className="space-y-4 text-sm text-foreground">
              <li className="flex items-start gap-3">
                <div className="mt-0.5 rounded-full bg-primary p-1 text-white">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <div>
                  <strong className="text-primary">Instant Launch:</strong> App opens directly to your active shopping list.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-0.5 rounded-full bg-primary p-1 text-white">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <div>
                  <strong className="text-primary">Zero Account Gates:</strong> No sign-in, no passwords, no forced data collection.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-0.5 rounded-full bg-primary p-1 text-white">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <div>
                  <strong className="text-primary">Local SQLite Speed:</strong> Sub-millisecond database read/writes directly on your device.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-0.5 rounded-full bg-primary p-1 text-white">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <div>
                  <strong className="text-primary">100% Offline First:</strong> Works instantly anywhere—even in basement store aisles.
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Step Breakdown Cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3 max-w-5xl mx-auto">
          <div className="rounded-2xl border border-border bg-card p-6 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-muted text-primary font-bold text-xl mb-4">
              01
            </div>
            <h3 className="font-bold text-foreground text-base">1. Tap App Icon</h3>
            <p className="mt-2 text-xs text-muted-foreground">Opens instantly without splash delay or cloud auth sync delays.</p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-muted text-accent font-bold text-xl mb-4">
              02
            </div>
            <h3 className="font-bold text-foreground text-base">2. Type &quot;Milk&quot;</h3>
            <p className="mt-2 text-xs text-muted-foreground">Smart quick-add input with auto category prediction.</p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-muted text-primary font-bold text-xl mb-4">
              03
            </div>
            <h3 className="font-bold text-foreground text-base">3. Tap Done</h3>
            <p className="mt-2 text-xs text-muted-foreground">Item saved locally in SQLite in under 3 seconds total.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
