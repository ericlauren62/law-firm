import AttorneyFirstSection from "@/components/attorneys/AttorneyFirstSection";
import AttorneyHero from "@/components/attorneys/AttorneyHero";
import AttorneysList from "@/components/attorneys/AttorneysList";
import ContactCard from "@/components/shared/ContactCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Attorneys | Thommessen and Paul Law Firm",
  description:
    "Experienced, award-winning attorneys Concentrating in commercial litation, complex business litigation, personal injury and committed to helping clients solve their most complex cases.",
};
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
