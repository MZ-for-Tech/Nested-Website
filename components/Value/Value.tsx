import Image from "next/image";
import styles from "./Value.module.css";

export default function Value() {
  return (
    <section className={styles.value}>
      <div className={styles.container}>
        {/* Left Column – Branded office image with decor */}
        <div className={styles.leftColumn}>
          <div className={styles.imageDecor} />
          <div className={styles.imageWrapper}>
            <Image
              src="/ASSETS/pics/29.png"
              alt="Nested United office branding"
              fill
              className={styles.image}
            />
          </div>
        </div>

        {/* Right Column – Premium text content */}
        <div className={styles.rightColumn}>
          <div className={styles.tag}>Who We Are</div>
          <h2 className={styles.heading}>
            About<br />
            <span>Nested United</span>
          </h2>
          <p className={styles.text}>
            Nested United is a project operations and development company
            helping businesses operate more efficiently through integrated
            solutions in operations, hospitality, technology, marketing,
            and customer experience.
          </p>
        </div>
      </div>
    </section>
  );
}
