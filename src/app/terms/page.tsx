import type { Metadata } from "next";
import { LegalDocLayout, LegalSection } from "@/components/legal/LegalDocLayout";
import { FileText, ShieldAlert, Mail, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | FODDO",
  description:
    "FODDO Terms of Service outlining licensing terms, offline operation responsibilities, local data ownership, and user agreements.",
};

const sections: LegalSection[] = [
  { id: "acceptance", title: "1. Acceptance of Terms" },
  { id: "license", title: "2. Software License & Permitted Use" },
  { id: "offline-disclaimer", title: "3. Offline Operation & Data Ownership" },
  { id: "intellectual-property", title: "4. Intellectual Property Rights" },
  { id: "disclaimer-warranties", title: "5. Disclaimer of Warranties" },
  { id: "limitation-liability", title: "6. Limitation of Liability" },
  { id: "modifications-contact", title: "7. Modifications & Support Contact" },
];

export default function TermsPage() {
  return (
    <LegalDocLayout
      title="Terms of Service"
      subtitle="Please review these Terms of Service governing your download, access, and use of the FODDO smart grocery application and services."
      lastUpdated="August 9, 2026"
      sections={sections}
    >
      <div className="space-y-10 text-foreground">
        {/* Section 1 */}
        <section id="acceptance" className="scroll-mt-24 space-y-3">
          <h2 className="text-xl font-bold text-foreground border-b border-border pb-2">
            1. Acceptance of Terms
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            By downloading, installing, or using the <strong>FODDO</strong> mobile application or website, you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, please do not use the software.
          </p>
        </section>

        {/* Section 2 */}
        <section id="license" className="scroll-mt-24 space-y-3">
          <h2 className="text-xl font-bold text-foreground border-b border-border pb-2">
            2. Software License & Permitted Use
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            FODDO grants you a personal, non-exclusive, non-transferable, revocable license to use the application for your personal, non-commercial grocery and shopping list management in accordance with these Terms.
          </p>
          <div className="rounded-xl border border-border bg-surface p-4 text-xs space-y-2">
            <div className="flex items-center gap-2 font-bold text-primary">
              <CheckCircle2 className="h-4 w-4" />
              <span>You Are Permitted To:</span>
            </div>
            <ul className="list-disc pl-5 text-muted-foreground space-y-1">
              <li>Use FODDO across your personal mobile devices.</li>
              <li>Create, edit, organize, and export shopping lists.</li>
              <li>Share lists locally or via supported family sync mechanisms.</li>
            </ul>
          </div>
        </section>

        {/* Section 3 */}
        <section id="offline-disclaimer" className="scroll-mt-24 space-y-3">
          <h2 className="text-xl font-bold text-foreground border-b border-border pb-2">
            3. Offline Operation & Data Ownership
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            FODDO operates under a <strong>local-first data architecture</strong>. All shopping list data is created and saved directly on your local device. Because FODDO does not mandate cloud server account backups:
          </p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1.5">
            <li><strong>Device Security:</strong> You are responsible for protecting your device against unauthorized physical access.</li>
            <li><strong>Device Backups:</strong> Performing system backups (e.g., Android Backup/iOS iCloud Backup) ensures your local database can be restored upon replacing your device.</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section id="intellectual-property" className="scroll-mt-24 space-y-3">
          <h2 className="text-xl font-bold text-foreground border-b border-border pb-2">
            4. Intellectual Property Rights
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            All rights, title, and interest in and to FODDO—including the app design, branding, logo assets, UI layouts, Bazar Mode concepts, source code, and website content—are owned by FODDO and protected by applicable copyright and intellectual property laws.
          </p>
        </section>

        {/* Section 5 */}
        <section id="disclaimer-warranties" className="scroll-mt-24 space-y-3">
          <h2 className="text-xl font-bold text-foreground border-b border-border pb-2">
            5. Disclaimer of Warranties
          </h2>
          <div className="rounded-xl border border-amber-200 dark:border-amber-900 bg-amber-50/50 dark:bg-amber-950/20 p-4 text-xs text-amber-800 dark:text-amber-300 space-y-2">
            <div className="flex items-center gap-2 font-bold">
              <ShieldAlert className="h-4 w-4" />
              <span>&quot;As Is&quot; Software Warranty Disclaimer</span>
            </div>
            <p className="leading-relaxed">
              FODDO is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis without warranties of any kind, whether express or implied, including fitness for a particular purpose or error-free operation.
            </p>
          </div>
        </section>

        {/* Section 6 */}
        <section id="limitation-liability" className="scroll-mt-24 space-y-3">
          <h2 className="text-xl font-bold text-foreground border-b border-border pb-2">
            6. Limitation of Liability
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            To the maximum extent permitted by applicable law, in no event shall FODDO or its developers be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the application.
          </p>
        </section>

        {/* Section 7 */}
        <section id="modifications-contact" className="scroll-mt-24 space-y-3">
          <h2 className="text-xl font-bold text-foreground border-b border-border pb-2">
            7. Modifications & Support Contact
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            We reserve the right to modify these Terms of Service at any time. Updated terms will be posted on this page with an updated &quot;Last Updated&quot; revision date. Continued use of the application constitutes acceptance of the modified Terms.
          </p>
          <div className="mt-4 flex items-center gap-3">
            <span className="text-sm text-muted-foreground">For legal inquiries or support:</span>
            <a
              href="mailto:support@foddo.app"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-card"
            >
              <Mail className="h-4 w-4" />
              <span>support@foddo.app</span>
            </a>
          </div>
        </section>
      </div>
    </LegalDocLayout>
  );
}
