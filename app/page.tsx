import Hero from "@/components/landing/Hero";
import LeadsImage from "@/components/landing/LeadsImage";
import WhyDoSales from "@/components/landing/WhyDoSales";
import DiscoverySection from "@/components/landing/DiscoverySection";
import WaterfallSection from "@/components/landing/WaterfallSection";
import RealPainPoints from "@/components/landing/RealPainPoints";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <LeadsImage />
      <WhyDoSales />
      <RealPainPoints />
      <WaterfallSection />
      <DiscoverySection />
    </main>
  );
}
