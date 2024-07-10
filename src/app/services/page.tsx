import ServicesFirstSection from "@/components/services/ServicesFirstSection";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesSecondSection from "@/components/services/ServicesSecondSection";

export default function page() {
  return (
    <main>
      <ServicesHero />
      <ServicesFirstSection />
      <ServicesSecondSection />
    </main>
  );
}
