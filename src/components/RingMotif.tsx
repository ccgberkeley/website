interface RingMotifProps {
  size?: number
  style?: React.CSSProperties
}

// Concentric hairline rings — echoes the orbit/line-art motif from CCG's own
// Instagram graphics, standing in for the generic blurred "gradient blob"
// used by most templated hero sections.
export default function RingMotif({ size = 480, style }: RingMotifProps) {
  const rings = [1, 0.76, 0.52, 0.28]
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      style={{ position: 'absolute', pointerEvents: 'none', ...style }}
    >
      {rings.map((r) => (
        <circle key={r} cx="50" cy="50" r={50 * r} fill="none" stroke="rgba(201,180,242,0.28)" strokeWidth="0.35" />
      ))}
    </svg>
  )
}
