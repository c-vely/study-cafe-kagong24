"use client";

type IconType = "coffee" | "book" | "clock" | "wifi" | "music" | "heart" | "star" | "computer";

interface PixelIconProps {
  type: IconType;
  size?: number;
  className?: string;
}

export default function PixelIcon({ type, size = 32, className = "" }: PixelIconProps) {
  const icons: Record<IconType, string[]> = {
    coffee: [
      "..####..",
      ".#....#.",
      "#.####.#",
      "#.#..#.#",
      "#.####.#",
      ".#....#.",
      "..####..",
      "...##...",
    ],
    book: [
      ".######.",
      "#......#",
      "#.####.#",
      "#.#..#.#",
      "#.####.#",
      "#......#",
      "#......#",
      ".######.",
    ],
    clock: [
      "..####..",
      ".#....#.",
      "#..#...#",
      "#..#...#",
      "#..###.#",
      "#......#",
      ".#....#.",
      "..####..",
    ],
    wifi: [
      "........",
      ".######.",
      "#......#",
      "..####..",
      ".#....#.",
      "...##...",
      "........",
      "...##...",
    ],
    music: [
      "...####.",
      "...#..#.",
      "...#..#.",
      "...#..#.",
      ".###.##.",
      "##.###.#",
      "##.###.#",
      ".###.##.",
    ],
    heart: [
      "........",
      ".##..##.",
      "########",
      "########",
      ".######.",
      "..####..",
      "...##...",
      "........",
    ],
    star: [
      "...##...",
      "...##...",
      ".######.",
      "########",
      ".######.",
      "..####..",
      ".##..##.",
      "##....##",
    ],
    computer: [
      ".######.",
      "#......#",
      "#.####.#",
      "#.####.#",
      "#......#",
      ".######.",
      "..####..",
      ".######.",
    ],
  };

  const pixelSize = size / 8;
  const pattern = icons[type];

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      style={{ imageRendering: "pixelated" }}
    >
      {pattern.map((row, y) =>
        row.split("").map((cell, x) =>
          cell === "#" ? (
            <rect
              key={`${y}-${x}`}
              x={x * pixelSize}
              y={y * pixelSize}
              width={pixelSize}
              height={pixelSize}
              fill="currentColor"
            />
          ) : null
        )
      )}
    </svg>
  );
}
