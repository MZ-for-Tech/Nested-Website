"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./PageLoader.module.css";

const subLogos = [
  "joy.svg",
  "nest.svg",
  "op.svg",
  "print.svg",
  "tech.svg"
];

export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    // Check if the user has already seen the intro this session
    const hasSeenIntro = sessionStorage.getItem("hasSeenIntro");

    if (hasSeenIntro) {
      // If they have, immediately hide the loader to respect their time
      setTimeout(() => setVisible(false), 0);
      return;
    }

    // If it's their first time, let the 2.8s animation play out
    const hideTimer = setTimeout(() => {
      setHiding(true);
    }, 2800);

    const removeTimer = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("hasSeenIntro", "true");
    }, 3100);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      <div
        id="page-loader"
        className={`${styles.loader} ${hiding ? styles.loaderHiding : ""}`}
        aria-hidden="true"
        role="presentation"
        suppressHydrationWarning
      >
        <div className={styles.animationContainer}>
          {/* Main nestedunited logo */}
          <div className={styles.mainLogoWrapper}>
            <Image
              src="/ASSETS/logos/nestedunited.svg"
              alt="Nested United"
              fill
              priority
              style={{ objectFit: "contain" }}
            />
          </div>

          {/* The 5 sub-logos */}
          {subLogos.map((logo, i) => (
            <div
              key={logo}
              className={styles.subLogoWrapper}
              style={{ "--angle": `${i * 72}deg` } as React.CSSProperties}
            >
              <Image
                src={`/ASSETS/logos/${logo}`}
                alt={`Nested United Subbrand`}
                fill
                priority
                style={{ objectFit: "contain" }}
              />
            </div>
          ))}
        </div>
        <div className={styles.progressTrack}>
          <div className={styles.progressBar} />
        </div>
      </div>
      {/* 
        Execute script to instantly hide the loader if already seen.
        We put this AFTER the div so the DOM element is already parsed 
        by the browser and can be targeted, but BEFORE the first paint!
      */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            try {
              if (sessionStorage.getItem("hasSeenIntro")) {
                const loader = document.getElementById('page-loader');
                if (loader) loader.style.display = 'none';
              }
            } catch (e) {}
          `,
        }}
      />
    </>
  );
}
