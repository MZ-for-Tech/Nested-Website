import Image from "next/image";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.about}>
      {/* Marquee Ticker Top Bar */}
      <div className={styles.tickerBar}>
        <div className={styles.tickerContent}>
          <span>NESTED UNITED • WHERE IDEAS TAKE SHAPE •</span>
          <span>NESTED UNITED • WHERE IDEAS TAKE SHAPE •</span>
          <span>NESTED UNITED • WHERE IDEAS TAKE SHAPE •</span>
          <span>NESTED UNITED • WHERE IDEAS TAKE SHAPE •</span>
        </div>
      </div>

      <div className={styles.container}>
        {/* Text Column (Now on the left) */}
        <div className={styles.textColumn}>
          <div className={styles.textContent}>
            <div className={styles.tag}>WHO WE ARE</div>
            <h2 className={styles.heading}>
              ABOUT<br />
              <span className={styles.headingAccent}>NESTED<br />UNITED</span>
            </h2>
            <p className={styles.text}>
              Nested United is a project operations and development company
              helping businesses operate more efficiently through integrated
              solutions in operations, hospitality, technology, marketing,
              and customer experience.
            </p>
          </div>
        </div>

        {/* Image Column (Now on the right) */}
        <div className={styles.imageColumn}>
          <div className={styles.imageContainer}>
            <div className={styles.imageDecor}></div>
            <div className={styles.imageWrapper}>
              <Image
                src="/ASSETS/pics/hq.png"
                alt="Nested United office branding"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
