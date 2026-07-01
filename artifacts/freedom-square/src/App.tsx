import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { FreedomRequiresSection } from "@/components/FreedomRequiresSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { CommunityRhythmSection } from "@/components/CommunityRhythmSection";
import { TeachingSection } from "@/components/TeachingSection";
import { AudienceSection } from "@/components/AudienceSection";
import { PullQuote } from "@/components/PullQuote";
import { CultureSection } from "@/components/CultureSection";
import { OfferSection } from "@/components/OfferSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";

export default function App() {
  return (
    <div className="min-h-screen bg-ivory text-deepNavy font-sans selection:bg-gold/30 selection:text-navy">
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <FreedomRequiresSection />
        <BenefitsSection />
        <CommunityRhythmSection />
        <TeachingSection />
        <AudienceSection />
        <CultureSection />
        <OfferSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
      <MobileStickyCTA />
    </div>
  );
}
