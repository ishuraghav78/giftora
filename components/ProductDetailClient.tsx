"use client";

import { useState } from "react";
import type { Product } from "./ProductCard";
import { useCart } from "../context/CartContext";

type ProductDetailClientProps = {
  product: Product;
};

const galleryLabels = [
  "The Surprise",
  "Open the Box",
  "A Little Reveal",
  "What's Inside",
  "Every Little Detail",
  "Ready to Gift",
];

export default function ProductDetailClient({
  product,
}: ProductDetailClientProps) {
  const { addToCart, openCart } = useCart();

  const images = [
    product.images.closedBox,
    product.images.openingBox,
    product.images.firstReveal,
    product.images.fullyOpened,
    product.images.contentsCloseup,
    product.images.lifestyleReveal,
  ];

  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [recipientName, setRecipientName] = useState("");
  const [message, setMessage] = useState("");

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i += 1) {
      addToCart(product);
    }
  };

  const handleBuyNow = () => {
    handleAddToCart();
    openCart();
  };

  return (
    <main className="min-h-screen bg-[#fffaf8] px-4 py-10 text-[#3f202b] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <a
          href="/"
          className="mb-6 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#a66a77] hover:text-[#6b263b]"
        >
          ← Back to Shop
        </a>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Gallery */}
          <div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] border border-[#ead8dc] bg-[#f7e8eb]">
              <img
                src={images[activeImage]}
                alt={`${product.name} - ${galleryLabels[activeImage]}`}
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-4 right-4 rounded-full bg-[#fffaf8]/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#6b263b] shadow-sm backdrop-blur-sm">
                {galleryLabels[activeImage]}
              </div>
            </div>

            <div className="mt-4 grid grid-cols-6 gap-2.5">
              {images.map((image, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  className={`aspect-square overflow-hidden rounded-xl border-2 transition-all duration-300 ${
                    activeImage === index
                      ? "border-[#6b263b]"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <img
                    src={image}
                    alt={galleryLabels[index]}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#a66a77]">
              {product.category}
            </p>
            <h1 className="font-serif text-3xl leading-tight text-[#3f202b] sm:text-4xl">
              {product.name}
            </h1>

            <div className="mt-3 flex items-center gap-2">
              <div className="flex items-center gap-0.5 text-[#c59a55]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span key={index} className="text-sm">
                    ★
                  </span>
                ))}
              </div>
              <span className="text-xs font-medium text-[#765c64]">
                {product.rating.toFixed(1)}
              </span>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-2.5">
              <span className="text-2xl font-semibold text-[#5d2336]">
                ₹{product.price.toLocaleString("en-IN")}
              </span>
              <span className="text-sm text-[#9b858b] line-through">
                ₹{product.mrp.toLocaleString("en-IN")}
              </span>
              <span className="rounded-full bg-[#f5e1e5] px-2.5 py-1 text-[10px] font-bold tracking-wide text-[#8a3048]">
                {product.discount}% OFF
              </span>
            </div>

            <p className="mt-5 text-sm leading-6 text-[#765c64]">
              {product.description}
            </p>

            {product.tags.length > 0 && (
              <div className="mt-5">
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#a66a77]">
                  What&apos;s Inside?
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#ead8dc] bg-[#fdf3f4] px-3 py-1.5 text-xs capitalize text-[#6b263b]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {product.customizable && (
              <div className="mt-6 space-y-3 rounded-2xl border border-[#ead8dc] bg-white/70 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#a66a77]">
                  Personalize Your Gift
                </p>
                <input
                  type="text"
                  value={recipientName}
                  onChange={(event) => setRecipientName(event.target.value)}
                  placeholder="Recipient Name (Optional)"
                  className="w-full rounded-xl border border-[#ead8dc] bg-white px-3.5 py-2.5 text-sm text-[#3f202b] outline-none focus:border-[#9c566a]"
                />
                <textarea
                  value={message}
                  onChange={(event) =>
                    setMessage(event.target.value.slice(0, 150))
                  }
                  placeholder="Custom Message (Optional)"
                  rows={2}
                  className="w-full resize-none rounded-xl border border-[#ead8dc] bg-white px-3.5 py-2.5 text-sm text-[#3f202b] outline-none focus:border-[#9c566a]"
                />
              </div>
            )}

            <div className="mt-6 flex items-center gap-3">
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#a66a77]">
                Quantity
              </span>
              <div className="flex items-center gap-3 rounded-full border border-[#ead8dc] px-2 py-1.5">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="flex h-7 w-7 items-center justify-center rounded-full text-[#6b263b] hover:bg-[#f5e1e5]"
                >
                  −
                </button>
                <span className="w-5 text-center text-sm font-semibold">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="flex h-7 w-7 items-center justify-center rounded-full text-[#6b263b] hover:bg-[#f5e1e5]"
                >
                  +
                </button>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={handleAddToCart}
                className="flex-1 rounded-full bg-[#6b263b] px-6 py-3.5 text-xs font-semibold tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#572031] hover:shadow-lg"
              >
                ADD TO CART
              </button>
              <button
                type="button"
                onClick={handleBuyNow}
                className="flex-1 rounded-full border border-[#d9b8bf] bg-[#fffaf8] px-6 py-3.5 text-xs font-semibold tracking-[0.14em] text-[#6b263b] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#9c566a] hover:bg-[#fdf1f3]"
              >
                BUY NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
