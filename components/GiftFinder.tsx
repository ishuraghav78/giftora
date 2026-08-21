"use client";

import { useState } from "react";
import { products } from "../data/products";
import type { Product } from "../components/ProductCard";

const whoOptions = ["Her", "Him", "Partner", "Friend", "Parents", "Family"];
const occasionOptions = [
  "Birthday",
  "Anniversary",
  "Just Because",
  "Wedding",
  "Celebration",
];
const budgetOptions = [
  { label: "Under ₹500", min: 0, max: 500 },
  { label: "₹500–₹1,000", min: 500, max: 1000 },
  { label: "₹1,000–₹2,000", min: 1000, max: 2000 },
  { label: "₹2,000+", min: 2000, max: Infinity },
];

function PillGroup({
  title,
  options,
  selected,
  onSelect,
}: {
  title: string;
  options: string[];
  selected: string | null;
  onSelect: (value: string) => void;
}) {
  return (
    <div>
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#a66a77]">
        {title}
      </p>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const isActive = selected === option;
          return (
            <button
              key={option}
              type="button"
              onClick={() => onSelect(option)}
              className={`rounded-full border px-4 py-2.5 text-xs font-semibold tracking-wide transition-all duration-300 ${
                isActive
                  ? "border-[#6b263b] bg-[#6b263b] text-white shadow-sm"
                  : "border-[#ead8dc] bg-[#fffaf8] text-[#6b263b] hover:bg-[#fdf1f3]"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function GiftFinder() {
  const [who, setWho] = useState<string | null>(null);
  const [occasion, setOccasion] = useState<string | null>(null);
  const [budgetLabel, setBudgetLabel] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [results, setResults] = useState<Product[]>([]);

  const handleFindGift = () => {
    const budget = budgetOptions.find((b) => b.label === budgetLabel);

    const inBudget = (product: Product) =>
      budget ? product.price >= budget.min && product.price <= budget.max : true;

    let matches = products.filter(
      (product) =>
        (!who || product.recipient === who) &&
        (!occasion || product.occasion === occasion) &&
        inBudget(product)
    );

    if (matches.length === 0) {
      matches = products.filter(
        (product) =>
          ((who && product.recipient === who) ||
            (occasion && product.occasion === occasion)) &&
          inBudget(product)
      );
    }

    if (matches.length === 0) {
      matches = products.filter((product) => inBudget(product));
    }

    if (matches.length === 0) {
      matches = products;
    }

    setResults(matches.slice(0, 3));
    setHasSearched(true);
  };

  return (
    <section className="bg-[#fdf3f4] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a66a77]">
            Gift Finder
          </p>
          <h2 className="font-serif text-4xl leading-tight text-[#3f202b] sm:text-5xl">
            Not Sure What To Gift?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#765c64] sm:text-base">
            Tell us a little about them. We&apos;ll help you find the right
            gift.
          </p>
        </div>

        <div className="mt-10 space-y-8 rounded-[28px] border border-[#ead8dc] bg-white/70 p-6 shadow-[0_12px_40px_rgba(92,39,54,0.06)] sm:p-9">
          <PillGroup
            title="Who"
            options={whoOptions}
            selected={who}
            onSelect={setWho}
          />
          <PillGroup
            title="Occasion"
            options={occasionOptions}
            selected={occasion}
            onSelect={setOccasion}
          />
          <PillGroup
            title="Budget"
            options={budgetOptions.map((b) => b.label)}
            selected={budgetLabel}
            onSelect={setBudgetLabel}
          />

          <div className="pt-2 text-center">
            <button
              type="button"
              onClick={handleFindGift}
              className="rounded-full bg-[#6b263b] px-8 py-3.5 text-xs font-semibold tracking-[0.14em] text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#572031] hover:shadow-lg"
            >
              FIND MY PERFECT GIFT ✨
            </button>
          </div>
        </div>

        {hasSearched && (
          <div className="mt-12">
            <h3 className="mb-6 text-center font-serif text-2xl text-[#3f202b]">
              Gifts We Think They&apos;ll Love
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {results.map((product) => (
                <div
                  key={product.id}
                  className="rounded-[20px] border border-[#ead8dc] bg-white p-4 text-center shadow-sm"
                >
                  <img
                    src={product.images.lifestyleReveal}
                    alt={product.name}
                    className="mb-3 aspect-square w-full rounded-[14px] object-cover"
                  />
                  <p className="font-serif text-lg text-[#3f202b]">
                    {product.name}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[#5d2336]">
                    ₹{product.price.toLocaleString("en-IN")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
