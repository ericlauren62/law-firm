import ContactFirstSection from "@/components/contact/ContactFirstSection";
import ContactHero from "@/components/contact/ContactHero";
import ContactCard from "@/components/shared/ContactCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Thommessen and Paul Law Firm",
  description:
    "Experienced, award-winning attorneys Concentrating in commercial litation, complex business litigation, personal injury and committed to helping clients solve their most complex cases.",
};

export default function page() {
  return (
    <main>
      <ContactHero />
      <ContactFirstSection />
      <ContactCard />
    </main>
  );
}
