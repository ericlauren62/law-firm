import ContactFirstSection from "@/components/contact/ContactFirstSection";
import ContactHero from "@/components/contact/ContactHero";
import ContactCard from "@/components/shared/ContactCard";

export default function page() {
  return (
    <main>
      <ContactHero />
      <ContactFirstSection />
      <ContactCard />
    </main>
  );
}
