"use client";
import React, { useState } from "react";

type Props = {
  title: string;
  content: string;
};

const Accordion: React.FC<Props> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b">
      <div
        className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100"
        onClick={toggleAccordion}
      >
        <h3 className="text-[20px] md:text-[24px] leading-[24.38px] md:leading-[29.05px] font-semibold">
          {title}
        </h3>
        <span className="border border-black h-[28px] w-[28px] rounded-[14px] text-[16px] text-center flex items-center justify-center">
          {isOpen ? "-" : "+"}
        </span>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4 text-[16px] md:text-[20px] leading-[19.5px] md:leading-[24.38px]">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
