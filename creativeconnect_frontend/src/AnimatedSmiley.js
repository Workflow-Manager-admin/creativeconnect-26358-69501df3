import React from "react";

// PUBLIC_INTERFACE
/**
 * AnimatedSmiley - Displays a large, lively animated smiley SVG with a bouncing entrance animation.
 * Use: Place near the main block, centered or above imagery.
 */
function AnimatedSmiley() {
  return (
    <div
      className="animated-smiley"
      style={{
        width: 118,
        height: 118,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto 16px auto",
        filter: "drop-shadow(0 4px 21px rgba(232,197,23,0.23))",
        zIndex: 2,
        position: "relative",
        pointerEvents: "none",
        userSelect: "none"
      }}
      aria-hidden="true"
    >
      {/* Big smiley SVG with expressive face */}
      <svg viewBox="0 0 110 110" width="110" height="110">
        <circle cx="55" cy="55" r="50" fill="#ffe25f" stroke="#e8c517" strokeWidth="6"/>
        {/* Eyes */}
        <ellipse className="smiley-eye" cx="39" cy="49" rx="7" ry="10" fill="#1d1420"/>
        <ellipse className="smiley-eye" cx="71" cy="49" rx="7" ry="10" fill="#1d1420"/>
        {/* Cheeks */}
        <ellipse cx="35" cy="66" rx="5.6" ry="2.8" fill="#fed17e" opacity="0.7"/>
        <ellipse cx="75" cy="66" rx="5.6" ry="2.7" fill="#fed17e" opacity="0.7"/>
        {/* Smile: animated arc */}
        <path
          className="smiley-mouth"
          d="M40 67 Q55 87 70 67"
          stroke="#a89014"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        >
          <animate
            attributeName="d"
            values="
              M40 67 Q55 87 70 67;
              M40 67 Q55 80 70 67;
              M40 67 Q55 87 70 67"
            dur="1.8s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
      <style>
        {`
        .animated-smiley {
          animation: smiley-bounce 1.5s cubic-bezier(.45,1.8,.5,1) 0.1s 1, smiley-boing 2.6s cubic-bezier(.24,1.5,.44,1.0) 1.2s infinite alternate;
        }
        @keyframes smiley-bounce {
          0% { transform: scale(.68) translateY(81px);}
          60% { transform: scale(1.09) translateY(-16px);}
          100% { transform: scale(1.0) translateY(0);}
        }
        @keyframes smiley-boing {
          0%, 100% { transform: translateY(0) scale(1.0);}
          37% { transform: translateY(-9px) scale(1.05);}
          68% { transform: translateY(4px) scale(0.99);}
        }
        `}
      </style>
    </div>
  );
}

export default AnimatedSmiley;
