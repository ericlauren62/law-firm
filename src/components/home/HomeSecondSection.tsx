import { AccordionItem } from "@/types/AccordionItem";
import Accordion from "@/utils/Accordion";

export default function HomeSecondSection() {
  const accordionData: AccordionItem[] = [
    {
      id: "1",
      title: "Proven Track Record",
      content: "Our successful case outcomes and satisfied clients speak volumes about our dedication to excellence.",
    },
    {
      id: "2",
      title: "Personalized Approach ",
      content: "We understand that every client is unique, and we tailor our approach to meet individual needs.",
    },
    {
      id: "3",
      title: "Accessible and Responsive",
      content:
        "Communication is key. Our team is readily available to address your concerns and provide updates on your case.",
    },
  ];

  return (
    <section className="py-24 bg-gray-700 text-white">
      <div className="container lg:grid lg:grid-cols-2 lg:gap-x-16">
        <div className="mb-14 lg:mb-0">
          <h2 className="text-4xl font-medium mb-6 lg:text-5xl lg:leading-[57.6px]">Highest standards</h2>
          <p>
            Our team of seasoned attorneys is committed to delivering tailored solutions, ensuring you receive the
            attention and representation you deserve.
          </p>
        </div>
        <Accordion accordionData={accordionData} />
      </div>
    </section>
  );
}
