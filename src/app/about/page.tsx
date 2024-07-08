import AboutFeaturedNews from "@/components/about/AboutFeaturedNews";
import AboutFirstSection from "@/components/about/AboutFirstSection";
import AboutHero from "@/components/about/AboutHero";
import AboutSecondSection from "@/components/about/AboutSecondSection";
import FeaturedLawyer from "@/components/shared/FeaturedLawyer";
import StepsCard from "@/components/shared/StepsCard";
import TrustCard from "@/components/shared/TrustCard";

export default function page() {
  return (
    <main>
      <AboutHero />
      <AboutFirstSection />
      <AboutSecondSection />
      <StepsCard />
      <div className="bg-black text-white">
        <TrustCard />
      </div>
      <AboutFeaturedNews />
      <FeaturedLawyer />
    </main>
  );
}
