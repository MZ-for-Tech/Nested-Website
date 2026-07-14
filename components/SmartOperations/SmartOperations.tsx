import Image from "next/image";
import styles from "./SmartOperations.module.css";
import DotsIcon from "../IconCollage/DotsIcon";

export default function SmartOperations() {
  return (
    <section className={styles.smartOperations} aria-label="Nested United — Smart Operations">
      <div className={styles.container}>
        {/* Left Column - Full Bleed Image */}
        <div className={styles.leftColumn}>
          <Image
            src="/ASSETS/pics/hq2.png"
            alt="Nested United modern office interior with team collaboration spaces"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={styles.image}
          />
        </div>

        {/* Right Column - Text Content */}
        <div className={styles.rightColumn}>
          <div className={styles.dotsIconWrapper} aria-hidden="true">
            <DotsIcon />
          </div>
          <div className={styles.textContent}>
            <h2 className={styles.heading}>
              Smart<br />
              Operations.<br />
              Sustainable<br />
              Growth.
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
                <span className={styles.buttonIcon} aria-hidden="true">→</span>
              </button>
              <button type="button" className={styles.buttonSecondary} aria-label="Book a consultation with Nested United">
                BOOK A CONSULTATION
                <span className={styles.buttonIcon} aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
