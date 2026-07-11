import Image from "next/image";
import styles from "./Partners.module.css";
import DoodleIcon from "./DoodleIcon";

export default function Partners() {
  const logos = [
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    "6.png",
    "7.png",
    "8.png",
  ];

  return (
    <section className={styles.partners}>
      <div className={styles.headingWrapper}>
        <div className={styles.line}></div>
        <div className={styles.titleContainer}>
          <h2 className={styles.heading}>Brands we work with</h2>
          <div className={styles.headingIcon}>
            <DoodleIcon />
          </div>
        </div>
      </div>
      <div className={styles.grid}>
        {logos.map((filename, index) => (
          <div key={index} className={styles.logoWrapper}>
            <Image
              src={`/ASSETS/par-logos/${filename}`}
              alt={`Partner ${index + 1}`}
              fill
              className={styles.logo}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
