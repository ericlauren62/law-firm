import AttorneyFirstSection from "@/components/attorneys/AttorneyFirstSection";
import AttorneyHero from "@/components/attorneys/AttorneyHero";
import AttorneysList from "@/components/attorneys/AttorneysList";
import ContactCard from "@/components/shared/ContactCard";

export default function page() {
  return (
    <main>
      <AttorneyHero />
      <AttorneysList />
      <AttorneyFirstSection />
      <ContactCard />
    </main>
  );
}
