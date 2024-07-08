import FeaturedNews from "@/components/home/FeaturedNews";
import HomeForthSection from "@/components/home/HomeForthSection";
import HomeHero from "@/components/home/HomeHero";
import HomeSecondSection from "@/components/home/HomeSecondSection";
import Services from "@/components/home/Services";
import FeaturedLawyer from "@/components/shared/FeaturedLawyer";
import StepsCard from "@/components/shared/StepsCard";
import TrustCard from "@/components/shared/TrustCard";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <TrustCard />
      <HomeSecondSection />
      <Services />
      <StepsCard />
      <HomeForthSection />
      <FeaturedLawyer />
      <FeaturedNews />
    </main>
  );
}
