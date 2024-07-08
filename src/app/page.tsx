import FeaturedLawyer from "@/components/home/FeaturedLawyer";
import FeaturedNews from "@/components/home/FeaturedNews";
import HomeFirstSection from "@/components/home/HomeFirstSection";
import HomeForthSection from "@/components/home/HomeForthSection";
import HomeHero from "@/components/home/HomeHero";
import HomeSecondSection from "@/components/home/HomeSecondSection";
import HomeThirdSection from "@/components/home/HomeThirdSection";
import Services from "@/components/home/Services";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeFirstSection />
      <HomeSecondSection />
      <Services />
      <HomeThirdSection />
      <HomeForthSection />
      <FeaturedLawyer />
      <FeaturedNews />
    </main>
  );
}
