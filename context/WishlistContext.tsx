"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";
import type { Product } from "../components/ProductCard";

type WishlistContextValue = {
  items: Product[];
  toggleWishlist: (product: Product) => void;
  isWishlisted: (productId: string) => boolean;
  removeFromWishlist: (productId: string) => void;
  wishlistCount: number;
};

const WishlistContext = createContext<WishlistContextValue | undefined>(
  undefined
);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Product[]>([]);

  const isWishlisted = (productId: string) => {
    return items.some((item) => item.id === productId);
  };

  const toggleWishlist = (product: Product) => {
    setItems((previous) => {
      const exists = previous.some((item) => item.id === product.id);

      if (exists) {
        return previous.filter((item) => item.id !== product.id);
      }

      return [...previous, product];
    });
  };

  const removeFromWishlist = (productId: string) => {
    setItems((previous) => previous.filter((item) => item.id !== productId));
  };

  const wishlistCount = items.length;

  return (
    <WishlistContext.Provider
      value={{
        items,
        toggleWishlist,
        isWishlisted,
        removeFromWishlist,
        wishlistCount,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
}
