"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export type ProductImageSet = {
  closedBox: string;
  openingBox: string;
  firstReveal: string;
  fullyOpened: string;
  contentsCloseup: string;
  lifestyleReveal: string;
};

export type Product = {
  id: string;
  name: string;
  price: number;
  mrp: number;
  discount: number;
  category: string;
  occasion: string;
  recipient: string;
  description: string;
  images: ProductImageSet;
  customizable: boolean;
  stockStatus: string;
  featured: boolean;
  bestseller: boolean;
  newArrival: boolean;
  tags: string[];
  rating: number;
};

type ProductCardProps = {
  product: Product;
  onAddToCart?: (product: Product) => void;
  onQuickView?: (product: Product) => void;
};

const SLIDE_DURATION = 3500;

export default function ProductCard({
  product,
  onAddToCart,
  onQuickView,
}: ProductCardProps) {
  const images = [
    product.images.closedBox,
    product.images.openingBox,
    product.images.firstReveal,
    product.images.fullyOpened,
    product.images.contentsCloseup,
    product.images.lifestyleReveal,
  ];

  const imageLabels = [
    "The Surprise",
    "Open the Box",
    "A Little Reveal",
    "What's Inside",
    "Every Little Detail",
    "Ready to Gift",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const goToNextImage = () => {
    setCurrentImageIndex((previous) => (previous + 1) % images.length);
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex(
      (previous) => (previous - 1 + images.length) % images.length
    );
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
    temporarilyPauseCarousel();
  };

  const temporarilyPauseCarousel = () => {
    setIsPaused(true);

    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
    }

    resumeTimerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 5000);
  };

  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) {
        clearTimeout(resumeTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isPaused || isHovered || images.length <= 1) {
      return;
    }

    const timer = setInterval(() => {
      goToNextImage();
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, [isPaused, isHovered, images.length]);

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0].clientX;
    touchStartY.current = event.touches[0].clientY;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null || touchStartY.current === null) {
      return;
    }

    const touchEndX = event.changedTouches[0].clientX;
    const touchEndY = event.changedTouches[0].clientY;

    const differenceX = touchStartX.current - touchEndX;
    const differenceY = touchStartY.current - touchEndY;

    touchStartX.current = null;
    touchStartY.current = null;

    if (Math.abs(differenceX) < 40) {
      return;
    }

    if (Math.abs(differenceX) < Math.abs(differenceY)) {
      return;
    }

    temporarilyPauseCarousel();

    if (differenceX > 0) {
      goToNextImage();
    } else {
      goToPreviousImage();
    }
  };

  const handleAddToCart = (event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
    if (onAddToCart) {
      onAddToCart(product);
    }
  };

  const handleQuickView = (event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
    if (onQuickView) {
      onQuickView(product);
    }
  };

  const badge = product.bestseller
    ? "BESTSELLER"
    : product.newArrival
      ? "NEW"
      : product.customizable
        ? "PERSONALIZED"
        : null;

  return (
    <Link
      href={`/product/${product.id}`}
      className="group relative block w-full overflow-hidden rounded-[24px] border border-[#ead8dc] bg-[#fffaf8] shadow-[0_12px_40px_rgba(92,39,54,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(92,39,54,0.14)]"
    >
      <article>
      {/* PRODUCT IMAGE AREA */}
      <div
        className="relative aspect-[4/5] overflow-hidden bg-[#f7e8eb]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Images */}
        {images.map((image, index) => (
          <img
            key={`${product.id}-${index}`}
            src={image}
            alt={`${product.name} - ${imageLabels[index]}`}
            loading={index === 0 ? "eager" : "lazy"}
            draggable={false}
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out ${
              index === currentImageIndex
                ? "scale-100 opacity-100"
                : "scale-[1.03] opacity-0"
            }`}
          />
        ))}

        {/* Soft image overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#3f1d29]/20 via-transparent to-transparent" />

        {/* Badge */}
        {badge && (
          <div className="absolute left-4 top-4 z-10 rounded-full bg-[#6b263b] px-3 py-1.5 text-[10px] font-semibold tracking-[0.16em] text-white shadow-md">
            {badge}
          </div>
        )}

        {/* Wishlist */}
        <button
          type="button"
          aria-label={
            isWishlisted ? "Remove from wishlist" : "Add to wishlist"
          }
          aria-pressed={isWishlisted}
          onClick={(event) => {
            event.stopPropagation();
            event.preventDefault();
            setIsWishlisted((previous) => !previous);
          }}
          className={`absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border bg-white/90 text-xl shadow-md backdrop-blur-sm transition-all duration-300 hover:scale-110 ${
            isWishlisted
              ? "border-[#d9a1ad] text-[#9a3652]"
              : "border-white/70 text-[#6b263b]"
          }`}
        >
          {isWishlisted ? "♥" : "♡"}
        </button>

        {/* Image number */}
        <div className="absolute bottom-4 left-4 z-10 rounded-full bg-white/85 px-3 py-1.5 text-[10px] font-medium tracking-[0.12em] text-[#5b2637] shadow-sm backdrop-blur-sm">
          {currentImageIndex + 1} / {images.length}
        </div>

        {/* Image story label */}
        <div className="absolute bottom-4 right-4 z-10 max-w-[55%] rounded-full bg-[#fffaf8]/90 px-3 py-1.5 text-right text-[9px] font-semibold uppercase tracking-[0.12em] text-[#6b263b] shadow-sm backdrop-blur-sm">
          {imageLabels[currentImageIndex]}
        </div>

        {/* Desktop quick navigation */}
        <div className="pointer-events-none absolute inset-x-0 top-1/2 z-10 flex -translate-y-1/2 justify-between px-3 opacity-0 transition-opacity duration-300 group-hover:pointer-events-auto group-hover:opacity-100">
          <button
            type="button"
            aria-label="Previous product image"
            onClick={(event) => {
              event.stopPropagation();
              event.preventDefault();
              temporarilyPauseCarousel();
              goToPreviousImage();
            }}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-lg text-[#6b263b] shadow-md backdrop-blur-sm transition-transform hover:scale-105"
          >
            ‹
          </button>

          <button
            type="button"
            aria-label="Next product image"
            onClick={(event) => {
              event.stopPropagation();
              event.preventDefault();
              temporarilyPauseCarousel();
              goToNextImage();
            }}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-lg text-[#6b263b] shadow-md backdrop-blur-sm transition-transform hover:scale-105"
          >
            ›
          </button>
        </div>

        {/* Six image indicators */}
        <div className="absolute bottom-14 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-white/75 px-2.5 py-1.5 backdrop-blur-sm">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Show image ${index + 1}`}
              aria-current={index === currentImageIndex}
              onClick={(event) => {
                event.stopPropagation();
                event.preventDefault();
                goToImage(index);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? "w-5 bg-[#6b263b]"
                  : "w-1.5 bg-[#b98691]"
              }`}
            />
          ))}
        </div>
      </div>

      {/* PRODUCT INFORMATION */}
      <div className="p-5 sm:p-6">
        {/* Category */}
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#a66a77]">
          {product.category}
        </p>

        {/* Product name */}
        <h3 className="font-serif text-[22px] leading-tight text-[#3f202b] sm:text-[24px]">
          {product.name}
        </h3>

        {/* Description */}
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#765c64]">
          {product.description}
        </p>

        {/* Rating */}
        <div className="mt-4 flex items-center gap-2">
          <div
            className="flex items-center gap-0.5 text-[#c59a55]"
            aria-label={`${product.rating} out of 5 stars`}
          >
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

        {/* Price */}
        <div className="mt-4 flex flex-wrap items-center gap-2.5">
          <span className="text-xl font-semibold text-[#5d2336]">
            ₹{product.price.toLocaleString("en-IN")}
          </span>

          <span className="text-sm text-[#9b858b] line-through">
            ₹{product.mrp.toLocaleString("en-IN")}
          </span>

          <span className="rounded-full bg-[#f5e1e5] px-2.5 py-1 text-[10px] font-bold tracking-wide text-[#8a3048]">
            {product.discount}% OFF
          </span>
        </div>

        {/* Actions */}
        <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
          <button
            type="button"
            onClick={handleAddToCart}
            className="flex-1 rounded-full bg-[#6b263b] px-5 py-3.5 text-xs font-semibold tracking-[0.12em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#572031] hover:shadow-lg active:translate-y-0"
          >
            ADD TO CART
          </button>

          <button
            type="button"
            onClick={handleQuickView}
            className="rounded-full border border-[#d9b8bf] bg-[#fffaf8] px-5 py-3.5 text-xs font-semibold tracking-[0.12em] text-[#6b263b] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#9c566a] hover:bg-[#fdf1f3]"
          >
            QUICK VIEW
          </button>
        </div>
      </div>
      </article>
    </Link>
  );
}

/*
  SAMPLE PRODUCT

  Ye temporary development product hai.

  Iske 6 images intentionally SAME conceptual
  "Birthday Pink Surprise Box" ko represent karte hain.

  Baad mein in placeholder URLs ko real Giftora
  product photography se replace karenge.
*/

export const sampleProduct: Product = {
  id: "birthday-pink-surprise-box",

  name: "Birthday Pink Surprise Box",

  price: 899,

  mrp: 1299,

  discount: 31,

  category: "Birthday Gifts",

  occasion: "Birthday",

  recipient: "Her",

  description:
    "A beautifully packed birthday surprise filled with sweet little moments, thoughtful keepsakes and celebration-ready details.",

  images: {
    closedBox:
      "https://placehold.co/900x1125/F4DDE2/5D2336?text=Birthday+Pink+Surprise+Box%0A%0A01+Closed+Box",

    openingBox:
      "https://placehold.co/900x1125/F1D8DE/5D2336?text=Birthday+Pink+Surprise+Box%0A%0A02+Opening+Box",

    firstReveal:
      "https://placehold.co/900x1125/F6E4E7/5D2336?text=Birthday+Pink+Surprise+Box%0A%0A03+First+Reveal",

    fullyOpened:
      "https://placehold.co/900x1125/F2D5DC/5D2336?text=Birthday+Pink+Surprise+Box%0A%0A04+Fully+Opened",

    contentsCloseup:
      "https://placehold.co/900x1125/F7E8EA/5D2336?text=Birthday+Pink+Surprise+Box%0A%0A05+Contents+Closeup",

    lifestyleReveal:
      "https://placehold.co/900x1125/F0D3DA/5D2336?text=Birthday+Pink+Surprise+Box%0A%0A06+Lifestyle+Reveal",
  },

  customizable: true,

  stockStatus: "In Stock",

  featured: true,

  bestseller: true,

  newArrival: false,

  tags: ["birthday", "pink", "personalized", "surprise"],

  rating: 4.8,
};
