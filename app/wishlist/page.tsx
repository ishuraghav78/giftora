"use client";

import Link from "next/link";
import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";
import ProductCard from "../../components/ProductCard";

export default function WishlistPage() {
  const { items } = useWishlist();
  const { addToCart } = useCart();

  return (
    <main className="min-h-screen bg-[#fffaf8] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a66a77]">
            Saved For Later
          </p>
          <h1 className="font-serif text-4xl leading-tight text-[#3f202b] sm:text-5xl">
            Your Wishlist
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#765c64] sm:text-base">
            {items.length > 0
              ? "The little things you've fallen in love with, all in one place."
              : "Nothing here yet — tap the heart on any gift to save it."}
          </p>
        </div>

        {items.length > 0 ? (
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        ) : (
          <div className="mt-12 flex justify-center">
            <Link
              href="/"
              className="rounded-full bg-[#6b263b] px-8 py-3.5 text-xs font-semibold tracking-[0.14em] text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#572031] hover:shadow-lg"
            >
              CONTINUE SHOPPING
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
