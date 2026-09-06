export function PlantInBoot({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Plant growing in a boot"
      role="img"
    >
      {/* boot */}
      <path
        d="M30 78 L28 62 Q26 50 40 48 L78 46 Q86 46 86 54 L84 70 Q82 80 74 80 L42 82 Q32 82 30 78 Z"
        fill="#4f46e5"
        stroke="#1e1b4b"
        strokeWidth="2"
      />
      <path
        d="M30 78 Q28 74 30 70 L84 66 L84 70 Q82 80 74 80 L42 82 Q32 82 30 78 Z"
        fill="#312e81"
      />
      {/* boot sole */}
      <rect x="28" y="80" width="58" height="7" rx="3" fill="#1e1b4b" />
      {/* dirt */}
      <ellipse cx="58" cy="50" rx="16" ry="5" fill="#131d36" />
      {/* stem */}
      <path
        d="M58 48 Q56 36 60 26"
        fill="none"
        stroke="#34d399"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* leaves */}
      <path d="M56 40 Q44 36 46 28 Q56 30 58 38 Z" fill="#34d399" />
      <path d="M62 34 Q74 30 72 22 Q62 26 60 34 Z" fill="#10b981" />
      {/* flower */}
      <circle cx="60" cy="24" r="6" fill="#6366f1" />
      <circle cx="60" cy="24" r="2.6" fill="#eef2f9" />
      {/* sparkle */}
      <circle cx="78" cy="18" r="1.6" fill="#eef2f9" opacity="0.8" />
      <circle cx="82" cy="14" r="1" fill="#eef2f9" opacity="0.6" />
    </svg>
  );
}
