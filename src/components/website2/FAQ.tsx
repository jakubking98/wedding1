"use client";
import React, { useState } from "react";

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
  const faqs = [
    {
      category: "Logistyka i organizacja",
      questions: [
        {
          question:
            "Gdzie odbędzie się ślub i wesele? (adres, dojazd, parking)",
          answer:
            "Ceremonia ślubna odbędzie się w Kościele pw. Św. Anny przy ul. deotmy 15, 00-000 Warszawa. Przyjęcie weselne odbędzie się w Restauracji Wesele przy ul. Kasztanowa 98, 05-530 Obręb. Dojazd jest możliwy samochodem, a na miejscu dostępny jest przestronny parking.",
        },
        {
          question: "O której godzinie zaczyna się ceremonia/wesele?",
          answer:
            "Ceremonia ślubna rozpocznie się o godzinie 15:00, a przyjęcie weselne o godzinie 17:00.",
        },
        {
          question:
            "Czy jest możliwość noclegu? (jeśli tak, to gdzie i jak zarezerwować?)",
          answer:
            "Tak, dla gości weselnych przygotowaliśmy specjalną ofertę noclegową w pobliskim hotelu. Szczegóły dotyczące rezerwacji przekażemy wkrótce.",
        },
        {
          question:
            "Czy będzie transport dla gości? (np. autobus z kościoła na salę)",
          answer:
            "Tak, zapewniamy transport dla gości z kościoła na salę weselną. Szczegóły dotyczące odjazdu zostaną podane po ceremonii.",
        },
      ],
    },
    {
      category: "Strój i dress code",
      questions: [
        {
          question:
            "Czy obowiązuje określony dress code? (np. elegancki, styl boho, kolor przewodni)",
          answer:
            "Zachęcamy do eleganckiego, ale wygodnego ubioru. Chcemy, abyście czuli się swobodnie i komfortowo.",
        },
        {
          question: "Czy mogę ubrać się na biało? (dla kobiet – zazwyczaj nie)",
          answer:
            "Uprzejmie prosimy, aby kobiety unikały ubioru w kolorze białym, który jest zarezerwowany dla Panny Młodej.",
        },
        {
          question: "Czy panowie muszą mieć garnitur/krawat?",
          answer:
            "Zachęcamy panów do założenia garnituru, ale nie jest to obowiązkowe. Ważne, aby strój był elegancki.",
        },
      ],
    },
    {
      category: "Prezenty i koperty",
      questions: [
        {
          question:
            "Co najlepiej dać w prezencie? (czy para ma listę prezentów, czy preferuje gotówkę?)",
          answer:
            "Najbardziej ucieszymy się z koperty, która pomoże nam w realizacji naszych wspólnych marzeń.",
        },
        {
          question: "Czy jest specjalna skrzynka na koperty?",
          answer:
            "Tak, przy wejściu na salę weselną będzie przygotowana specjalna skrzynka na koperty.",
        },
      ],
    },
    {
      category: "Menu i alkohol",
      questions: [
        {
          question: "Czy będzie opcja dla wegetarian / wegan?",
          answer:
            "Oczywiście! Zadbamy o to, aby nasi goście wegetarianie i weganie również mieli szeroki wybór dań.",
        },
        {
          question: "Czy na weselu będą napoje alkoholowe? (i jakie)",
          answer:
            "Tak, na weselu będzie dostępny szeroki wybór napojów alkoholowych, w tym wino, piwo i wódka.",
        },
        {
          question:
            "Czy mogę przynieść własny alkohol? (czasem pytają o własny alkohol np. whisky)",
          answer:
            "W restauracji dostępny będzie szeroki wybór alkoholi. Prosimy o nieprzynoszenie własnego alkoholu.",
        },
      ],
    },
    {
      category: "Dzieci na weselu",
      questions: [
        {
          question: "Czy mogę przyjść z dziećmi?",
          answer:
            "Tak, dzieci są mile widziane. Będziemy starali się zapewnić im również atrakcje.",
        },
        {
          question: "Czy będzie kącik dla dzieci/animator?",
          answer:
            "Tak, planujemy zorganizować kącik dla dzieci z animatorem, aby najmłodsi goście również dobrze się bawili.",
        },
      ],
    },
    {
      category: "Zabawa i atrakcje",
      questions: [
        {
          question:
            "Czy będzie oczepinowa zabawa? (nie każdy lubi tradycyjne zabawy weselne)",
          answer:
            "Tak, planujemy tradycyjną zabawę oczepinową, ale postaramy się, aby była ona przyjemna dla wszystkich gości.",
        },
        {
          question: "Czy są przewidziane jakieś niespodzianki?",
          answer:
            "Tak, przygotowaliśmy kilka niespodzianek, ale nie możemy zdradzić wszystkich szczegółów!",
        },
        {
          question:
            "Czy mogę zamówić konkretną piosenkę u DJ-a/zespół gra na żywo?",
          answer:
            "Tak, będzie możliwość zamówienia piosenek u DJ-a. Chętnie uwzględnimy Wasze muzyczne preferencje.",
        },
      ],
    },
  ];

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
        className="flex justify-between w-full text-left text-lg font-medium text-gray-700 focus:outline-none"
      >
        {question}
        <span className="text-OrcheidDark font-bold">{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && <p className="mt-2 text-gray-600 leading-relaxed">{answer}</p>}
    </div>
  );
}
