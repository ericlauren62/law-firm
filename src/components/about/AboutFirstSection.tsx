import Image from "next/image";
import aboutImg1 from "/public/images/aboutImg1.webp";
import Accordion from "@/utils/Accordion";
import { AccordionItem } from "@/types/AccordionItem";

export default function AboutFirstSection() {
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
  ];
  return (
    <section className="container py-20 grid items-center lg:grid-cols-2 lg:gap-x-16 lg:py-24">
      <div className="mb-8 lg:mb-0">
        <Image
          src={aboutImg1}
          alt="lawyer to a his client"
          className="h-auto lg:h-[500px] object-cover object-center"
        />
      </div>
      <div>
        <div className="mb-12">
          <h2 className="text-3xl lg:text-5xl font-medium mb-5">We uphold the highest standards of integrity</h2>
          <p>
            We prioritize our {"clients'"} needs, understanding that each case is unique. Our team of seasoned attorneys
            is committed to delivering tailored solutions, ensuring you receive the attention and representation you
            deserve. Our comprehensive expertise allows us to handle a wide range of legal matters effectively.
          </p>
        </div>
        <Accordion accordionData={accordionData} />
      </div>
    </section>
  );
}
