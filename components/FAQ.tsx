"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How long does delivery take?",
    answer:
      "Most orders are delivered within 3–5 business days across India. Metro cities usually receive orders faster, within 2–3 days. You'll get tracking details on WhatsApp once your order ships.",
  },
  {
    question: "Can I return or exchange my gift?",
    answer:
      "Yes, we accept returns within 7 days of delivery for unopened, unused products. Personalized items cannot be returned unless damaged or defective. Contact us on WhatsApp to start a return.",
  },
  {
    question: "Do you offer personalization on all products?",
    answer:
      "Personalization is available on select products, marked clearly on the product page. You can add names, messages, or custom text before adding the item to your cart.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We currently accept Cash on Delivery (COD) and UPI payments. Once you place your order, our team confirms payment details with you directly over WhatsApp.",
  },
  {
    question: "Is Cash on Delivery available everywhere?",
    answer:
      "COD is available across most pin codes in India. In rare remote locations, we may request advance UPI payment — we'll let you know at checkout if this applies to you.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 bg-[#fdf3f4]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm tracking-[0.2em] uppercase text-[#a66a77] mb-2">
            Got Questions?
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#3f202b]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-[#ead8dc] rounded-xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between text-left px-5 py-4 focus:outline-none"
                >
                  <span className="font-serif text-base md:text-lg text-[#3f202b] pr-4">
                    {faq.question}
                  </span>
                  <span
                    className={`flex-shrink-0 text-[#6b263b] text-xl transition-transform duration-300 motion-reduce:transition-none ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 motion-reduce:transition-none ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-4 text-[#765c64] text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
