import { Metadata } from "next";
import Hero from "@/components/landing/Hero";
import WhyDoSales from "@/components/landing/WhyDoSales";
import DiscoverySection from "@/components/landing/DiscoverySection";
import WaterfallSection from "@/components/landing/WaterfallSection";
import RealPainPoints from "@/components/landing/RealPainPoints";
import PlatformSection from "@/components/landing/PlatformSection/PlatformSection";
import ClosingCTA from "@/components/landing/ClosingCTA";
import { fetchStrapi } from "@/lib/strapi";

export const metadata: Metadata = {
  title: "AI-Powered B2B Lead Generation & Outreach",
  description: "Automate your B2B sales pipeline with DoSales AI. Discover leads, enrich data, and qualify prospects automatically across MENA and Southeast Asia.",
};

export default async function Home() {
  const [
    heroRes,
    whyDoSalesRes,
    waterfallRes,
    discoveryRes,
    realPainPointRes,
    platformRes,
    closingCtaRes,
  ] = await Promise.all([
    fetchStrapi("hero-section", { populate: "*" }),
    fetchStrapi("whydo-sales-section"),
    fetchStrapi("waterfall"),
    fetchStrapi("discovery-section", { populate: "*" }),
    fetchStrapi("real-pain-point", { "populate[testimonalCards][populate]": "*" }),
    fetchStrapi("platform-section", { 
      "populate[setupYourSalesEngine][populate]": "*",
      "populate[funnelAndImage][populate]": "*" 
    }),
    fetchStrapi("closing-cta", { populate: "*" }),
  ]);

  return (
    <main className="min-h-screen">
      <div className="bg-gradient-to-br from-bg-pale to-blue-ghost to-20%">
        <Hero data={heroRes?.data} />
      </div>
      <WhyDoSales data={whyDoSalesRes?.data} />
      <WaterfallSection data={waterfallRes?.data} />
      <DiscoverySection data={discoveryRes?.data} />
      <RealPainPoints data={realPainPointRes?.data} />
      <PlatformSection data={platformRes?.data} />
      <ClosingCTA data={closingCtaRes?.data} />
    </main>
  );
}

