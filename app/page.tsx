import Hero from "@/components/landing/Hero";
import DashboardPreview from "@/components/landing/DashboardPreview";
import LandingContent from "@/components/landing/LandingContent";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <DashboardPreview />
      <LandingContent />
    </main>
  );
}
