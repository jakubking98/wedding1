"use client";
import React, { useState } from "react";
import LineInHeader from "./Header/LineInHeader";
import { faqs } from "./WebsiteContent";

interface Question {
  question: string;
  answer: string;
}

interface FaqCategory {
  category: string;
  questions: Question[];
}

interface FaqItemProps {
  question: string;
  answer: string;
}
export default function FAQ() {
  // Function to split the faqs into three columns
  const splitFaqsIntoColumns = (faqs: FaqCategory[]): FaqCategory[][] => {
    const columns: FaqCategory[][] = [[], [], []];
    let columnIndex = 0;
    faqs.forEach((faq) => {
      columns[columnIndex].push(faq);
      columnIndex = (columnIndex + 1) % 3;
    });
    return columns;
  };

  const faqColumns = splitFaqsIntoColumns(faqs);

  return (
    <section id="info" className="w-full relative py-10 bg-ColorWeb2">
      <div className="absolute -top-1 right-0 w-full rotate-180 text-ColorWeb2  md:text-ColorWeb1 transform scale-x-[-1] ">
        <LineInHeader />
      </div>
      <div className="absolute -bottom-1 right-0 w-full text-ColorWeb2 md:text-ColorWeb1 ">
        <LineInHeader />
      </div>
      <div className="relative max-w-[1600px] mx-auto bg-white p-8 border border-gray-200 md:rounded-2xl md:shadow-lg z-10">
        {/* Changed font here */}
        <h2 className="text-3xl md:text-5xl text-ColorWeb2 text-center mb-10 font-marcellus">
          Najczęściej Zadawane Pytania
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {faqColumns.map((column, columnIndex) => (
            <div key={columnIndex} className="space-y-10">
              {" "}
              {/* Added space-y-10 here */}
              {column.map((faq, index) => (
                <div key={index}>
                  {/* Changed font here */}
                  <h3 className="text-xl md:text-2xl font-semibold text-ColorWeb3 mb-4 font-baskervville">
                    {faq.category}
                  </h3>
                  <div className="space-y-4">
                    {faq.questions.map((q, i) => (
                      <FaqItem
                        key={i}
                        question={q.question}
                        answer={q.answer}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqItem({ question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between w-full text-left text-lg font-medium text-ColorWeb3 focus:outline-none font-marcellus" // Changed font here
      >
        {question}
        <span className="text-ColorWeb2 font-bold text-lg">
          {isOpen ? "-" : "+"}
        </span>
      </button>
      {isOpen && (
        <p className="mt-2 text-ColorWeb4 leading-relaxed text-base font-marcellus">
          {answer}
        </p> // Changed font here
      )}
    </div>
  );
}
