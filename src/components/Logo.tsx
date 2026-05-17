import React from "react";

export function Logo({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 690 350" 
      role="img" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Kinisis Labs logo</title>
      <g transform="translate(160,170)">
        <circle r="108" fill="none" strokeWidth="1" stroke="rgb(30, 34, 64)"/>
        <circle r="88" fill="none" strokeWidth="0.5" stroke="rgb(42, 45, 69)"/>
        <circle r="66" fill="none" strokeWidth="0.5" stroke="rgb(42, 45, 69)"/>
        <circle r="44" fill="none" strokeWidth="0.5" stroke="rgb(42, 45, 69)"/>

        <line x1="0" y1="0" x2="0" y2="-108" strokeWidth="0.75" stroke="rgb(58, 63, 110)" />
        <line x1="0" y1="0" x2="94" y2="-54" strokeWidth="0.75" stroke="rgb(58, 63, 110)" />
        <line x1="0" y1="0" x2="94" y2="54" strokeWidth="0.75" stroke="rgb(58, 63, 110)" />
        <line x1="0" y1="0" x2="0" y2="108" strokeWidth="0.75" stroke="rgb(58, 63, 110)" />
        <line x1="0" y1="0" x2="-94" y2="54" strokeWidth="0.75" stroke="rgb(58, 63, 110)" />
        <line x1="0" y1="0" x2="-94" y2="-54" strokeWidth="0.75" stroke="rgb(58, 63, 110)" />

        <line x1="0" y1="0" x2="0" y2="-108" strokeWidth="1.5" stroke="rgb(124, 131, 253)" />
        <line x1="0" y1="0" x2="94" y2="54" strokeWidth="1.5" stroke="rgb(124, 131, 253)" />

        <circle cx="0" cy="-108" r="5" fill="rgb(124, 131, 253)" />
        <circle cx="94" cy="-54" r="3" fill="rgb(42, 45, 69)" />
        <circle cx="94" cy="54" r="5" fill="rgb(124, 131, 253)" />
        <circle cx="0" cy="108" r="3" fill="rgb(42, 45, 69)" />
        <circle cx="-94" cy="54" r="3" fill="rgb(42, 45, 69)" />
        <circle cx="-94" cy="-54" r="3" fill="rgb(42, 45, 69)" />

        <circle cx="0" cy="-66" r="6" strokeWidth="1.5" fill="rgb(28, 31, 56)" stroke="rgb(124, 131, 253)" />
        <circle cx="57" cy="-33" r="4" strokeWidth="1" fill="rgb(28, 31, 56)" stroke="rgb(124, 131, 253)" />
        <circle cx="57" cy="33" r="6" strokeWidth="1.5" fill="rgb(28, 31, 56)" stroke="rgb(124, 131, 253)" />
        <circle cx="0" cy="66" r="4" strokeWidth="1" fill="rgb(28, 31, 56)" stroke="rgb(124, 131, 253)" />
        <circle cx="-57" cy="33" r="4" strokeWidth="1" fill="rgb(28, 31, 56)" stroke="rgb(124, 131, 253)" />
        <circle cx="-57" cy="-33" r="4" strokeWidth="1" fill="rgb(28, 31, 56)" stroke="rgb(124, 131, 253)" />

        <polygon points="0,-56 48,-28 48,28 0,56 -48,28 -48,-28" fill="none" strokeWidth="1.5" stroke="rgb(74, 80, 160)" />
        <polygon points="0,-32 28,-16 28,16 0,32 -28,16 -28,-16" fill="none" strokeWidth="1" stroke="rgb(124, 131, 253)" />

        <circle r="18" strokeWidth="1.5" fill="rgb(19, 22, 41)" stroke="rgb(58, 63, 110)" />
        <circle r="11" fill="rgb(124, 131, 253)" />
        <circle r="5" fill="#fff" opacity="0.9" />
      </g>

      <text x="296" y="150" fontFamily="Space Grotesk, sans-serif" fontSize="72" fontWeight="800" letterSpacing="-2" fill="rgb(240, 242, 255)">KINISIS</text>
      <text x="298" y="218" fontFamily="Space Grotesk, sans-serif" fontSize="44" fontWeight="300" letterSpacing="18" fill="rgb(124, 131, 253)">LABS</text>
      <line x1="296" y1="232" x2="640" y2="232" strokeWidth="1" stroke="rgb(124, 131, 253)" />
      <text x="298" y="258" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="500" letterSpacing="3.5" fill="rgb(124, 131, 253)">BUILD · DELIVER · SCALE</text>
    </svg>
  );
}
