"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className={`hero ${visible ? "hero-visible" : ""}`}>
      <div className="hero-decoration heart-one">♡</div>
      <div className="hero-decoration heart-two">♡</div>
      <div className="hero-decoration star-one">✦</div>
      <div className="hero-decoration star-two">✧</div>

      <div className="hero-inner container">
        <div className="hero-content">
          <span className="hero-eyebrow">
            BEAUTIFULLY CURATED GIFTS
          </span>

          <h1>
            Make Every
            <br />
            Moment <em>Gift-Worthy.</em>
          </h1>

          <p>
            Beautifully curated gift boxes for birthdays, anniversaries
            and every little reason to celebrate.
          </p>

          <div className="hero-actions">
            <a href="#shop" className="hero-button primary">
              SHOP GIFTS
              <span>→</span>
            </a>

            <a href="#gift-finder" className="hero-button secondary">
              FIND A GIFT
              <span>✦</span>
            </a>
          </div>

          <div className="hero-trust">
            <span>🎁 Thoughtfully Packed</span>
            <span>•</span>
            <span>Made With Love</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-glow" />

          <div className="gift-shadow" />

          <div className="gift-box">
            <div className="gift-lid">
              <div className="lid-ribbon vertical" />
              <div className="lid-ribbon horizontal" />

              <div className="gift-label">
                <span>GIFTORA</span>
                <small>WITH LOVE</small>
              </div>
            </div>

            <div className="gift-base">
              <div className="box-ribbon" />

              <div className="gift-items">
                <div className="flower flower-one">✿</div>
                <div className="flower flower-two">✿</div>

                <div className="teddy">
                  <div className="ear left" />
                  <div className="ear right" />
                  <div className="teddy-face">
                    <span className="eye left-eye" />
                    <span className="eye right-eye" />
                    <span className="nose" />
                  </div>
                </div>

                <div className="chocolate chocolate-one" />
                <div className="chocolate chocolate-two" />

                <div className="mini-card">
                  <span>For You</span>
                  <strong>♡</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="floating-note note-one">
            Made with love ♡
          </div>

          <div className="floating-note note-two">
            A little surprise ✦
          </div>
        </div>
      </div>

      <div className="hero-bottom-fade" />

      <style jsx>{`
        .hero {
          position: relative;
          min-height: calc(100vh - 110px);
          overflow: hidden;
          background:
            radial-gradient(
              circle at 78% 45%,
              rgba(255, 255, 255, 0.9) 0%,
              rgba(248, 231, 232, 0.7) 34%,
              transparent 65%
            ),
            linear-gradient(135deg, #fffaf5 0%, #f8e7e8 100%);
        }

        .hero-inner {
          min-height: calc(100vh - 110px);
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          align-items: center;
          gap: 30px;
          position: relative;
          z-index: 2;
        }

        .hero-content {
          padding: 80px 0;
          opacity: 0;
          transform: translateY(25px);
          transition:
            opacity 800ms ease,
            transform 800ms ease;
        }

        .hero-visible .hero-content {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 22px;
          color: #9b4d5c;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.17em;
        }

        .hero-eyebrow::before {
          content: "";
          width: 28px;
          height: 1px;
          background: #c9a56a;
        }

        .hero h1 {
          max-width: 650px;
          color: #351b24;
          font-size: clamp(48px, 6vw, 82px);
          line-height: 0.99;
          letter-spacing: -0.035em;
        }

        .hero h1 em {
          color: #9b4d5c;
          font-style: italic;
          font-weight: 500;
        }

        .hero-content p {
          max-width: 510px;
          margin-top: 26px;
          color: #766c6e;
          font-size: 16px;
          line-height: 1.8;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 34px;
        }

        .hero-button {
          min-height: 50px;
          padding: 0 22px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          transition:
            transform 220ms ease,
            box-shadow 220ms ease,
            background 220ms ease;
        }

        .hero-button:hover {
          transform: translateY(-3px);
        }

        .hero-button.primary {
          color: #fff;
          background: #9b4d5c;
          box-shadow: 0 14px 30px rgba(155, 77, 92, 0.2);
        }

        .hero-button.primary:hover {
          background: #713541;
          box-shadow: 0 18px 35px rgba(155, 77, 92, 0.28);
        }

        .hero-button.secondary {
          color: #713541;
          background: rgba(255, 255, 255, 0.62);
          border: 1px solid rgba(113, 53, 65, 0.13);
        }

        .hero-button.secondary:hover {
          background: #fff;
        }

        .hero-trust {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 28px;
          color: #8a7c7f;
          font-size: 11px;
          letter-spacing: 0.03em;
        }

        .hero-trust span:nth-child(2) {
          color: #c9a56a;
        }

        /* ---------- Hero Visual ---------- */

        .hero-visual {
          position: relative;
          min-height: 650px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-glow {
          position: absolute;
          width: min(520px, 75vw);
          height: min(520px, 75vw);
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.62);
          filter: blur(5px);
        }

        .gift-shadow {
          position: absolute;
          width: 380px;
          height: 60px;
          bottom: 105px;
          border-radius: 50%;
          background: rgba(80, 44, 49, 0.14);
          filter: blur(18px);
          transform: rotate(-3deg);
        }

        .gift-box {
          position: relative;
          width: 390px;
          height: 390px;
          transform: rotate(-2deg);
          animation: floatingGift 5s ease-in-out infinite;
          z-index: 3;
        }

        .gift-lid {
          position: absolute;
          left: 20px;
          top: 45px;
          width: 350px;
          height: 90px;
          border-radius: 9px 9px 4px 4px;
          background:
            linear-gradient(
              145deg,
              #fffafa 0%,
              #f4dfe1 48%,
              #e8c8cc 100%
            );
          box-shadow:
            inset 0 2px 5px rgba(255, 255, 255, 0.8),
            0 13px 22px rgba(113, 53, 65, 0.13);
          transform: perspective(500px) rotateX(8deg);
          z-index: 5;
        }

        .lid-ribbon.vertical {
          position: absolute;
          left: 145px;
          top: 0;
          width: 58px;
          height: 90px;
          background: rgba(155, 77, 92, 0.78);
        }

        .lid-ribbon.horizontal {
          position: absolute;
          left: 0;
          top: 28px;
          width: 350px;
          height: 30px;
          background: rgba(155, 77, 92, 0.72);
        }

        .gift-label {
          position: absolute;
          right: 25px;
          top: 17px;
          width: 82px;
          height: 50px;
          border-radius: 4px;
          background: rgba(255, 250, 245, 0.9);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: #713541;
          box-shadow: 0 5px 14px rgba(113, 53, 65, 0.08);
        }

        .gift-label span {
          font-family: "Playfair Display", serif;
          font-size: 11px;
          letter-spacing: 0.09em;
          font-weight: 700;
        }

        .gift-label small {
          margin-top: 3px;
          font-size: 5px;
          letter-spacing: 0.16em;
        }

        .gift-base {
          position: absolute;
          left: 45px;
          bottom: 45px;
          width: 300px;
          height: 235px;
          border-radius: 5px 5px 15px 15px;
          background:
            linear-gradient(
              90deg,
              #dfb9be 0%,
              #f4dfe1 28%,
              #f9e9e9 50%,
              #edced1 72%,
              #d9adb4 100%
            );
          box-shadow:
            inset 0 8px 14px rgba(255, 255, 255, 0.35),
            0 22px 35px rgba(113, 53, 65, 0.17);
          overflow: hidden;
        }

        .box-ribbon {
          position: absolute;
          left: 115px;
          top: 0;
          width: 55px;
          height: 235px;
          background: rgba(155, 77, 92, 0.72);
        }

        .gift-items {
          position: absolute;
          inset: 22px 20px 20px;
          border-radius: 8px;
          background: #fff8f4;
          box-shadow: inset 0 0 20px rgba(113, 53, 65, 0.08);
        }

        .teddy {
          position: absolute;
          left: 74px;
          bottom: 34px;
          width: 90px;
          height: 104px;
          border-radius: 48% 48% 44% 44%;
          background: #c99476;
          box-shadow: inset -8px -8px 0 rgba(112, 67, 50, 0.08);
        }

        .teddy .ear {
          position: absolute;
          top: -16px;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #c99476;
        }

        .teddy .ear.left {
          left: 4px;
        }

        .teddy .ear.right {
          right: 4px;
        }

        .teddy-face {
          position: absolute;
          left: 18px;
          top: 22px;
          width: 54px;
          height: 46px;
          border-radius: 50%;
          background: #dba889;
        }

        .eye {
          position: absolute;
          top: 15px;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #4b302c;
        }

        .left-eye {
          left: 15px;
        }

        .right-eye {
          right: 15px;
        }

        .nose {
          position: absolute;
          left: 23px;
          top: 26px;
          width: 9px;
          height: 7px;
          border-radius: 50%;
          background: #634039;
        }

        .flower {
          position: absolute;
          color: #c98292;
          font-size: 38px;
          text-shadow: 0 4px 8px rgba(155, 77, 92, 0.15);
        }

        .flower-one {
          top: 18px;
          right: 24px;
        }

        .flower-two {
          top: 70px;
          right: 58px;
          font-size: 27px;
        }

        .chocolate {
          position: absolute;
          width: 45px;
          height: 40px;
          border-radius: 5px;
          background: linear-gradient(145deg, #7e4b3d, #492c26);
          box-shadow: 0 6px 10px rgba(73, 44, 38, 0.17);
        }

        .chocolate-one {
          right: 24px;
          bottom: 28px;
          transform: rotate(6deg);
        }

        .chocolate-two {
          right: 65px;
          bottom: 22px;
          transform: rotate(-8deg) scale(0.82);
        }

        .mini-card {
          position: absolute;
          left: 17px;
          top: 20px;
          width: 70px;
          height: 60px;
          background: #fff;
          border: 1px solid rgba(155, 77, 92, 0.1);
          border-radius: 4px;
          transform: rotate(-5deg);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: #713541;
          box-shadow: 0 6px 12px rgba(113, 53, 65, 0.08);
        }

        .mini-card span {
          font-family: "Playfair Display", serif;
          font-size: 12px;
        }

        .mini-card strong {
          margin-top: 3px;
          font-size: 16px;
          color: #9b4d5c;
        }

        .floating-note {
          position: absolute;
          padding: 10px 14px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.76);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(113, 53, 65, 0.08);
          color: #713541;
          font-size: 10px;
          box-shadow: 0 10px 25px rgba(113, 53, 65, 0.08);
          z-index: 5;
        }

        .note-one {
          left: 8%;
          top: 27%;
          transform: rotate(-5deg);
        }

        .note-two {
          right: 4%;
          bottom: 24%;
          transform: rotate(5deg);
        }

        .hero-decoration {
          position: absolute;
          color: rgba(155, 77, 92, 0.38);
          z-index: 1;
          pointer-events: none;
        }

        .heart-one {
          left: 6%;
          top: 22%;
          font-size: 35px;
          transform: rotate(-14deg);
        }

        .heart-two {
          right: 8%;
          top: 17%;
          font-size: 25px;
          transform: rotate(12deg);
        }

        .star-one {
          left: 47%;
          top: 17%;
          color: rgba(201, 165, 106, 0.58);
          font-size: 25px;
        }

        .star-two {
          right: 40%;
          bottom: 16%;
          color: rgba(201, 165, 106, 0.48);
          font-size: 20px;
        }

        .hero-bottom-fade {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 70px;
          background: linear-gradient(
            to top,
            rgba(255, 250, 245, 0.8),
            transparent
          );
          pointer-events: none;
        }

        @keyframes floatingGift {
          0%,
          100% {
            transform: translateY(0) rotate(-2deg);
          }

          50% {
            transform: translateY(-12px) rotate(0deg);
          }
        }

        @media (max-width: 900px) {
          .hero {
            min-height: auto;
          }

          .hero-inner {
            min-height: auto;
            grid-template-columns: 1fr;
            gap: 0;
          }

          .hero-content {
            padding: 65px 0 20px;
            text-align: center;
          }

          .hero-eyebrow {
            justify-content: center;
          }

          .hero h1 {
            font-size: clamp(45px, 12vw, 68px);
          }

          .hero-content p {
            margin-left: auto;
            margin-right: auto;
          }

          .hero-actions {
            justify-content: center;
          }

          .hero-trust {
            justify-content: center;
          }

          .hero-visual {
            min-height: 510px;
            margin-top: -10px;
          }

          .gift-box {
            transform: scale(0.82) rotate(-2deg);
          }

          .gift-shadow {
            bottom: 75px;
            transform: scale(0.8);
          }
        }

        @media (max-width: 520px) {
          .hero-content {
            padding-top: 48px;
          }

          .hero-eyebrow {
            font-size: 9px;
          }

          .hero h1 {
            font-size: clamp(42px, 13vw, 58px);
          }

          .hero-content p {
            font-size: 14px;
            line-height: 1.7;
          }

          .hero-actions {
            flex-direction: column;
            width: 100%;
          }

          .hero-button {
            width: min(100%, 260px);
          }

          .hero-trust {
            font-size: 9px;
          }

          .hero-visual {
            min-height: 420px;
          }

          .gift-box {
            transform: scale(0.66) rotate(-2deg);
          }

          .floating-note {
            font-size: 8px;
            padding: 8px 10px;
          }

          .note-one {
            left: 0;
            top: 22%;
          }

          .note-two {
            right: 0;
            bottom: 18%;
          }

          .heart-one {
            left: 3%;
            top: 16%;
          }

          .heart-two {
            right: 4%;
            top: 13%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .gift-box {
            animation: none;
          }

          .hero-content {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
