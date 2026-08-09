import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { TTFVSection } from "@/components/landing/TTFVSection";
import { FeatureGrid } from "@/components/landing/FeatureGrid";
import { PrivacySection } from "@/components/landing/PrivacySection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <TTFVSection />
        <FeatureGrid />
        <PrivacySection />
      </main>
      <Footer />
    </div>
  );
}
