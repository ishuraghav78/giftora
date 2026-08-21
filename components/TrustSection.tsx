const trustPoints = [
  {
    title: "Free Delivery",
    text: "On all orders across India, no minimum order value.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3 7h11v8H3V7z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M14 10h4l3 3v2h-7v-5z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <circle cx="7" cy="17.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17.5" cy="17.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Secure Packaging",
    text: "Every gift is carefully packed to arrive exactly as intended.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M9 12l2 2 4-4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Easy Returns",
    text: "Not the right fit? Hassle-free returns within 7 days.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4 12a8 8 0 1 1 2.6 5.9"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M4 12V7m0 5h5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Here To Help",
    text: "Reach us anytime on WhatsApp for order support.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M21 11.5a8.5 8.5 0 1 1-3.8-7.1"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M4 20l1.3-3.9A8.46 8.46 0 0 1 4 11.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.5 10.5h7M8.5 13.5h4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function TrustSection() {
  return (
    <section className="border-y border-[#ead8dc] bg-[#fffaf8] px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a66a77]">
            Trusted By Many
          </p>
          <h2 className="font-serif text-3xl leading-tight text-[#3f202b] sm:text-4xl">
            Why Giftora?
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {trustPoints.map((point) => (
            <div key={point.title} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#fdf3f4] text-[#6b263b] [&>svg]:h-6 [&>svg]:w-6">
                {point.icon}
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
      </div>
    </section>
  );
}
