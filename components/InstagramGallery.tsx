"use client";

const instagramPosts = [
  {
    id: 1,
    image: "https://placehold.co/400x400/fdf3f4/6b263b?text=Unboxing+Moment",
    likes: "1.2k",
  },
  {
    id: 2,
    image: "https://placehold.co/400x400/fffaf8/c59a55?text=Gift+Reveal",
    likes: "894",
  },
  {
    id: 3,
    image: "https://placehold.co/400x400/fdf3f4/6b263b?text=Happy+Customer",
    likes: "2.1k",
  },
  {
    id: 4,
    image: "https://placehold.co/400x400/fffaf8/c59a55?text=Gift+Box",
    likes: "756",
  },
  {
    id: 5,
    image: "https://placehold.co/400x400/fdf3f4/6b263b?text=Personalised+Note",
    likes: "1.5k",
  },
  {
    id: 6,
    image: "https://placehold.co/400x400/fffaf8/c59a55?text=Celebration",
    likes: "980",
  },
];

export default function InstagramGallery() {
  return (
    <section className="py-16 px-4 bg-[#fffaf8]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm tracking-[0.2em] uppercase text-[#a66a77] mb-2">
            Real Moments
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#3f202b] mb-3">
            From Our Community
          </h2>
          <p className="text-[#765c64] max-w-xl mx-auto">
            See how our customers are sharing their gifting moments with us.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
          {instagramPosts.map((post) => (
            <div
              key={post.id}
              className="group relative aspect-square overflow-hidden rounded-xl shadow-sm border border-[#ead8dc] transition-transform duration-300 hover:scale-[1.03] motion-reduce:transition-none motion-reduce:hover:scale-100"
            >
              <img
                src={post.image}
                alt="Giftora customer moment"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#3f202b]/0 group-hover:bg-[#3f202b]/40 transition-colors duration-300 flex items-center justify-center motion-reduce:transition-none">
                <span className="opacity-0 group-hover:opacity-100 text-white text-sm font-medium transition-opacity duration-300 motion-reduce:transition-none">
                  ♥ {post.likes}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://instagram.com/giftora"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#6b263b] hover:bg-[#572031] text-white px-8 py-3 rounded-full text-sm tracking-wide transition-colors duration-300 shadow-sm"
          >
            Follow us @giftora
          </a>
        </div>
      </div>
    </section>
  );
}
