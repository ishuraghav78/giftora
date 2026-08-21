const trustPoints = [
  {
    emoji: "🚚",
    title: "Free Delivery",
    text: "On all orders across India, no minimum order value.",
  },
  {
    emoji: "📦",
    title: "Secure Packaging",
    text: "Every gift is carefully packed to arrive exactly as intended.",
  },
  {
    emoji: "↩️",
    title: "Easy Returns",
    text: "Not the right fit? Hassle-free returns within 7 days.",
  },
  {
    emoji: "💬",
    title: "Here To Help",
    text: "Reach us anytime on WhatsApp for order support.",
  },
];

export default function TrustSection() {
  return (
    <section className="border-y border-[#ead8dc] bg-[#fffaf8] px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 sm:grid-cols-4">
        {trustPoints.map((point) => (
          <div key={point.title} className="text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#fdf3f4] text-2xl">
              {point.emoji}
            </div>
            <h3 className="mt-3 font-serif text-sm text-[#3f202b] sm:text-base">
              {point.title}
            </h3>
            <p className="mt-1.5 text-xs leading-5 text-[#765c64] sm:text-sm">
              {point.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
