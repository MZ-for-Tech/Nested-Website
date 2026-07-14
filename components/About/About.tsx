import Image from "next/image";
import styles from "./About.module.css";

const ArrowIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="14" cy="14" r="13" stroke="#fff" strokeWidth="2" />
    <path
      d="M10 14H18M18 14L14 10M18 14L14 18"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function About() {
  return (
    <section className={styles.about} aria-label="About Nested United — Smart Operations">
      <div className={styles.container}>
        {/* Left Column - Office Image (padded, not full-bleed) */}
        <div className={styles.leftColumn}>
          <div className={styles.imageWrapper}>
            <Image
              src="/ASSETS/pics/5.png"
              alt="Nested United modern office interior with team collaboration spaces"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={styles.image}
            />
          </div>
        </div>

        {/* Right Column - Text Content */}
        <div className={styles.rightColumn}>
          <h2 className={styles.heading}>
            Smart Operations.<br />
            Sustainable Growth
          </h2>
          <p className={styles.text}>
            We help businesses build efficient operations,
            improve customer experience,
            and achieve sustainable growth through
            professional management and smart systems.
          </p>
          <div className={styles.buttonRow}>
            <button type="button" className={styles.button} aria-label="Start your project with Nested United">
              START YOUR PROJECT
              <span className={styles.buttonIcon} aria-hidden="true"><ArrowIcon /></span>
            </button>
            <button type="button" className={styles.button} aria-label="Book a consultation with Nested United">
              BOOK A CONSULTATION
              <span className={styles.buttonIcon} aria-hidden="true"><ArrowIcon /></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
