"use client";
import Image from "next/image";
import { useRef, useState } from "react";

type FaqDataProps = {
  question: string;
  answer: string;
};

type FaqProps = {
  faq: FaqDataProps;
  isOpen: boolean;
  toggleFAQ: () => void;
};

const faqData = [
  {
    question: "Viverra diam quisque amet ornare turpis",
    answer:
      "Integer viverra sit massa eu turpis tortor. Elementum varius euismod dolor risus in a nunc quis. Posuere libero vitae cursus",
  },
  {
    question: "Viverra diam quisque amet ornare turpis",
    answer:
      "Integer viverra sit massa eu turpis tortor. Elementum varius euismod dolor risus in a nunc quis. Posuere libero vitae cursus",
  },
  {
    question: "Viverra diam quisque amet ornare turpis",
    answer:
      "Integer viverra sit massa eu turpis tortor. Elementum varius euismod dolor risus in a nunc quis. Posuere libero vitae cursus",
  },
  {
    question: "Viverra diam quisque amet ornare turpis",
    answer:
      "Integer viverra sit massa eu turpis tortor. Elementum varius euismod dolor risus in a nunc quis. Posuere libero vitae cursus",
  },
  {
    question: "Viverra diam quisque amet ornare turpis",
    answer:
      "Integer viverra sit massa eu turpis tortor. Elementum varius euismod dolor risus in a nunc quis. Posuere libero vitae cursus",
  },
  {
    question: "Viverra diam quisque amet ornare turpis",
    answer:
      "Integer viverra sit massa eu turpis tortor. Elementum varius euismod dolor risus in a nunc quis. Posuere libero vitae cursus",
  },
  {
    question: "Viverra diam quisque amet ornare turpis",
    answer:
      "Integer viverra sit massa eu turpis tortor. Elementum varius euismod dolor risus in a nunc quis. Posuere libero vitae cursus",
  },
  {
    question: "Viverra diam quisque amet ornare turpis",
    answer:
      "Integer viverra sit massa eu turpis tortor. Elementum varius euismod dolor risus in a nunc quis. Posuere libero vitae cursus",
  },
  {
    question: "Viverra diam quisque amet ornare turpis",
    answer:
      "Integer viverra sit massa eu turpis tortor. Elementum varius euismod dolor risus in a nunc quis. Posuere libero vitae cursus",
  },
  {
    question: "Viverra diam quisque amet ornare turpis",
    answer:
      "Integer viverra sit massa eu turpis tortor. Elementum varius euismod dolor risus in a nunc quis. Posuere libero vitae cursus",
  },
];

const FAQItem = ({ faq, isOpen, toggleFAQ }: FaqProps) => {
  const contentRef = useRef<HTMLParagraphElement>(null);

  return (
    <div className="w-full border rounded-3xl p-4 bg-lighter-gray">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleFAQ}
      >
        <span className="text-black">{faq.question}</span>
        <span>
          {isOpen ? (
            <Image
              src={"/images/arrow-up.svg"}
              alt="arrow down"
              width={15}
              height={15}
            />
          ) : (
            <Image
              src={"/images/arrow-down.svg"}
              alt="arrow down"
              width={15}
              height={15}
            />
          )}
        </span>
      </div>

      {/* Toggle Answer with Smooth Transition */}
      <div
        className="overflow-hidden transition-max-height duration-300 ease-in-out"
        style={{
          maxHeight:
            isOpen && contentRef.current
              ? `${contentRef.current.scrollHeight + 20}px`
              : "0px",
        }}
      >
        <p ref={contentRef} className="mt-2 text-gray-600">
          {faq.answer}
        </p>
      </div>
    </div>
  );
};

export const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // Toggle FAQ visibility
  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full items-start">
      {faqData.map((faq, index) => (
        <FAQItem
          key={index}
          faq={faq}
          isOpen={openFAQ === index}
          toggleFAQ={() => toggleFAQ(index)}
        />
      ))}
    </div>
  );
};
