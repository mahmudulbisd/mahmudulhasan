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
        fill="#b85f1e"
        stroke="#7a3d0e"
        strokeWidth="2"
      />
      <path
        d="M30 78 Q28 74 30 70 L84 66 L84 70 Q82 80 74 80 L42 82 Q32 82 30 78 Z"
        fill="#8a4a1f"
      />
      {/* boot sole */}
      <rect x="28" y="80" width="58" height="7" rx="3" fill="#5f3a14" />
      {/* dirt */}
      <ellipse cx="58" cy="50" rx="16" ry="5" fill="#4a3012" />
      {/* stem */}
      <path
        d="M58 48 Q56 36 60 26"
        fill="none"
        stroke="#3f8f5a"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* leaves */}
      <path d="M56 40 Q44 36 46 28 Q56 30 58 38 Z" fill="#4da86c" />
      <path d="M62 34 Q74 30 72 22 Q62 26 60 34 Z" fill="#3f8f5a" />
      {/* flower */}
      <circle cx="60" cy="24" r="6" fill="#e8873a" />
      <circle cx="60" cy="24" r="2.6" fill="#f5ecd9" />
      {/* sparkle */}
      <circle cx="78" cy="18" r="1.6" fill="#f5ecd9" opacity="0.8" />
      <circle cx="82" cy="14" r="1" fill="#f5ecd9" opacity="0.6" />
    </svg>
  );
}
