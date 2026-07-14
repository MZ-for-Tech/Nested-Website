import styles from "./SpinningAsterisk.module.css";

const SPOKE_ANGLES = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];

/**
 * Spinning green asterisk — same pattern as ClaudeIcon:
 * static dark <rect> background + rotating <g> green spokes.
 */
export default function SpinningAsterisk() {
  return (
    <svg
      viewBox="0 0 120 120"
      width="72"
      height="72"
      className={styles.svg}
      aria-hidden="true"
    >
      {/* Static dark background — does NOT animate */}
      <rect width="120" height="120" rx="14" fill="#0a0a0a" />

      {/* Green spokes — only this <g> rotates */}
      <g className={styles.group}>
        {SPOKE_ANGLES.map((angle) => (
          <rect
            key={angle}
            x="55.5"
            y="14"
            width="9"
            height="28"
            rx="4.5"
            fill="#22c55e"
            transform={`rotate(${angle}, 60, 60)`}
          />
        ))}
      </g>
    </svg>
  );
}
