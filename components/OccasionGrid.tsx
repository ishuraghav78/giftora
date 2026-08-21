"use client";

const occasions = [
  {
    title: "Birthday",
    emoji: "🎂",
    description: "Make their day unforgettable",
    image:
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Anniversary",
    emoji: "💗",
    description: "Celebrate your beautiful story",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Couple",
    emoji: "❤️",
    description: "For your favourite person",
    image:
      "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Wedding",
    emoji: "💍",
    description: "A beautiful beginning",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Graduation",
    emoji: "🎓",
    description: "Celebrate their achievement",
    image:
      "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Family",
    emoji: "👨‍👩‍👧",
    description: "Gifts from the heart",
    image:
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Personalized",
    emoji: "✨",
    description: "Make it uniquely theirs",
    image:
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Gift Hampers",
    emoji: "🎁",
    description: "A little bit of everything",
    image:
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=900&q=85",
  },
];

export default function OccasionGrid() {
  return (
    <section className="occasion-section" id="shop">
      <div className="occasion-container">

        <div className="occasion-heading">
          <span>SHOP BY OCCASION</span>

          <h2>Find A Gift For Every Moment</h2>

          <p>
            Beautiful gifts for birthdays, celebrations, love and
            every little moment worth remembering.
          </p>
        </div>

        <div className="occasion-grid">
          {occasions.map((occasion, index) => (
            <a
              href="#products"
              className={`occasion-card card-${index + 1}`}
              key={occasion.title}
            >
              <div className="occasion-image">
                <img
                  src={occasion.image}
                  alt={`${occasion.title} gift`}
                  loading="lazy"
                />

                <div className="occasion-overlay" />

                <div className="occasion-arrow">↗</div>
              </div>

              <div className="occasion-content">
                <div className="occasion-title">
                  <span>{occasion.emoji}</span>
                  <h3>{occasion.title}</h3>
                </div>

                <p>{occasion.description}</p>

                <span className="occasion-link">
                  Explore gifts <span>→</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        .occasion-section {
          position: relative;
          padding: 105px 0;
          background: #fffaf5;
        }

        .occasion-container {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
        }

        .occasion-heading {
          max-width: 680px;
          margin: 0 auto 48px;
          text-align: center;
        }

        .occasion-heading > span {
          display: block;
          margin-bottom: 14px;
          color: #9b4d5c;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.2em;
        }

        .occasion-heading h2 {
          color: #351b24;
          font-family: "Playfair Display", serif;
          font-size: clamp(32px, 4vw, 48px);
          line-height: 1.1;
        }

        .occasion-heading p {
          max-width: 570px;
          margin: 15px auto 0;
          color: #766c6e;
          font-size: 14px;
          line-height: 1.8;
        }

        .occasion-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .occasion-card {
          display: block;
          overflow: hidden;
          border-radius: 16px;
          background: #fff;
          border: 1px solid rgba(113, 53, 65, 0.08);
          box-shadow: 0 8px 28px rgba(113, 53, 65, 0.05);
          transition:
            transform 300ms ease,
            box-shadow 300ms ease;
        }

        .occasion-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 18px 38px rgba(113, 53, 65, 0.12);
        }

        .occasion-image {
          position: relative;
          height: 235px;
          overflow: hidden;
          background: #f4e3e4;
        }

        .occasion-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 650ms cubic-bezier(0.2, 0.7, 0.2, 1);
        }

        .occasion-card:hover .occasion-image img {
          transform: scale(1.07);
        }

        .occasion-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(53, 27, 36, 0.24),
            transparent 50%
          );
          pointer-events: none;
        }

        .occasion-arrow {
          position: absolute;
          right: 13px;
          top: 13px;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.9);
          color: #713541;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          opacity: 0;
          transform: translateY(5px);
          transition:
            opacity 250ms ease,
            transform 250ms ease;
        }

        .occasion-card:hover .occasion-arrow {
          opacity: 1;
          transform: translateY(0);
        }

        .occasion-content {
          padding: 18px 17px 20px;
        }

        .occasion-title {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .occasion-title span {
          font-size: 18px;
        }

        .occasion-title h3 {
          color: #351b24;
          font-size: 20px;
        }

        .occasion-content p {
          margin-top: 7px;
          color: #766c6e;
          font-size: 11px;
          line-height: 1.5;
        }

        .occasion-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          margin-top: 15px;
          color: #9b4d5c;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.03em;
        }

        .occasion-link span {
          transition: transform 200ms ease;
        }

        .occasion-card:hover .occasion-link span {
          transform: translateX(4px);
        }

        @media (max-width: 900px) {
          .occasion-section {
            padding: 75px 0;
          }

          .occasion-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .occasion-image {
            height: 220px;
          }
        }

        @media (max-width: 520px) {
          .occasion-container {
            width: calc(100% - 28px);
          }

          .occasion-heading {
            margin-bottom: 32px;
          }

          .occasion-heading h2 {
            font-size: 31px;
          }

          .occasion-heading p {
            font-size: 13px;
          }

          .occasion-grid {
            gap: 12px;
          }

          .occasion-card {
            border-radius: 12px;
          }

          .occasion-image {
            height: 175px;
          }

          .occasion-content {
            padding: 13px 12px 15px;
          }

          .occasion-title h3 {
            font-size: 17px;
          }

          .occasion-title span {
            font-size: 15px;
          }

          .occasion-content p {
            font-size: 10px;
          }

          .occasion-link {
            margin-top: 11px;
            font-size: 9px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .occasion-card,
          .occasion-image img,
          .occasion-arrow,
          .occasion-link span {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
