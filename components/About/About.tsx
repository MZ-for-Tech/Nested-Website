import Image from "next/image";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        {/* Left Column - Office Image */}
        <div className={styles.leftColumn}>
          <Image
            src="/ASSETS/pics/5.png" // Placeholder, assuming 5 is a good office pic based on list, or we will check.
            alt="Modern Open Office"
            fill
            className={styles.image}
          />
        </div>

        {/* Right Column - Text Content */}
        <div className={styles.rightColumn}>
          <h2 className={styles.heading}>About our company</h2>
          <p className={styles.text}>
            Nested is a project operations and development company dedicated to building efficient systems and crafting seamless experiences that drive growth and maximize profitability.
          </p>
          <p className={styles.text}>
            We turn ideas into structured, scalable ventures through professional management that emphasizes precision, quality, and exceptional customer experience.
          </p>
          <div className={styles.buttonWrapper}>
            <button className={styles.button}>
              Take the First Step With Us
            </button>
            <div className={styles.cursorIcon}>
              <svg width="60" height="70" viewBox="0 0 60 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g stroke="#100f0d" strokeWidth="4" strokeLinecap="round">
                  <path d="M 12 30 L 4 34" />
                  <path d="M 13 16 L 6 9" />
                  <path d="M 24 10 L 26 2" />
                  <path d="M 36 15 L 43 10" />
                  <path d="M 40 26 L 49 28" />
                </g>
                <path d="M 22 26 L 22 54 L 29 48 L 36 60 L 43 56 L 36 44 L 46 44 Z" fill="#fff" stroke="#100f0d" strokeWidth="4" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
