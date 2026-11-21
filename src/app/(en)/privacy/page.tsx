import type { Metadata } from "next";
import { LegalDocLayout, LegalSection } from "@/components/legal/LegalDocLayout";
import { ShieldCheck, HardDrive, Mic, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Foddo",
  description:
    "Foddo keeps your shopping lists on your phone. Read what the app does and does not collect, how optional voice input works, and how to export or delete your data.",
  alternates: {
    canonical: "https://foddo.itechills.com/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Foddo",
    description:
      "Your lists stay on your phone. No sign-in, no ads, no trackers. Voice input is optional.",
    url: "https://foddo.itechills.com/privacy",
    siteName: "Foddo by iTechills",
  },
};

const sections: LegalSection[] = [
  { id: "overview", title: "1. Overview" },
  { id: "data-collection", title: "2. What We Collect (And Don't)" },
  { id: "voice", title: "3. Voice Input (Optional)" },
  { id: "backups", title: "4. Backups, Sharing & Exports" },
  { id: "storage-security", title: "5. Storage & Security" },
  { id: "third-party", title: "6. Third-Party Services" },
  { id: "user-rights", title: "7. Your Data Rights & Deletion" },
  { id: "children", title: "8. Children" },
  { id: "contact", title: "9. Contact" },
];

export default function PrivacyPage() {
  return (
    <LegalDocLayout
      title="Privacy Policy"
      subtitle="Your shopping lists stay on your phone. Foddo has no accounts, no ads and no trackers."
      lastUpdated="November 21, 2026"
      sections={sections}
    >
      <div className="space-y-10 text-foreground">
        <section id="overview" className="scroll-mt-24 space-y-3">
          <h2 className="text-xl font-bold text-foreground border-b border-border pb-2">1. Overview</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong>Foddo</strong> is a shopping list you can talk or type to. Your lists, your past shopping and your settings are stored in a database on your phone. There is no account to create, and the app contains no advertising and no analytics or tracking tools.
          </p>
        </section>

        <section id="data-collection" className="scroll-mt-24 space-y-3">
          <h2 className="text-xl font-bold text-foreground border-b border-border pb-2">2. What We Collect (And Don&apos;t)</h2>
          <div className="rounded-xl border border-border bg-surface p-4 text-xs space-y-2">
            <div className="flex items-center gap-2 font-bold text-primary">
              <ShieldCheck className="h-4 w-4" />
              <span>Nothing leaves your phone</span>
            </div>
            <p className="text-muted-foreground">
              Foddo does not collect or upload your list items, prices, spending history or settings. We have no servers that receive them.
            </p>
          </div>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
            <li><strong>Lists and history:</strong> stored only in the app&apos;s private database on your phone.</li>
            <li><strong>Settings:</strong> language, theme, currency and vibration are stored on your phone.</li>
            <li><strong>No personal details:</strong> we do not ask for your name, email, phone number or any login.</li>
          </ul>
        </section>

        <section id="voice" className="scroll-mt-24 space-y-3">
          <h2 className="text-xl font-bold text-foreground border-b border-border pb-2">3. Voice Input (Optional)</h2>
          <div className="flex items-center gap-3 rounded-xl border border-primary/20 bg-primary-muted p-4 text-xs text-primary">
            <Mic className="h-4 w-4 shrink-0" />
            <span className="font-semibold">You can use Foddo fully without ever using the microphone.</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            If you tap the microphone button, Foddo asks for the <strong>microphone permission</strong> and uses your phone&apos;s own speech recognition service to turn what you say into text. Foddo then turns that text into list items.
          </p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
            <li>Foddo does <strong>not</strong> receive, record or store your voice. It only receives the resulting text.</li>
            <li>Depending on your phone and on whether the offline language pack is installed, the speech service (provided by Google) may process your speech on its servers. That processing is governed by Google&apos;s privacy policy.</li>
            <li>You can revoke the microphone permission at any time in your phone&apos;s settings.</li>
          </ul>
        </section>

        <section id="backups" className="scroll-mt-24 space-y-3">
          <h2 className="text-xl font-bold text-foreground border-b border-border pb-2">4. Backups, Sharing & Exports</h2>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
            <li><strong>Export backup:</strong> creates a JSON file that you choose where to save or send. Foddo does not upload it.</li>
            <li><strong>Import backup:</strong> reads a file that you pick.</li>
            <li><strong>Share list:</strong> opens your phone&apos;s share menu with your list as plain text. You choose the app and the person.</li>
          </ul>
        </section>

        <section id="storage-security" className="scroll-mt-24 space-y-3">
          <h2 className="text-xl font-bold text-foreground border-b border-border pb-2">5. Storage & Security</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Foddo stores data in an embedded SQLite database inside the app&apos;s private storage. Your phone&apos;s operating system prevents other apps from reading it.
          </p>
          <div className="flex items-center gap-3 text-xs text-muted-foreground bg-surface p-3 rounded-lg border border-border">
            <HardDrive className="h-4 w-4 text-primary shrink-0" />
            <span>Private app storage • No analytics • No advertising</span>
          </div>
        </section>

        <section id="third-party" className="scroll-mt-24 space-y-3">
          <h2 className="text-xl font-bold text-foreground border-b border-border pb-2">6. Third-Party Services</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Foddo is distributed through the <strong>Google Play Store</strong>, which may collect standard installation and crash diagnostics under Google&apos;s own policies. If you use voice input, your phone&apos;s speech service may be involved as described in section 3. Foddo contains no other third-party services that receive your data.
          </p>
        </section>

        <section id="user-rights" className="scroll-mt-24 space-y-3">
          <h2 className="text-xl font-bold text-foreground border-b border-border pb-2">7. Your Data Rights & Deletion</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">Because your data lives on your phone, you are in control of it:</p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1.5">
            <li><strong>Delete everything:</strong> Settings, then <em>Delete all my data</em>, erases your lists and history immediately.</li>
            <li><strong>Uninstall:</strong> removing Foddo permanently deletes its database from your phone.</li>
            <li><strong>Export:</strong> save a backup file whenever you like.</li>
          </ul>
        </section>

        <section id="children" className="scroll-mt-24 space-y-3">
          <h2 className="text-xl font-bold text-foreground border-b border-border pb-2">8. Children</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">Foddo is a general shopping tool and is not directed at children. It does not knowingly collect any personal information from anyone.</p>
        </section>

        <section id="contact" className="scroll-mt-24 space-y-3">
          <h2 className="text-xl font-bold text-foreground border-b border-border pb-2">9. Contact</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">If you have questions about this policy or about how Foddo handles data, write to us:</p>
          <div className="mt-2 inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-2.5 text-sm font-semibold text-foreground">
            <Mail className="h-4 w-4 text-primary" />
            <a href="mailto:support@itechills.com" className="hover:text-primary transition-colors">
              support@itechills.com
            </a>
          </div>
        </section>
      </div>
    </LegalDocLayout>
  );
}
