import ServicesFirstSection from "@/components/services/ServicesFirstSection";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesSecondSection from "@/components/services/ServicesSecondSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Thommessen and Paul Law Firm",
  description:
    "Experienced, award-winning attorneys Concentrating in commercial litation, complex business litigation, personal injury and committed to helping clients solve their most complex cases.",
};

export default function page() {
  return (
    <main>
      <ServicesHero />
      <ServicesFirstSection />
      <ServicesSecondSection />
    </main>
  );
}
