"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import { products } from "../data/products";

export default function ProductCollection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Birthday",
    "Couple",
    "Self-Care",
  ];

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter(
          (product) =>
            product.occasion === activeCategory ||
            product.category.includes(activeCategory)
        );

  const handleAddToCart = (product: (typeof products)[number]) => {
    console.log("Added to cart:", product.name);
  };

  const handleQuickView = (product: (typeof products)[number]) => {
    console.log("Quick view:", product.name);
  };

  return (
    <section
      id="shop"
      className="bg-[#fffaf8] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a66a77]">
            Curated With Love
          </p>

          <h2 className="font-serif text-4xl leading-tight text-[#3f202b] sm:text-5xl">
            Gifts They&apos;ll Remember
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#765c64] sm:text-base">
            Beautifully curated gift boxes made for birthdays, love,
            celebrations and all the little moments worth remembering.
          </p>
        </div>

        {/* Category filters */}
        <div className="mt-8 flex justify-center overflow-x-auto pb-2">
          <div className="flex min-w-max items-center gap-2 rounded-full border border-[#ead8dc] bg-[#fdf3f4] p-1.5">
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-5 py-2.5 text-xs font-semibold tracking-wide transition-all duration-300 ${
                    isActive
                      ? "bg-[#6b263b] text-white shadow-sm"
                      : "text-[#6b263b] hover:bg-white"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
              onQuickView={handleQuickView}
            />
          ))}
        </div>

        {/* Empty state */}
        {filteredProducts.length === 0 && (
          <div className="py-16 text-center">
            <p className="font-serif text-2xl text-[#3f202b]">
              More beautiful gifts are coming soon.
            </p>

            <p className="mt-2 text-sm text-[#765c64]">
              Try another collection.
            </p>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => setActiveCategory("All")}
            className="rounded-full border border-[#9d6472] px-7 py-3 text-xs font-semibold tracking-[0.14em] text-[#6b263b] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#6b263b] hover:text-white"
          >
            VIEW ALL GIFTS
          </button>
        </div>
      </div>
    </section>
  );
}
