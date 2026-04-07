import Hero from "@/components/landing/Hero";
import LeadsImage from "@/components/landing/LeadsImage";
import WhyDoSales from "@/components/landing/WhyDoSales";
import DiscoverySection from "@/components/landing/DiscoverySection";
import WaterfallSection from "@/components/landing/WaterfallSection";
import RealPainPoints from "@/components/landing/RealPainPoints";
import PlatformSection from "@/components/landing/PlatformSection/PlatformSection";
import ClosingCTA from "@/components/landing/ClosingCTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <LeadsImage />
      <WhyDoSales />
      <WaterfallSection />
      <DiscoverySection />
      <RealPainPoints />
      <PlatformSection />
      <ClosingCTA />
    </main>
  );
}
