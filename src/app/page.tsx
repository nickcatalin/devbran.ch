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
    <div className="min-h-screen bg-background text-foreground">
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
