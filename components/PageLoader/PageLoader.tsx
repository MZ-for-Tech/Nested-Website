"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./PageLoader.module.css";

export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    // Start hiding after 1.1s
    const hideTimer = setTimeout(() => {
      setHiding(true);
    }, 1100);

    // Fully remove from DOM after exit animation (300ms)
    const removeTimer = setTimeout(() => {
      setVisible(false);
    }, 1400);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`${styles.loader} ${hiding ? styles.loaderHiding : ""}`}
      aria-hidden="true"
      role="presentation"
    >
      <div className={styles.logoWrapper}>
        <Image
          src="/ASSETS/logos/1.png"
          alt="Nested United"
          width={240}
          height={100}
          priority
          className={styles.logo}
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className={styles.progressTrack}>
        <div className={styles.progressBar} />
      </div>
    </div>
  );
}
