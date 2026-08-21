"use client";

import { useState } from "react";
import Link from "next/link";
import { products } from "../data/products";

const budgetRanges = [
  {
    label: "Under ₹500",
    min: 0,
    max: 500,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 4a5 5 0 0 1 5 5c0 3.5-2.2 6-5 9-2.8-3-5-5.5-5-9a5 5 0 0 1 5-5z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M12 18v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "₹500 – ₹1,000",
    min: 500,
    max: 1000,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="9" width="16" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 13h16" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 9v11" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M12 9c-2 0-3-1-3-2.2C9 5.6 9.8 5 10.6 5c1 0 1.4 1 1.4 2v2z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M12 9c2 0 3-1 3-2.2 0-1.2-.8-1.8-1.6-1.8-1 0-1.4 1-1.4 2v2z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "₹1,000 – ₹2,000",
    min: 1000,
    max: 2000,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 20s-7-4.35-9.5-8.5C.9 8.2 2.6 5 6 5c2 0 3.3 1 4 2 .7-1 2-2 4-2 3.4 0 5.1 3.2 3.5 6.5C19 15.65 12 20 12 20z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M9.5 10.5l1.7 1.7 3.3-3.3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "₹2,000+",
    min: 2000,
    max: Infinity,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3 8l4 3 5-6 5 6 4-3-1.5 10h-15L3 8z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function BudgetShop() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeRange = budgetRanges[activeIndex];
  const matches = products.filter(
    (product) =>
      product.price >= activeRange.min && product.price <= activeRange.max
  );

  return (
    <section className="bg-[#fdf3f4] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a66a77]">
            Shop By Budget
          </p>
          <h2 className="font-serif text-4xl leading-tight text-[#3f202b] sm:text-5xl">
            A Gift For Every Budget
          </h2>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {budgetRanges.map((range, index) => (
            <button
              key={range.label}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`flex items-center gap-1.5 rounded-full border px-5 py-3 text-xs font-semibold tracking-wide transition-all duration-300 [&>svg]:h-4 [&>svg]:w-4 ${
                index === activeIndex
                  ? "border-[#6b263b] bg-[#6b263b] text-white shadow-sm"
                  : "border-[#ead8dc] bg-white text-[#6b263b] hover:bg-[#fdf1f3]"
              }`}
            >
              {range.icon}
              {range.label}
            </button>
          ))}
        </div>

        <div className="mt-10">
          {matches.length > 0 ? (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {matches.map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.id}`}
                  className="group rounded-[20px] border border-[#ead8dc] bg-white p-3 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <img
                    src={product.images.lifestyleReveal}
                    alt={product.name}
                    className="mb-2.5 aspect-square w-full rounded-[14px] object-cover"
                  />
                  <p className="font-serif text-sm leading-tight text-[#3f202b]">
                    {product.name}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-[#5d2336]">
                    ₹{product.price.toLocaleString("en-IN")}
                  </p>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-center text-sm text-[#765c64]">
              No gifts in this range yet — check back soon.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
