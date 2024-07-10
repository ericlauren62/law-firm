"use client";

import { AccordionItem } from "@/types/AccordionItem";
import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

interface AccordionDataProps {
  accordionData: AccordionItem[];
}

const Accordion = ({ accordionData }: AccordionDataProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null); // close the accordion if it's already open
    } else {
      setActiveIndex(index); // open the accordion
    }
  };

  return (
    <div className="mt-6">
      {accordionData.map((item: AccordionItem, index: number) => (
        <div key={index} className="mb-5 border-b">
          <button className="w-full mb-5" onClick={() => toggleAccordion(index)}>
            <div className="flex justify-between items-center py-5 w-full ">
              <div className="text-xl font-medium">{item.title}</div>
              <div className="text-2xl">{activeIndex !== null && activeIndex === index ? <FiMinus /> : <FiPlus />}</div>
            </div>
          </button>
          {activeIndex === index && (
            <div className="p-3">
              <p className="mb-4">{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
