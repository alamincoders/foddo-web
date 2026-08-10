import Image from "next/image";
import { ShoppingBag, Users, Layers, Sparkles, CheckCircle2 } from "lucide-react";

export function FeatureGrid() {
  return (
    <section id="features" className="py-20 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-muted px-4 py-1.5 text-xs font-bold text-primary shadow-sm mb-4">
            <Sparkles className="h-3.5 w-3.5 fill-primary text-primary" />
            <span>Built For Real-World Grocery Shopping</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Everything You Need For <span className="text-primary">Stress-Free</span> Shopping
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg leading-relaxed">
            Foddo combines ergonomic 1-handed design, natural language smart parsing, and goal gradient motivation to streamline every trip to the store.
          </p>
        </div>

        {/* Feature 1: Bazar Mode (Large Spotlight) */}
        <div id="bazar-mode" className="mb-20 sm:mb-32 rounded-3xl border border-border bg-card p-6 sm:p-10 lg:p-12 shadow-lg relative overflow-hidden">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-xl bg-accent-muted px-3 py-1.5 text-xs font-bold text-accent">
                <ShoppingBag className="h-4 w-4" />
                <span>Bazar Mode (Goal Gradient)</span>
              </div>
              <h3 className="text-2xl font-extrabold text-foreground sm:text-3xl lg:text-4xl leading-tight">
                Transform Shopping Trips into Satisfying Accomplishments
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                When you step into the supermarket, activate <strong className="text-foreground">Bazar Mode</strong>. Designed around psychological Goal Gradient effects, it highlights your progress, enlarges touch targets for 1-handed walking operation, and celebrates list completion.
              </p>

              <ul className="space-y-3 text-sm text-foreground pt-2">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span>48px+ Touch Targets tailored for 1-handed walking</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span>Visual progress bar driven by the Zeigarnik Effect</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span>High-contrast dark/sunlight mode for high visibility</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[300px] sm:max-w-[340px] rounded-[36px] border-[6px] border-slate-900 bg-slate-900 shadow-2xl overflow-hidden ring-1 ring-white/10">
                <Image
                  src="/images/bazar-mode.png"
                  alt="Foddo Bazar Mode Screenshot"
                  width={340}
                  height={700}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2 & 3: Two-Column Cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Feature 2: Family Sync */}
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="inline-flex items-center gap-2 rounded-xl bg-primary-muted px-3 py-1.5 text-xs font-bold text-primary mb-4">
                <Users className="h-4 w-4" />
                <span>Family & Household Sync</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Seamless Family Grocery Lists
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Share grocery lists with family members without sacrificing data control. Collaborate in real-time on shared trips and household restocking.
              </p>
            </div>

            <div className="mt-8 flex justify-center">
              <div className="relative w-full max-w-[260px] sm:max-w-[280px] rounded-[28px] border-[5px] border-slate-900 bg-slate-900 shadow-lg overflow-hidden">
                <Image
                  src="/images/family-bazar.png"
                  alt="Family Bazar Sharing Screenshot"
                  width={280}
                  height={560}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Feature 3: Multilingual Smart Input */}
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="inline-flex items-center gap-2 rounded-xl bg-accent-muted px-3 py-1.5 text-xs font-bold text-accent mb-4">
                <Layers className="h-4 w-4" />
                <span>Multilingual Smart Input</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Clean, Single-List Speed
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Type naturally in English, বাংলা, or Banglish. Quantities and measurement units are parsed instantly into a clean, distraction-free list.
              </p>
            </div>

            <div className="mt-8 flex justify-center">
              <div className="relative w-full max-w-[260px] sm:max-w-[280px] rounded-[28px] border-[5px] border-slate-900 bg-slate-900 shadow-lg overflow-hidden">
                <Image
                  src="/images/smart-shopping-breakdown.png"
                  alt="Smart Shopping Breakdown Screenshot"
                  width={280}
                  height={560}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
