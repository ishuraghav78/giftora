import Link from "next/link";
import { WHATSAPP_NUMBER } from "../lib/config";

export default function Footer() {
  return (
    <footer className="bg-[#3f202b] text-[#f5e6e9] pt-14 pb-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl text-white mb-3">Giftora</h3>
            <p className="text-sm text-[#d8b8bf] leading-relaxed">
              Make Every Moment Gift-Worthy. Thoughtfully curated gifts for
              every occasion, every emotion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm tracking-[0.15em] uppercase text-[#c59a55] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#shop"
                  className="hover:text-white transition-colors"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="/wishlist"
                  className="hover:text-white transition-colors"
                >
                  Wishlist
                </Link>
              </li>
              <li>
                <Link
                  href="/checkout"
                  className="hover:text-white transition-colors"
                >
                  Checkout
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-sm tracking-[0.15em] uppercase text-[#c59a55] mb-4">
              About
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Return Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm tracking-[0.15em] uppercase text-[#c59a55] mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <span>WhatsApp Us</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/giftora"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@giftora.in"
                  className="hover:text-white transition-colors"
                >
                  hello@giftora.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#5a3542] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#c9a3ab]">
            © {new Date().getFullYear()} Giftora. All rights reserved.
          </p>
          <p className="text-xs text-[#c9a3ab]">
            Made with ♥ for every gifting moment.
          </p>
        </div>
      </div>
    </footer>
  );
}
