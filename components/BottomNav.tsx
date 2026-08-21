"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

export default function BottomNav() {
  const pathname = usePathname();
  const { cartCount, openCart } = useCart();
  const { wishlistCount } = useWishlist();

  const isActive = (path: string) =>
    path === "/" ? pathname === "/" : pathname?.startsWith(path);

  const navItems = [
    { label: "Home", icon: "⌂", href: "/", type: "link" as const },
    { label: "Shop", icon: "🛍", href: "/#shop", type: "link" as const },
    {
      label: "Wishlist",
      icon: wishlistCount > 0 ? "♥" : "♡",
      href: "/wishlist",
      type: "link" as const,
      count: wishlistCount,
    },
    {
      label: "Cart",
      icon: "🛒",
      type: "cart" as const,
      count: cartCount,
    },
    { label: "Account", icon: "☺", href: "/", type: "link" as const },
  ];

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-[#ead8dc] bg-[#fffaf8]/95 backdrop-blur-sm md:hidden">
      <div
        className="grid grid-cols-5"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        {navItems.map((item) => {
          if (item.type === "cart") {
            return (
              <button
                key={item.label}
                type="button"
                onClick={openCart}
                className="flex flex-col items-center justify-center gap-1 py-2.5 text-[#6b263b]"
              >
                <span className="relative text-lg">
                  {item.icon}
                  {item.count > 0 && (
                    <span className="absolute -right-2 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#6b263b] text-[9px] font-semibold text-white">
                      {item.count}
                    </span>
                  )}
                </span>
                <span className="text-[10px] font-medium tracking-wide">
                  {item.label}
                </span>
              </button>
            );
          }

          const active = isActive(item.href);

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex flex-col items-center justify-center gap-1 py-2.5 transition-colors ${
                active ? "text-[#6b263b]" : "text-[#a66a77]"
              }`}
            >
              <span className="relative text-lg">
                {item.icon}
                {"count" in item && item.count! > 0 && (
                  <span className="absolute -right-2 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#6b263b] text-[9px] font-semibold text-white">
                    {item.count}
                  </span>
                )}
              </span>
              <span
                className={`text-[10px] tracking-wide ${
                  active ? "font-semibold" : "font-medium"
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
