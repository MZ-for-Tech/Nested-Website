import Image from "next/image";
import styles from "./Founders.module.css";

export default function Founders() {
  return (
    <section className={styles.foundersSection}>
      <div className={styles.contentWrapper}>
        <div className={styles.textContent}>
          <div className={styles.textInner}>
            <h2 className={styles.heading}>About the founders</h2>
            <p className={styles.paragraph}>
              Nested was founded by a team that believes successful projects start with smart operations and precise management. The founders combine operational experience with a development mindset to build an integrated ecosystem that helps projects grow and remain stable.
            </p>
            <p className={styles.paragraph}>
              Their goal is to transform ideas into real, scalable operating systems and to introduce a new model in project management and operations based on professionalism and results.
            </p>
          </div>
        </div>
        <div className={styles.imageContent}>
          <Image 
            src="/ASSETS/pics/1.png" 
            alt="About the founders" 
            fill 
            className={styles.image}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
      <div className={styles.bottomBar}>
        <div className={styles.bottomDecoration}></div>
      </div>
    </section>
  );
}
