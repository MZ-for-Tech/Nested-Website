import Image from "next/image";
import styles from "./Partners.module.css";
import DoodleIcon from "./DoodleIcon";

const partnerNames = [
  "Partner Brand 1",
  "Partner Brand 2",
  "Partner Brand 3",
  "Partner Brand 4",
  "Partner Brand 5",
  "Partner Brand 6",
  "Partner Brand 7",
  "Partner Brand 8",
];

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
    <section className={styles.partners} aria-label="Brands and partners we work with">
      <div className={styles.headingWrapper}>
        <div className={styles.line}></div>
        <div className={styles.titleContainer}>
          <h2 className={styles.heading}>Brands we work with</h2>
          <div className={styles.headingIcon} aria-hidden="true">
            <DoodleIcon />
          </div>
        </div>
      </div>
      <div className={styles.grid} role="list" aria-label="Partner brand logos">
        {logos.map((filename, index) => (
          <div key={index} className={styles.logoWrapper} role="listitem">
            <Image
              src={`/ASSETS/par-logos/${filename}`}
              alt={`${partnerNames[index]} — Nested United partner`}
              fill
              sizes="(max-width: 600px) 45vw, (max-width: 1024px) 22vw, 12vw"
              className={styles.logo}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
