"use client";

import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount, openCart } = useCart();

  return (
    <>
      <nav className="navbar">
        <div className="nav-inner">

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
          >
            <span />
            <span />
            <span />
          </button>

          {/* Brand */}
          <a href="/" className="brand">
            GIFTORA
          </a>

          {/* Desktop Navigation */}
          <div className="desktop-nav">
            <a href="#home">Home</a>
            <a href="#shop">Shop</a>
            <a href="#birthday">Birthday</a>
            <a href="#anniversary">Anniversary</a>
            <a href="#couple">Couple Gifts</a>
            <a href="#personalized">Personalized</a>
            <a href="#hampers">Gift Hampers</a>
          </div>

          {/* Actions */}
          <div className="nav-actions">
            <button aria-label="Search" className="nav-icon">
              ⌕
            </button>

            <button aria-label="Wishlist" className="nav-icon">
              ♡
            </button>

            <button
              aria-label="Cart"
              className="nav-cart"
              onClick={openCart}
              type="button"
            >
              🛒 <span>{cartCount}</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${menuOpen ? "open" : ""}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>

          <a href="#shop" onClick={() => setMenuOpen(false)}>
            Shop
          </a>

          <a href="#birthday" onClick={() => setMenuOpen(false)}>
            Birthday
          </a>

          <a href="#anniversary" onClick={() => setMenuOpen(false)}>
            Anniversary
          </a>

          <a href="#couple" onClick={() => setMenuOpen(false)}>
            Couple Gifts
          </a>

          <a href="#personalized" onClick={() => setMenuOpen(false)}>
            Personalized
          </a>

          <a href="#hampers" onClick={() => setMenuOpen(false)}>
            Gift Hampers
          </a>
        </div>
      </nav>

      <style jsx>{`
        .navbar {
          position: sticky;
          top: 0;
          z-index: 50;
          width: 100%;
          background: rgba(255, 250, 245, 0.94);
          backdrop-filter: blur(18px);
          border-bottom: 1px solid rgba(113, 53, 65, 0.08);
        }

        .nav-inner {
          width: min(1180px, calc(100% - 40px));
          min-height: 76px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .brand {
          font-family: "Playfair Display", serif;
          font-size: 27px;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: #713541;
          white-space: nowrap;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 24px;
          flex: 1;
        }

        .desktop-nav a {
          position: relative;
          color: #514548;
          font-size: 12px;
          font-weight: 500;
          white-space: nowrap;
          transition: color 180ms ease;
        }

        .desktop-nav a::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -7px;
          width: 0;
          height: 1px;
          background: #9b4d5c;
          transition: width 180ms ease;
        }

        .desktop-nav a:hover {
          color: #9b4d5c;
        }

        .desktop-nav a:hover::after {
          width: 100%;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 7px;
        }

        .nav-icon,
        .nav-cart {
          border: 0;
          background: transparent;
          color: #713541;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 180ms ease;
        }

        .nav-icon {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          font-size: 23px;
        }

        .nav-cart {
          min-height: 38px;
          padding: 0 10px;
          gap: 4px;
          font-size: 15px;
          cursor: pointer;
        }

        .nav-cart span {
          min-width: 19px;
          height: 19px;
          padding: 0 5px;
          border-radius: 50%;
          background: #9b4d5c;
          color: white;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: 700;
        }

        .nav-icon:hover,
        .nav-cart:hover {
          transform: translateY(-2px);
        }

        .mobile-menu-button {
          display: none;
          width: 38px;
          height: 38px;
          padding: 8px;
          border: 0;
          background: transparent;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
        }

        .mobile-menu-button span {
          display: block;
          width: 21px;
          height: 1.5px;
          background: #713541;
        }

        .mobile-nav {
          display: none;
        }

        @media (max-width: 900px) {
          .desktop-nav {
            display: none;
          }

          .mobile-menu-button {
            display: flex;
          }

          .nav-inner {
            width: calc(100% - 28px);
            min-height: 68px;
            gap: 10px;
          }

          .brand {
            font-size: 23px;
            margin-right: auto;
          }

          .nav-icon {
            width: 34px;
            height: 34px;
          }

          .mobile-nav {
            position: absolute;
            left: 0;
            right: 0;
            top: 100%;
            padding: 8px 20px 20px;
            background: rgba(255, 250, 245, 0.98);
            backdrop-filter: blur(18px);
            border-bottom: 1px solid rgba(113, 53, 65, 0.08);
            display: flex;
            flex-direction: column;
            gap: 2px;
            transform: translateY(-10px);
            opacity: 0;
            pointer-events: none;
            transition:
              opacity 220ms ease,
              transform 220ms ease;
          }

          .mobile-nav.open {
            transform: translateY(0);
            opacity: 1;
            pointer-events: auto;
          }

          .mobile-nav a {
            padding: 14px 8px;
            border-bottom: 1px solid rgba(113, 53, 65, 0.07);
            color: #513f43;
            font-size: 14px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .desktop-nav a::after,
          .nav-icon,
          .nav-cart,
          .mobile-nav {
            transition: none;
          }
        }
      `}</style>
    </>
  );
}
