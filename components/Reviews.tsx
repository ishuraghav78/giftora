const reviews = [
  {
    name: "Priya S.",
    location: "Mumbai",
    rating: 5,
    text: "The unboxing experience felt so premium — my sister actually cried opening it. Worth every rupee.",
  },
  {
    name: "Rohan K.",
    location: "Delhi",
    rating: 5,
    text: "Ordered for my girlfriend's birthday and the personalization touch made it feel so much more special.",
  },
  {
    name: "Anjali M.",
    location: "Bengaluru",
    rating: 4,
    text: "Packaging was beautiful, delivery was on time. Will definitely order again for anniversaries.",
  },
  {
    name: "Karthik R.",
    location: "Chennai",
    rating: 5,
    text: "Was skeptical about ordering gifts online but this exceeded expectations. Highly recommend.",
  },
];

export default function Reviews() {
  return (
    <section className="bg-[#fdf3f4] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a66a77]">
            Loved By Many
          </p>
          <h2 className="font-serif text-4xl leading-tight text-[#3f202b] sm:text-5xl">
            What Our Customers Say
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-[24px] border border-[#ead8dc] bg-white p-6 shadow-[0_12px_40px_rgba(92,39,54,0.06)]"
            >
              <div className="flex items-center gap-0.5 text-[#c59a55]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span
                    key={index}
                    className={index < review.rating ? "" : "opacity-25"}
                  >
                    ★
                  </span>
                ))}
              </div>

              <p className="mt-4 text-sm leading-6 text-[#4a333c]">
                &ldquo;{review.text}&rdquo;
              </p>

              <p className="mt-5 font-serif text-sm text-[#3f202b]">
                {review.name}
              </p>
              <p className="text-xs text-[#a66a77]">{review.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
