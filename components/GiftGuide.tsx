"use client";

import Link from "next/link";
import { products } from "../data/products";

const guides = [
  {
    title: "For Her",
    subtitle: "Thoughtful picks she'll love",
    emoji: "🌸",
    filter: (p: (typeof products)[number]) => p.recipient === "Her",
  },
  {
    title: "For Him",
    subtitle: "Gifts with real character",
    emoji: "🎩",
    filter: (p: (typeof products)[number]) => p.recipient === "Him",
  },
  {
    title: "For Couples",
    subtitle: "Celebrate togetherness",
    emoji: "💞",
    filter: (p: (typeof products)[number]) => p.recipient === "Partner",
  },
  {
    title: "Anniversary Picks",
    subtitle: "Mark the milestone right",
    emoji: "🥂",
    filter: (p: (typeof products)[number]) => p.occasion === "Anniversary",
  },
];

export default function GiftGuide() {
  return (
    <section className="bg-[#fffaf8] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a66a77]">
            Gift Guide
          </p>
          <h2 className="font-serif text-4xl leading-tight text-[#3f202b] sm:text-5xl">
            Curated For Every Someone
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {guides.map((guide) => {
            const match = products.find(guide.filter);

            return (
              <Link
                key={guide.title}
                href={match ? `/product/${match.id}` : "#"}
                className="group relative overflow-hidden rounded-[24px] border border-[#ead8dc] bg-[#fdf3f4] p-7 text-center shadow-[0_12px_40px_rgba(92,39,54,0.06)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_55px_rgba(92,39,54,0.12)]"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-3xl shadow-sm transition-transform duration-500 group-hover:scale-110">
                  {guide.emoji}
                </div>
                <h3 className="mt-5 font-serif text-lg text-[#3f202b]">
                  {guide.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#765c64]">
                  {guide.subtitle}
                </p>
                <span className="mt-4 inline-block text-xs font-semibold tracking-[0.1em] text-[#9c566a] underline-offset-4 group-hover:underline">
                  Explore →
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
