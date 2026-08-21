import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "../context/CartContext";
import { WishlistProvider } from "../context/WishlistContext";
import CartDrawer from "../components/CartDrawer";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "GIFTORA — Make Every Moment Gift-Worthy.",
  description:
    "Beautifully curated gift boxes for birthdays, anniversaries, couples and every little reason to celebrate.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <WishlistProvider>
          <CartProvider>
            {children}
            <Footer />
            <CartDrawer />
          </CartProvider>
        </WishlistProvider>
      </body>
    </html>
  );
}
