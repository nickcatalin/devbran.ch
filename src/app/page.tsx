import {
  LandingNavbar,
  HeroSection,
  FeaturesSection,
  TestimonialsSection,
  FaqSection,
  CtaSection,
  Footer
} from "@/components/landing";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E7EBC5] to-[#E8C7DE] text-[#0C0C0C]">
      <LandingNavbar />
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
