export function TrashCube({
  className = "",
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 60 60"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      {/* cube body */}
      <rect x="8" y="18" width="34" height="26" rx="4" fill="#8a6a3a" stroke="#5f4a26" strokeWidth="2" />
      {/* cube top face */}
      <path d="M8 18 L18 10 L52 10 L42 18 Z" fill="#a98a55" stroke="#5f4a26" strokeWidth="2" />
      {/* cube right face */}
      <path d="M42 18 L52 10 L52 34 L42 44 Z" fill="#6f532c" stroke="#5f4a26" strokeWidth="2" />
      {/* "W" mark like WALL-E's cubes */}
      <path d="M18 32 l4 -7 l4 7 l4 -7 l4 7" fill="none" stroke="#e8a25c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* glint */}
      <rect x="12" y="22" width="6" height="4" rx="1" fill="rgba(255,255,255,0.25)" />
    </svg>
  );
}
