import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { MemberTransformationSection } from "@/components/MemberTransformationSection";
import { FreedomRequiresSection } from "@/components/FreedomRequiresSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { CommunityRhythmSection } from "@/components/CommunityRhythmSection";
import { MonthlyFocusSection } from "@/components/MonthlyFocusSection";
import { ProofOfLifeSection } from "@/components/ProofOfLifeSection";
import { TeachingSection } from "@/components/TeachingSection";
import { CommunityBelongingSection } from "@/components/CommunityBelongingSection";
import { AudienceSection } from "@/components/AudienceSection";
import { CultureSection } from "@/components/CultureSection";
import { MemberProgressSection } from "@/components/MemberProgressSection";
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
        <MemberTransformationSection />
        <FreedomRequiresSection />
        <BenefitsSection />
        <CommunityRhythmSection />
        <MonthlyFocusSection />
        <ProofOfLifeSection />
        <TeachingSection />
        <CommunityBelongingSection />
        <AudienceSection />
        <CultureSection />
        <MemberProgressSection />
        <OfferSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
      <MobileStickyCTA />
    </div>
  );
}
