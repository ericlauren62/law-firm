"use client";

import { AccordionItem } from "@/types/AccordionItem";
import React, { useState } from "react";
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
        <div key={index} className="mb-8 border-b border-gray-500">
          <button onClick={() => toggleAccordion(index)} className="w-full text-left pb-2 focus:outline-none">
            <div className="flex justify-between items-center p-5 ">
              <span className="text-2xl lg:text-3xl leading-[36.4px] font-medium">{item.title}</span>
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
