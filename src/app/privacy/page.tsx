import type { Metadata } from "next";
import { LegalDocLayout, LegalSection } from "@/components/legal/LegalDocLayout";
import { ShieldCheck, HardDrive, Lock, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Foddo Local-First Smart Grocery List",
  description:
    "Foddo Privacy Policy detailing local-first data persistence, zero mandatory sign-in, optional demographic policy, and data sovereignty guarantees.",
  alternates: {
    canonical: "https://foddo.itechills.com/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Foddo Local-First Smart Grocery List",
    description:
      "Understand Foddo's local-first privacy guarantees: 100% on-device storage, zero mandatory sign-in, and zero tracking.",
    url: "https://foddo.itechills.com/privacy",
    siteName: "Foddo by iTechills",
  },
};

const sections: LegalSection[] = [
  { id: "overview", title: "1. Overview & Local-First Philosophy" },
  { id: "data-collection", title: "2. Data We Collect (And Don't Collect)" },
  { id: "demographics", title: "3. Optional Demographic Data Policy" },
  { id: "storage-security", title: "4. Local Storage & SQLite Security" },
  { id: "third-party", title: "5. Third-Party Services & Play Store" },
  { id: "user-rights", title: "6. Your Data Rights & Deletion" },
  { id: "contact", title: "7. Contact Information" },
];

export default function PrivacyPage() {
  return (
    <LegalDocLayout
      title="Privacy Policy"
      subtitle="Foddo is built local-first. We prioritize your data privacy by persisting your shopping lists locally on your device with zero cloud tracking."
      lastUpdated="August 9, 2026"
      sections={sections}
    >
      <div className="space-y-10 text-foreground">
        {/* Section 1 */}
        <section id="overview" className="scroll-mt-24 space-y-3">
          <h2 className="text-xl font-bold text-foreground border-b border-border pb-2">
            1. Overview & Local-First Philosophy
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            At <strong>Foddo</strong>, we believe your personal shopping habits, grocery lists, and family budgets are your private business. Traditional applications send every keystroke to remote cloud servers to analyze shopping behavior. Foddo takes an entirely different approach: <strong>Local-First Architecture</strong>.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            When you create shopping lists, add items, or organize aisles in Foddo, all data remains stored directly inside your device&apos;s local SQLite database. No account creation or email registration is required to use the app.
          </p>
        </section>

        {/* Section 2 */}
        <section id="data-collection" className="scroll-mt-24 space-y-3">
          <h2 className="text-xl font-bold text-foreground border-b border-border pb-2">
            2. Data We Collect (And Don&apos;t Collect)
          </h2>
          <div className="rounded-xl border border-border bg-surface p-4 text-xs space-y-2">
            <div className="flex items-center gap-2 font-bold text-primary">
              <ShieldCheck className="h-4 w-4" />
              <span>Core Principle: Zero Keystroke Tracking</span>
            </div>
            <p className="text-muted-foreground">
              We do not track, collect, or upload your shopping list titles, item names, prices, or store locations to external servers.
            </p>
          </div>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
            <li>
              <strong>Shopping List Items:</strong> Stored 100% locally on your smartphone via SQLite database.
            </li>
            <li>
              <strong>App Preferences:</strong> Theme settings (Dark/Light), active list selections, and sorting order are stored locally.
            </li>
            <li>
              <strong>No Mandatory Identifiers:</strong> We do not require your full name, phone number, or social logins to access the application.
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section id="demographics" className="scroll-mt-24 space-y-3">
          <h2 className="text-xl font-bold text-foreground border-b border-border pb-2">
            3. Optional Demographic Data Policy
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            To provide optional smart household recommendations, Foddo may give you the option to input demographic preferences such as household size or age bracket.
          </p>
          <div className="rounded-xl border border-primary/20 bg-primary-muted p-4 text-xs text-primary space-y-1">
            <span className="font-bold block">Strict Consent & Contextual Standard:</span>
            <span>
              1. Demographic inputs are strictly optional and contextual.<br />
              2. Demographic prompts NEVER act as a gate to application functionality.<br />
              3. Any demographic selections remain on your local device unless explicit family sync is configured.
            </span>
          </div>
        </section>

        {/* Section 4 */}
        <section id="storage-security" className="scroll-mt-24 space-y-3">
          <h2 className="text-xl font-bold text-foreground border-b border-border pb-2">
            4. Local Storage & SQLite Security
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Foddo utilizes an embedded <strong>SQLite database</strong> managed via Drizzle ORM on native mobile platforms (Android/iOS). Data is protected by OS-level sandbox isolation, preventing other applications on your device from accessing Foddo storage.
          </p>
          <div className="flex items-center gap-3 text-xs text-muted-foreground bg-surface p-3 rounded-lg border border-border">
            <HardDrive className="h-4 w-4 text-primary shrink-0" />
            <span>Sandboxed Mobile Database • Zero Remote Analytics Tracking</span>
          </div>
        </section>

        {/* Section 5 */}
        <section id="third-party" className="scroll-mt-24 space-y-3">
          <h2 className="text-xl font-bold text-foreground border-b border-border pb-2">
            5. Third-Party Services & Play Store
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Foddo is distributed through official application marketplaces such as the <strong>Google Play Store</strong>. When downloading the application or accessing web documentation, Google Play services may collect standard anonymous crash logs and installation diagnostics in accordance with their privacy policies.
          </p>
        </section>

        {/* Section 6 */}
        <section id="user-rights" className="scroll-mt-24 space-y-3">
          <h2 className="text-xl font-bold text-foreground border-b border-border pb-2">
            6. Your Data Rights & Deletion
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Because your data resides on your device, you possess total data sovereignty:
          </p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1.5">
            <li><strong>Clear Data:</strong> You can wipe all local databases instantly from the app Settings menu.</li>
            <li><strong>App Uninstall:</strong> Uninstalling Foddo permanently removes all stored database files from your device.</li>
            <li><strong>Data Export:</strong> You can export your shopping lists to CSV or JSON format anytime.</li>
          </ul>
        </section>

        {/* Section 7 */}
        <section id="contact" className="scroll-mt-24 space-y-3">
          <h2 className="text-xl font-bold text-foreground border-b border-border pb-2">
            7. Contact Information
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            If you have questions regarding this Privacy Policy or Foddo&apos;s local-first architecture, please reach out to our privacy engineering team:
          </p>
          <div className="mt-2 inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-2.5 text-sm font-semibold text-foreground">
            <Mail className="h-4 w-4 text-primary" />
            <a href="mailto:hello@itechills.com" className="hover:text-primary transition-colors">
              hello@itechills.com
            </a>
          </div>
        </section>
      </div>
    </LegalDocLayout>
  );
}
