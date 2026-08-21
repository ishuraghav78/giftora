"use client";

const moments = [
  {
    emoji: "🎂",
    title: "The Surprise",
    text: "That look on their face when the box arrives unannounced — pure joy, before they even open it.",
  },
  {
    emoji: "💌",
    title: "The Little Note",
    text: "A handwritten message tucked inside, saying the things words alone can't always carry.",
  },
  {
    emoji: "🤍",
    title: "The Unboxing",
    text: "Layer by layer, the reveal builds anticipation — each item chosen with someone specific in mind.",
  },
  {
    emoji: "✨",
    title: "The Memory",
    text: "Long after the ribbon is untied, it's the thought behind the gift that they'll remember.",
  },
];

export default function EmotionalStory() {
  return (
    <section className="bg-[#fffaf8] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a66a77]">
            Why Gifting Matters
          </p>
          <h2 className="font-serif text-4xl leading-tight text-[#3f202b] sm:text-5xl">
            More Than Just a Box
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#765c64] sm:text-base">
            Every gift carries a feeling. Here&apos;s the journey we design
            for, every single time.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {moments.map((moment, index) => (
            <div
              key={moment.title}
              className="group relative rounded-[24px] border border-[#ead8dc] bg-white/70 p-7 text-center shadow-[0_12px_40px_rgba(92,39,54,0.06)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_55px_rgba(92,39,54,0.12)]"
            >
              <span className="absolute right-5 top-5 font-serif text-xs text-[#d9b8bf]">
                0{index + 1}
              </span>
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#fdf3f4] text-3xl transition-transform duration-500 group-hover:scale-110">
                {moment.emoji}
              </div>
              <h3 className="mt-5 font-serif text-lg text-[#3f202b]">
                {moment.title}
              </h3>
              <p className="mt-2.5 text-sm leading-6 text-[#765c64]">
                {moment.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
