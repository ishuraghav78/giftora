"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "../../context/CartContext";
import { WHATSAPP_NUMBER } from "../../lib/config";

export default function CheckoutPage() {
  const { items, subtotal, totalDiscount, total, closeCart } = useCart();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"cod" | "upi">("cod");
  const [formError, setFormError] = useState("");

  const isFormValid =
    name.trim() !== "" &&
    phone.trim().length >= 10 &&
    address.trim() !== "" &&
    city.trim() !== "" &&
    pincode.trim().length >= 6;

  const buildWhatsAppMessage = () => {
    const lines = [
      "🎁 *New Order — GIFTORA*",
      "",
      `*Name:* ${name}`,
      `*Phone:* ${phone}`,
      `*Address:* ${address}, ${city} - ${pincode}`,
      `*Payment Method:* ${paymentMethod === "cod" ? "Cash on Delivery" : "UPI"}`,
      "",
      "*Items:*",
      ...items.map(
        (item) =>
          `• ${item.product.name} x${item.quantity} — ₹${(
            item.product.price * item.quantity
          ).toLocaleString("en-IN")}`
      ),
      "",
      `*Subtotal:* ₹${subtotal.toLocaleString("en-IN")}`,
      `*Discount:* -₹${totalDiscount.toLocaleString("en-IN")}`,
      `*Total:* ₹${total.toLocaleString("en-IN")}`,
    ];

    return encodeURIComponent(lines.join("\n"));
  };

  const handleConfirmOrder = () => {
    if (!isFormValid) {
      setFormError("Please fill all fields correctly before confirming.");
      return;
    }

    setFormError("");
    closeCart();

    const message = buildWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  if (items.length === 0) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#fffaf8] px-4 text-center">
        <p className="text-4xl">🎁</p>
        <h1 className="mt-4 font-serif text-2xl text-[#3f202b]">
          Your cart is empty
        </h1>
        <p className="mt-1 text-sm text-[#765c64]">
          Add a beautiful gift before checking out.
        </p>
        <Link
          href="/"
          className="mt-6 rounded-full bg-[#6b263b] px-8 py-3.5 text-xs font-semibold tracking-[0.14em] text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#572031] hover:shadow-lg"
        >
          CONTINUE SHOPPING
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#fffaf8] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a66a77]">
            Checkout
          </p>
          <h1 className="font-serif text-4xl leading-tight text-[#3f202b] sm:text-5xl">
            Almost There
          </h1>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-5">
          {/* Delivery details */}
          <div className="md:col-span-3 space-y-5 rounded-[28px] border border-[#ead8dc] bg-white/70 p-6 shadow-[0_12px_40px_rgba(92,39,54,0.06)] sm:p-8">
            <h2 className="font-serif text-xl text-[#3f202b]">
              Delivery Details
            </h2>

            <div className="space-y-4">
              <div>
                <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#a66a77]">
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="w-full rounded-xl border border-[#ead8dc] bg-[#fffaf8] px-4 py-3 text-sm text-[#3f202b] outline-none focus:border-[#9c566a]"
                  placeholder="Recipient's full name"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#a66a77]">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  className="w-full rounded-xl border border-[#ead8dc] bg-[#fffaf8] px-4 py-3 text-sm text-[#3f202b] outline-none focus:border-[#9c566a]"
                  placeholder="10-digit mobile number"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#a66a77]">
                  Address
                </label>
                <textarea
                  value={address}
                  onChange={(event) => setAddress(event.target.value)}
                  rows={3}
                  className="w-full rounded-xl border border-[#ead8dc] bg-[#fffaf8] px-4 py-3 text-sm text-[#3f202b] outline-none focus:border-[#9c566a]"
                  placeholder="House no, street, landmark"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#a66a77]">
                    City
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
                    className="w-full rounded-xl border border-[#ead8dc] bg-[#fffaf8] px-4 py-3 text-sm text-[#3f202b] outline-none focus:border-[#9c566a]"
                    placeholder="City"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#a66a77]">
                    Pincode
                  </label>
                  <input
                    type="text"
                    value={pincode}
                    onChange={(event) => setPincode(event.target.value)}
                    className="w-full rounded-xl border border-[#ead8dc] bg-[#fffaf8] px-4 py-3 text-sm text-[#3f202b] outline-none focus:border-[#9c566a]"
                    placeholder="6-digit pincode"
                  />
                </div>
              </div>
            </div>

            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#a66a77]">
                Payment Method
              </p>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod("cod")}
                  className={`rounded-xl border px-4 py-3.5 text-xs font-semibold tracking-wide transition-all duration-300 ${
                    paymentMethod === "cod"
                      ? "border-[#6b263b] bg-[#6b263b] text-white shadow-sm"
                      : "border-[#ead8dc] bg-[#fffaf8] text-[#6b263b] hover:bg-[#fdf1f3]"
                  }`}
                >
                  💵 Cash on Delivery
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod("upi")}
                  className={`rounded-xl border px-4 py-3.5 text-xs font-semibold tracking-wide transition-all duration-300 ${
                    paymentMethod === "upi"
                      ? "border-[#6b263b] bg-[#6b263b] text-white shadow-sm"
                      : "border-[#ead8dc] bg-[#fffaf8] text-[#6b263b] hover:bg-[#fdf1f3]"
                  }`}
                >
                  📱 UPI
                </button>
              </div>

              {paymentMethod === "upi" && (
                <p className="mt-3 text-xs leading-6 text-[#765c64]">
                  UPI details will be shared on WhatsApp after you confirm the
                  order below.
                </p>
              )}
            </div>

            {formError && (
              <p className="text-xs font-medium text-[#b3324a]">
                {formError}
              </p>
            )}
          </div>

          {/* Order summary */}
          <div className="md:col-span-2">
            <div className="rounded-[28px] border border-[#ead8dc] bg-white p-6 shadow-[0_12px_40px_rgba(92,39,54,0.06)] sm:p-7">
              <h2 className="font-serif text-xl text-[#3f202b]">
                Order Summary
              </h2>

              <div className="mt-5 space-y-4">
                {items.map((item) => (
                  <div key={item.product.id} className="flex gap-3">
                    <img
                      src={item.product.images.closedBox}
                      alt={item.product.name}
                      className="h-16 w-16 flex-shrink-0 rounded-xl object-cover"
                    />
                    <div className="flex-1">
                      <p className="font-serif text-sm leading-tight text-[#3f202b]">
                        {item.product.name}
                      </p>
                      <p className="mt-1 text-xs text-[#765c64]">
                        Qty {item.quantity}
                      </p>
                    </div>
                    <p className="text-sm font-semibold text-[#5d2336]">
                      ₹
                      {(item.product.price * item.quantity).toLocaleString(
                        "en-IN"
                      )}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 space-y-1.5 border-t border-[#ead8dc] pt-4 text-sm">
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

              <button
                type="button"
                onClick={handleConfirmOrder}
                className="mt-6 w-full rounded-full bg-[#25D366] px-5 py-3.5 text-xs font-semibold tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                ✅ CONFIRM ORDER ON WHATSAPP
              </button>

              <p className="mt-3 text-center text-[11px] leading-5 text-[#a66a77]">
                Tapping confirm will open WhatsApp with your order details
                pre-filled to send to us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
