import { useEffect, useState } from "react";

export function SplashScreen() {
  const [mounted, setMounted] = useState(true);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const fade = setTimeout(() => setHidden(true), 3200);
    const remove = setTimeout(() => setMounted(false), 3900);
    return () => {
      clearTimeout(fade);
      clearTimeout(remove);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-700 ${
        hidden ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ backgroundColor: "#0f1117" }}
    >
      <style>{`
        @keyframes kl-symbol-in {
          0%   { opacity: 0; transform: translate(160px,170px) scale(0.55) rotate(-90deg); }
          60%  { opacity: 1; }
          100% { opacity: 1; transform: translate(160px,170px) scale(1) rotate(0deg); }
        }
        @keyframes kl-stroke-draw {
          to { stroke-dashoffset: 0; }
        }
        @keyframes kl-fade-up {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes kl-pulse-core {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50%      { opacity: 1;   transform: scale(1.15); }
        }
        .kl-symbol {
          transform-box: fill-box;
          transform-origin: center;
          animation: kl-symbol-in 2200ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .kl-draw {
          stroke-dasharray: 700;
          stroke-dashoffset: 700;
          animation: kl-stroke-draw 2200ms ease-out 200ms both;
        }
        .kl-draw-slow {
          stroke-dasharray: 900;
          stroke-dashoffset: 900;
          animation: kl-stroke-draw 2600ms ease-out 400ms both;
        }
        .kl-core {
          transform-origin: center;
          transform-box: fill-box;
          animation: kl-pulse-core 1800ms ease-in-out 1600ms infinite;
        }
        .kl-word {
          opacity: 0;
          animation: kl-fade-up 900ms ease-out forwards;
        }
        .kl-word-1 { animation-delay: 1500ms; }
        .kl-word-2 { animation-delay: 1800ms; }
        .kl-word-3 { animation-delay: 2100ms; }
        @media (prefers-reduced-motion: reduce) {
          .kl-symbol, .kl-draw, .kl-draw-slow, .kl-core, .kl-word {
            animation: none !important;
            opacity: 1 !important;
            stroke-dashoffset: 0 !important;
            transform: none !important;
          }
        }
      `}</style>

      <svg
        viewBox="0 0 690 350"
        role="img"
        aria-label="Kinisis Labs"
        className="w-[min(960px,92vw)] h-auto"
      >
        <rect width="680" height="340" rx="16" fill="#0f1117" />

        <g className="kl-symbol">
          <circle r="108" fill="none" stroke="#1e2240" strokeWidth="1" className="kl-draw-slow" />
          <circle r="88"  fill="none" stroke="#2a2d45" strokeWidth="0.5" className="kl-draw-slow" />
          <circle r="66"  fill="none" stroke="#2a2d45" strokeWidth="0.5" className="kl-draw" />
          <circle r="44"  fill="none" stroke="#2a2d45" strokeWidth="0.5" className="kl-draw" />

          <line x1="0" y1="0" x2="0"   y2="-108" stroke="#3a3f6e" strokeWidth="0.75" className="kl-draw" />
          <line x1="0" y1="0" x2="94"  y2="-54"  stroke="#3a3f6e" strokeWidth="0.75" className="kl-draw" />
          <line x1="0" y1="0" x2="94"  y2="54"   stroke="#3a3f6e" strokeWidth="0.75" className="kl-draw" />
          <line x1="0" y1="0" x2="0"   y2="108"  stroke="#3a3f6e" strokeWidth="0.75" className="kl-draw" />
          <line x1="0" y1="0" x2="-94" y2="54"   stroke="#3a3f6e" strokeWidth="0.75" className="kl-draw" />
          <line x1="0" y1="0" x2="-94" y2="-54"  stroke="#3a3f6e" strokeWidth="0.75" className="kl-draw" />

          <line x1="0" y1="0" x2="0"  y2="-108" stroke="#7c83fd" strokeWidth="1.5" className="kl-draw" />
          <line x1="0" y1="0" x2="94" y2="54"   stroke="#7c83fd" strokeWidth="1.5" className="kl-draw" />

          <circle cx="0"   cy="-108" r="5" fill="#7c83fd" />
          <circle cx="94"  cy="-54"  r="3" fill="#2a2d45" />
          <circle cx="94"  cy="54"   r="5" fill="#7c83fd" />
          <circle cx="0"   cy="108"  r="3" fill="#2a2d45" />
          <circle cx="-94" cy="54"   r="3" fill="#2a2d45" />
          <circle cx="-94" cy="-54"  r="3" fill="#2a2d45" />

          <circle cx="0"   cy="-66" r="6" fill="#1c1f38" stroke="#7c83fd" strokeWidth="1.5" />
          <circle cx="57"  cy="-33" r="4" fill="#1c1f38" stroke="#7c83fd" strokeWidth="1" />
          <circle cx="57"  cy="33"  r="6" fill="#1c1f38" stroke="#7c83fd" strokeWidth="1.5" />
          <circle cx="0"   cy="66"  r="4" fill="#1c1f38" stroke="#7c83fd" strokeWidth="1" />
          <circle cx="-57" cy="33"  r="4" fill="#1c1f38" stroke="#7c83fd" strokeWidth="1" />
          <circle cx="-57" cy="-33" r="4" fill="#1c1f38" stroke="#7c83fd" strokeWidth="1" />

          <polygon points="0,-56 48,-28 48,28 0,56 -48,28 -48,-28" fill="none" stroke="#4a50a0" strokeWidth="1.5" className="kl-draw" />
          <polygon points="0,-32 28,-16 28,16 0,32 -28,16 -28,-16" fill="none" stroke="#7c83fd" strokeWidth="1" className="kl-draw" />

          <circle r="18" fill="#131629" stroke="#3a3f6e" strokeWidth="1.5" />
          <circle r="11" fill="#7c83fd" className="kl-core" />
          <circle r="5"  fill="#ffffff" opacity="0.9" />
        </g>

        <text
          className="kl-word kl-word-1"
          x="296" y="150"
          fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"
          fontSize="72" fontWeight="800" letterSpacing="-2" fill="#f0f2ff"
        >
          KINISIS
        </text>
        <text
          className="kl-word kl-word-2"
          x="298" y="218"
          fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"
          fontSize="44" fontWeight="300" letterSpacing="18" fill="#7c83fd"
        >
          LABS
        </text>
        <line className="kl-word kl-word-3" x1="296" y1="232" x2="640" y2="232" stroke="#7c83fd" strokeWidth="1" />
        <text
          className="kl-word kl-word-3"
          x="298" y="258"
          fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"
          fontSize="13" fontWeight="400" letterSpacing="3.5" fill="#555a8a"
        >
          BUILD · DELIVER · SCALE
        </text>
      </svg>
    </div>
  );
}
