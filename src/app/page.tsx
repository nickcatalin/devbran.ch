import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Navbar from "@/components/sections/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background-primary dark:bg-dark-background-primary">
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
}
