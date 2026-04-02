"use client";

interface PixelSparkleProps {
  className?: string;
  color?: string;
}

export default function PixelSparkle({ className = "", color = "#e07868" }: PixelSparkleProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      className={`sparkle ${className}`}
      style={{ imageRendering: "pixelated" }}
    >
      <rect x="7" y="0" width="2" height="2" fill={color} />
      <rect x="7" y="14" width="2" height="2" fill={color} />
      <rect x="0" y="7" width="2" height="2" fill={color} />
      <rect x="14" y="7" width="2" height="2" fill={color} />
      <rect x="3" y="3" width="2" height="2" fill={color} />
      <rect x="11" y="3" width="2" height="2" fill={color} />
      <rect x="3" y="11" width="2" height="2" fill={color} />
      <rect x="11" y="11" width="2" height="2" fill={color} />
      <rect x="6" y="6" width="4" height="4" fill={color} />
    </svg>
  );
}
