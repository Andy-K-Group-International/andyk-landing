export default function LogoIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 553 459"
      fill="none"
      stroke="currentColor"
      strokeWidth={18}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{ transform: "rotate(90deg)" }}
    >
      {/* Ears */}
      <line x1="138" y1="2" x2="275" y2="130" />
      <line x1="414" y1="2" x2="275" y2="130" />
      {/* Outer diamond */}
      <line x1="138" y1="2" x2="2" y2="297" />
      <line x1="414" y1="2" x2="549" y2="297" />
      {/* Inner diamond */}
      <line x1="275" y1="130" x2="2" y2="297" />
      <line x1="275" y1="130" x2="549" y2="297" />
      {/* Cube top edges */}
      <line x1="275" y1="130" x2="140" y2="297" />
      <line x1="275" y1="130" x2="408" y2="297" />
      {/* Cube side verticals */}
      <line x1="140" y1="297" x2="140" y2="380" />
      <line x1="408" y1="297" x2="408" y2="380" />
      {/* Cube bottom diagonals */}
      <line x1="140" y1="380" x2="275" y2="456" />
      <line x1="408" y1="380" x2="275" y2="456" />
      {/* Cube center vertical */}
      <line x1="275" y1="297" x2="275" y2="456" />
    </svg>
  );
}
