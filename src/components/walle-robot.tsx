import type { Ref } from "react";

export function WalleRobot({
  className = "",
  leftPupilRef,
  rightPupilRef,
}: {
  className?: string;
  leftPupilRef?: Ref<SVGGElement>;
  rightPupilRef?: Ref<SVGGElement>;
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="WALL-E robot"
      role="img"
    >
      {/* tracks */}
      <rect x="30" y="130" width="140" height="34" rx="17" fill="#3a3f6b" />
      <rect x="44" y="132" width="112" height="30" rx="15" fill="#4c5488" />
      <circle cx="62" cy="147" r="5" fill="#23284a" />
      <circle cx="100" cy="147" r="5" fill="#23284a" />
      <circle cx="138" cy="147" r="5" fill="#23284a" />
      {/* body */}
      <rect x="42" y="62" width="116" height="74" rx="18" fill="#6366f1" />
      <rect x="52" y="72" width="96" height="54" rx="12" fill="#818cf8" />
      {/* chest panel */}
      <rect x="80" y="88" width="40" height="20" rx="6" fill="#3a3f6b" />
      <circle cx="92" cy="98" r="3" fill="#38bdf8" />
      <circle cx="108" cy="98" r="3" fill="#818cf8" />
      {/* arms */}
      <rect
        x="14"
        y="78"
        width="30"
        height="12"
        rx="6"
        fill="#54599a"
        transform="rotate(-12 29 84)"
      />
      <rect
        x="156"
        y="78"
        width="30"
        height="12"
        rx="6"
        fill="#54599a"
        transform="rotate(12 171 84)"
      />
      <circle cx="18" cy="96" r="7" fill="#4c5488" />
      <circle cx="182" cy="96" r="7" fill="#4c5488" />
      {/* neck */}
      <rect x="90" y="54" width="20" height="12" rx="4" fill="#3a3f6b" />
      {/* head */}
      <rect x="52" y="22" width="96" height="36" rx="18" fill="#818cf8" />
      <rect x="58" y="28" width="84" height="24" rx="12" fill="#6366f1" />
      {/* eyes */}
      <circle cx="80" cy="40" r="11" fill="#0e1330" />
      <circle cx="120" cy="40" r="11" fill="#0e1330" />
      {/* blinking pupils */}
      <g className="animate-eye-blink">
        <g ref={leftPupilRef} className="pupil">
          <circle cx="80" cy="40" r="6" fill="#eef2f9" />
          {/* scanner crosshairs */}
          <line
            x1="80" y1="33" x2="80" y2="47"
            stroke="#38bdf8"
            strokeWidth="1"
            className="animate-eye-scan"
          />
        </g>
        <g ref={rightPupilRef} className="pupil">
          <circle cx="120" cy="40" r="6" fill="#eef2f9" />
          <line
            x1="120" y1="33" x2="120" y2="47"
            stroke="#38bdf8"
            strokeWidth="1"
            className="animate-eye-scan"
            style={{ animationDelay: "0.5s" }}
          />
        </g>
      </g>
    </svg>
  );
}
