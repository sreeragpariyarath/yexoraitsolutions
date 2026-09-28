// Double chevron of square "pixels" on a 5x5 grid.
const PIXELS: [number, number][] = [
  [0, 0], [2, 0],
  [1, 1], [3, 1],
  [2, 2], [4, 2],
  [1, 3], [3, 3],
  [0, 4], [2, 4],
];

export function PixelMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 5 5" aria-hidden="true" className={`fill-white ${className}`}>
      {PIXELS.map(([x, y]) => (
        <rect key={`${x}-${y}`} x={x + 0.22} y={y + 0.22} width={0.56} height={0.56} />
      ))}
    </svg>
  );
}
