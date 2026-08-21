"use client";

import { useState } from "react";
import Link from "next/link";
import { products } from "../data/products";

const budgetRanges = [
  { label: "Under ₹500", min: 0, max: 500, emoji: "🎈" },
  { label: "₹500 – ₹1,000", min: 500, max: 1000, emoji: "🎁" },
  { label: "₹1,000 – ₹2,000", min: 1000, max: 2000, emoji: "💝" },
  { label: "₹2,000+", min: 2000, max: Infinity, emoji: "👑" },
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
              className={`rounded-full border px-5 py-3 text-xs font-semibold tracking-wide transition-all duration-300 ${
                index === activeIndex
                  ? "border-[#6b263b] bg-[#6b263b] text-white shadow-sm"
                  : "border-[#ead8dc] bg-white text-[#6b263b] hover:bg-[#fdf1f3]"
              }`}
            >
              {range.emoji} {range.label}
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
