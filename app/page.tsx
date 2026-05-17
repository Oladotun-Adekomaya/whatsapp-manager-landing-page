import Navbar from "@/app/components/landing/Navbar";
import Hero from "@/app/components/landing/Hero";
import SocialProofBar from "@/app/components/landing/SocialProofBar";
import ProblemSection from "@/app/components/landing/ProblemSection";
import FeaturesGrid from "@/app/components/landing/FeaturesGrid";
import HowItWorks from "@/app/components/landing/HowItWorks";
import WorkflowDeepDive from "@/app/components/landing/WorkflowDeepDive";
import UseCaseTabs from "@/app/components/landing/UseCaseTabs";
import AnalyticsSection from "@/app/components/landing/AnalyticsSection";
import PricingSection from "@/app/components/landing/PricingSection";
import FAQSection from "@/app/components/landing/FAQSection";
import FinalCTA from "@/app/components/landing/FinalCTA";
import Footer from "@/app/components/landing/Footer";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      <SocialProofBar />
      <ProblemSection />
      <FeaturesGrid />
      <HowItWorks />
      <WorkflowDeepDive />
      <UseCaseTabs />
      <AnalyticsSection />
      <PricingSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
