export function EveShip({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 80"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="EVE ship"
      role="img"
    >
      {/* glowing trail */}
      <ellipse cx="10" cy="40" rx="22" ry="6" fill="rgba(53,200,194,0.25)" />
      <ellipse cx="18" cy="40" rx="10" ry="3" fill="rgba(53,200,194,0.5)" />
      {/* fuselage */}
      <path
        d="M30 40 Q70 8 112 40 Q70 72 30 40 Z"
        fill="#e8f6f5"
        stroke="#35c8c2"
        strokeWidth="1.5"
      />
      {/* nose highlight */}
      <path d="M88 40 Q104 40 112 40 Q96 30 88 40 Z" fill="#ffffff" opacity="0.8" />
      {/* window */}
      <ellipse cx="62" cy="40" rx="9" ry="8" fill="#0a0e1a" stroke="#35c8c2" strokeWidth="1.5" />
      <ellipse cx="62" cy="40" rx="4" ry="3.5" fill="#35c8c2" />
      {/* arms */}
      <path d="M46 22 L34 6 L26 8 L38 22 Z" fill="#d8f3f1" stroke="#35c8c2" strokeWidth="1" />
      <path d="M46 58 L34 74 L26 72 L38 58 Z" fill="#d8f3f1" stroke="#35c8c2" strokeWidth="1" />
    </svg>
  );
}
