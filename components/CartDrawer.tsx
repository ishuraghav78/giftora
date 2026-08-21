"use client";

import { useCart } from "../context/CartContext";

export default function CartDrawer() {
  const {
    items,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    subtotal,
    totalDiscount,
    total,
  } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className={`fixed inset-0 z-40 bg-[#3f1d29]/40 backdrop-blur-sm transition-opacity duration-300 ${
          isCartOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-[#fffaf8] shadow-2xl transition-transform duration-500 ease-out ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#ead8dc] px-5 py-5">
          <h2 className="font-serif text-xl text-[#3f202b]">
            Your Cart ({items.length})
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="flex h-9 w-9 items-center justify-center rounded-full text-xl text-[#6b263b] transition-colors hover:bg-[#f5e1e5]"
          >
            ×
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5 py-5">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <p className="text-4xl">🎁</p>
              <p className="mt-4 font-serif text-lg text-[#3f202b]">
                Your cart is empty
              </p>
              <p className="mt-1 text-sm text-[#765c64]">
                Add a beautiful gift to get started.
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <div key={item.product.id} className="flex gap-3">
                  <img
                    src={item.product.images.closedBox}
                    alt={item.product.name}
                    className="h-20 w-20 flex-shrink-0 rounded-xl object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-serif text-[15px] leading-tight text-[#3f202b]">
                        {item.product.name}
                      </p>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.product.id)}
                        aria-label="Remove item"
                        className="text-sm text-[#a66a77] transition-colors hover:text-[#6b263b]"
                      >
                        ×
                      </button>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center gap-2 rounded-full border border-[#ead8dc] px-1.5 py-1">
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity - 1)
                          }
                          className="flex h-6 w-6 items-center justify-center rounded-full text-sm text-[#6b263b] hover:bg-[#f5e1e5]"
                        >
                          −
                        </button>
                        <span className="w-4 text-center text-xs font-semibold text-[#3f202b]">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity + 1)
                          }
                          className="flex h-6 w-6 items-center justify-center rounded-full text-sm text-[#6b263b] hover:bg-[#f5e1e5]"
                        >
                          +
                        </button>
                      </div>
                      <p className="text-sm font-semibold text-[#5d2336]">
                        ₹
                        {(item.product.price * item.quantity).toLocaleString(
                          "en-IN"
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-[#ead8dc] px-5 py-5">
            <div className="space-y-1.5 text-sm">
              <div className="flex justify-between text-[#765c64]">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between text-[#765c64]">
                <span>Discount</span>
                <span>-₹{totalDiscount.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between text-[#765c64]">
                <span>Delivery</span>
                <span>₹0</span>
              </div>
              <div className="mt-2 flex justify-between border-t border-[#ead8dc] pt-2 text-base font-semibold text-[#3f202b]">
                <span>Total</span>
                <span>₹{total.toLocaleString("en-IN")}</span>
              </div>
            </div>

            <p className="mt-4 text-center text-xs text-[#a66a77]">
              🎁 Your gift is almost ready!
            </p>

            <button
              type="button"
              className="mt-4 w-full rounded-full bg-[#6b263b] px-5 py-3.5 text-xs font-semibold tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#572031] hover:shadow-lg"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        )}
      </div>
    </>
  );
}
