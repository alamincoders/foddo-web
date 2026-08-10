import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { EcosystemShowcase } from "@/components/landing/EcosystemShowcase";
import { TTFVPipelineSection } from "@/components/landing/TTFVPipelineSection";
import { SmartInputSection } from "@/components/landing/SmartInputSection";
import { FeatureStickyJourney } from "@/components/landing/FeatureStickyJourney";
import { FamilySyncSection } from "@/components/landing/FamilySyncSection";
import { LocalPrivacyBento } from "@/components/landing/LocalPrivacyBento";
import { FAQSection } from "@/components/landing/FAQSection";
import { FinalCTASection } from "@/components/landing/FinalCTASection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans selection:bg-primary/20 selection:text-primary overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <EcosystemShowcase />
        <TTFVPipelineSection />
        <SmartInputSection />
        <FeatureStickyJourney />
        <FamilySyncSection />
        <LocalPrivacyBento />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
