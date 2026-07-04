import "../styles/BackgroundEffects.css";

export function BackgroundEffects() {
  // Generate an array of 24 particles for CSS-only animation
  const particles = Array.from({ length: 24 });

  return (
    <div className="bg-effects-wrapper" aria-hidden="true">
      {/* Soft animated grid */}
      <div className="bg-effects-grid"></div>

      {/* Radial blur glows */}
      <div className="bg-effects-orb orb-1"></div>
      <div className="bg-effects-orb orb-2"></div>
      <div className="bg-effects-orb orb-3"></div>

      {/* Floating particles */}
      <div className="bg-effects-particles">
        {particles.map((_, i) => (
          <div key={i} className={`particle particle-${i}`}></div>
        ))}
      </div>
    </div>
  );
}
