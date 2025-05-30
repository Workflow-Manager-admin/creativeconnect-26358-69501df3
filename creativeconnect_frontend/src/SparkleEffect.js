import React from "react";

// PUBLIC_INTERFACE
/**
 * SparkleEffect - Adds animated sparkle SVGs as a decorative, modern background layer.
 * Usage: Place as a sibling/relative-layer behind core content.
 */
const SPARKLES = [
  // Array of sparkle positions, delays, and sizes for nice scattered layout
  { left: "14%", top: "23%", delay: "0s", size: 32 },
  { left: "64%", top: "15%", delay: ".5s", size: 19 },
  { left: "85%", top: "40%", delay: ".28s", size: 34 },
  { left: "40%", top: "63%", delay: "1.1s", size: 19 },
  { left: "70%", top: "65%", delay: ".67s", size: 26 },
  { left: "9%",  top: "68%", delay: ".82s", size: 23 },
  { left: "46%", top: "12%", delay: ".31s", size: 20 },
  { left: "25%", top: "74%", delay: ".98s", size: 14 }
];

function Sparkle({ left, top, delay, size }) {
  return (
    <span
      className="sparkle"
      style={{
        position: "absolute",
        left,
        top,
        pointerEvents: "none",
        zIndex: 1,
        animationDelay: delay,
        width: size,
        height: size,
        filter: "drop-shadow(0 1px 5px #ffe25f68)",
      }}
      aria-hidden="true"
    >
      {/* Gold sparkle SVG with subtle glowing effect */}
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <g>
          <path
            d="M12 2.9l2.07 4.56a3 3 0 0 0 1.49 1.49L20 11.1l-4.56 2.07a3 3 0 0 0-1.49 1.49L12 21.1l-2.07-4.56a3 3 0 0 0-1.49-1.49L4 12.9l4.56-2.07a3 3 0 0 0 1.49-1.49L12 2.9z"
            fill="url(#glow-gradient)"
            opacity=".78"
          />
          <defs>
            <radialGradient id="glow-gradient" cx="50%" cy="40%" r="80%">
              <stop stopColor="#fffbe8" />
              <stop offset="0.6" stopColor="#e8c517" />
              <stop offset="0.82" stopColor="#ffd104" />
              <stop offset="1" stopColor="#e8c517" />
            </radialGradient>
          </defs>
        </g>
      </svg>
    </span>
  );
}

const SparkleEffect = () => (
  <div
    className="sparkle-effect"
    style={{
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      zIndex: 1,
      overflow: "visible",
    }}
    aria-hidden="true"
  >
    {SPARKLES.map((s, i) => (
      <Sparkle key={i} {...s} />
    ))}
    <style>
      {`
      .sparkle {
        opacity: 0.95;
        animation: sparkle-pop 1.8s ease-in-out infinite alternate;
      }
      @keyframes sparkle-pop {
        0% { transform: scale(0.85) rotate(0deg); filter: brightness(1) drop-shadow(0 1px 2px #ffe25f83);}
        60% { transform: scale(1.15) rotate(12deg); filter: brightness(1.13) drop-shadow(0 1px 8px #ffe25f);}
        100% { transform: scale(0.87) rotate(-12deg); filter: brightness(.9) drop-shadow(0 1px 7px #ffe25f99);}
      }
      `}
    </style>
  </div>
);

export default SparkleEffect;
