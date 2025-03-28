"use client";
import React, { useState } from "react";
import { faqs } from "./WebsiteContnet2";

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
    <section id="info" className="w-full relative py-20 bg-LitePink">
      <div className="max-w-[1600px] mx-auto bg-white p-8 border border-gray-200 rounded-2xl shadow-lg">
        <h2 className="text-4xl font-bold text-OrcheidDark text-center mb-10 font-comfortaa">
          Najczęściej Zadawane Pytania
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {faqColumns.map((column, columnIndex) => (
            <div key={columnIndex} className="space-y-10">
              {" "}
              {/* Added space-y-10 here */}
              {column.map((faq, index) => (
                <div key={index}>
                  <h3 className="text-2xl font-semibold text-OrcheidDark mb-4 font-comfortaa">
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
        className="flex justify-between w-full text-left text-lg font-medium text-ColorWeb3 focus:outline-none"
      >
        {question}
        <span className="text-OrcheidDark font-bold">{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && (
        <p className="mt-2 text-ColorWeb4 leading-relaxed">{answer}</p>
      )}
    </div>
  );
}
