import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "../context/CartContext";
import CartDrawer from "../components/CartDrawer";

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
        <CartProvider>
          {children}
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
