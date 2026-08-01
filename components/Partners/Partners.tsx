"use client";

import Image from "next/image";
import styles from "./Partners.module.css";
import DoodleIcon from "./DoodleIcon";
import { useLanguage } from "@/contexts/LanguageContext";

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
  const { tr } = useLanguage();

  const logos = [
    "1.webp", "2.webp", "3.webp", "4.webp",
    "5.webp", "6.webp", "7.webp", "8.webp",
  ];

  return (
    <section className={styles.partners} aria-label={tr.partners.heading}>
      <div className={styles.headingWrapper}>
        <div className={styles.line}></div>
        <div className={styles.titleContainer}>
          <h2 className={styles.heading}>{tr.partners.heading}</h2>
          <div className={styles.headingIcon} aria-hidden="true">
            <DoodleIcon />
          </div>
        </div>
      </div>
      <div className={styles.grid} role="list" aria-label={tr.partners.heading}>
        {logos.map((filename, index) => (
          <div key={index} className={styles.logoWrapper} role="listitem">
            <Image
              src={`/ASSETS/par-logos/${filename}`}
              alt={`${partnerNames[index]} — Nested United partner`}
              fill
              loading="lazy"
              quality={85}
              sizes="(max-width: 600px) 45vw, (max-width: 1024px) 22vw, 12vw"
              className={styles.logo}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

