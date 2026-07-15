"use client";

import Image from "next/image";
import styles from "./SmartOperations.module.css";
import DotsIcon from "../IconCollage/DotsIcon";
import { useLanguage } from "@/contexts/LanguageContext";

export default function SmartOperations() {
  const { tr } = useLanguage();
  const s = tr.smartOps;

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
              {s.headingLine1}<br />
              {s.headingLine2}<br />
              {s.headingLine3}<br />
              {s.headingLine4}
            </h2>
            <p className={styles.text}>{s.text}</p>
            <div className={styles.buttonRow}>
              <button type="button" className={styles.button} aria-label={s.ariaBtn1}>
                {s.btn1}
                <span className={styles.buttonIcon} aria-hidden="true">→</span>
              </button>
              <button type="button" className={styles.buttonSecondary} aria-label={s.ariaBtn2}>
                {s.btn2}
                <span className={styles.buttonIcon} aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

