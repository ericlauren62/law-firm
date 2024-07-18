import AboutFeaturedNews from "@/components/about/AboutFeaturedNews";
import AboutFirstSection from "@/components/about/AboutFirstSection";
import AboutHero from "@/components/about/AboutHero";
import AboutSecondSection from "@/components/about/AboutSecondSection";
import FeaturedLawyer from "@/components/shared/FeaturedLawyer";
import StepsCard from "@/components/shared/StepsCard";
import TrustCard from "@/components/shared/TrustCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Thommessen and Paul Law Firm",
  description:
    "Experienced, award-winning attorneys Concentrating in commercial litation, complex business litigation, personal injury and committed to helping clients solve their most complex cases.",
};

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
