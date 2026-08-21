"use client";

import { useState } from "react";

const giftThemes = [
  "Birthday",
  "Anniversary",
  "Love & Romance",
  "Congratulations",
  "Thank You",
  "Just Because",
];

export default function Personalization() {
  const [recipientName, setRecipientName] = useState("");
  const [message, setMessage] = useState("");
  const [theme, setTheme] = useState(giftThemes[0]);

  const previewName = recipientName.trim() || "Someone Special";
  const previewMessage = message.trim() || "Happy Birthday!";

  return (
    <section className="bg-[#fffaf8] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a66a77]">
            Personalization
          </p>
          <h2 className="font-serif text-4xl leading-tight text-[#3f202b] sm:text-5xl">
            Make It Truly Personal
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#765c64] sm:text-base">
            A name. A message. A memory. Make their gift uniquely theirs.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Live preview */}
          <div className="order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-[24px] border border-[#ead8dc] bg-[#f7e8eb] shadow-[0_12px_40px_rgba(92,39,54,0.1)]">
              <div className="flex aspect-[4/3] items-center justify-center p-8">
                <div className="w-full max-w-xs rounded-[16px] bg-white/90 p-6 text-center shadow-md backdrop-blur-sm">
                  <p className="font-serif text-lg text-[#3f202b]">
                    For {previewName} ❤️
                  </p>
                  <p className="mt-3 whitespace-pre-wrap text-sm leading-6 text-[#765c64]">
                    {previewMessage}
                  </p>
                </div>
              </div>
            </div>
            <p className="mt-3 text-center text-[11px] uppercase tracking-[0.14em] text-[#a66a77]">
              Preview updates automatically ✨
            </p>
          </div>

          {/* Form */}
          <div className="order-1 space-y-5 lg:order-2">
            <div>
              <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.16em] text-[#a66a77]">
                Recipient Name (Optional)
              </label>
              <input
                type="text"
                value={recipientName}
                onChange={(event) => setRecipientName(event.target.value)}
                placeholder="Enter name (e.g. Riya ❤️)"
                maxLength={40}
                className="w-full rounded-2xl border border-[#ead8dc] bg-white px-4 py-3.5 text-sm text-[#3f202b] outline-none transition-colors focus:border-[#9c566a]"
              />
            </div>

            <div>
              <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.16em] text-[#a66a77]">
                Custom Message (Optional)
              </label>
              <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value.slice(0, 150))}
                placeholder="Write your message here..."
                rows={4}
                className="w-full resize-none rounded-2xl border border-[#ead8dc] bg-white px-4 py-3.5 text-sm text-[#3f202b] outline-none transition-colors focus:border-[#9c566a]"
              />
              <p className="mt-1.5 text-right text-[10px] text-[#a66a77]">
                {message.length}/150
              </p>
            </div>

            <div>
              <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.16em] text-[#a66a77]">
                Gift Theme
              </label>
              <select
                value={theme}
                onChange={(event) => setTheme(event.target.value)}
                className="w-full rounded-2xl border border-[#ead8dc] bg-white px-4 py-3.5 text-sm text-[#3f202b] outline-none transition-colors focus:border-[#9c566a]"
              >
                {giftThemes.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
