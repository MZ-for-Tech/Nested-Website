"use client";

import Image from "next/image";
import styles from "./About.module.css";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { tr } = useLanguage();
  const ticker = tr.about.tickerText;

  return (
    <section className={styles.about}>
      {/* Marquee Ticker Top Bar */}
      <div className={styles.tickerBar}>
        <div className={styles.tickerContent}>
          <span>{ticker}</span>
          <span>{ticker}</span>
          <span>{ticker}</span>
          <span>{ticker}</span>
        </div>
      </div>

      <div className={styles.container}>
        {/* Text Column */}
        <div className={styles.textColumn}>
          <div className={styles.textContent}>
            <div className={styles.tag}>{tr.about.tag}</div>
            <h2 className={styles.heading}>
              {tr.about.headingLine1}
              <br />
              <span className={styles.headingAccent} style={{ whiteSpace: "pre-line" }}>
                {tr.about.headingAccent}
              </span>
            </h2>
            <p className={styles.text}>{tr.about.text}</p>
          </div>
        </div>

        {/* Image Column */}
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

