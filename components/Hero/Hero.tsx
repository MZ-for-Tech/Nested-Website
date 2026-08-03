"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import IconCollage from "../IconCollage/IconCollage";
import { TopRightCluster, BottomRightCluster } from "./MobileHeroClusters";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { tr, lang } = useLanguage();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section className={styles.hero} aria-label={tr.hero.sideText}>
      <div className={styles.rightColumn}>
        <Image
          src="/ASSETS/pics/building.webp"
          alt="Nested United modern office building exterior"
          fill
          priority
          quality={85}
          sizes="(max-width: 768px) 100vw, 40vw"
          className={styles.rightImage}
        />
      </div>

      {/* Vertical Side Text */}
      <div className={styles.sideTextWrapper}>
        <div className={styles.sideText}>{tr.hero.sideText}</div>
      </div>

      {/* Left Column */}
      <div className={styles.leftColumn}>
        {/* Logo */}
        <div className={`${styles.logo} ${styles.animLogo}`}>
          <Image
            src="/ASSETS/logos/logo.svg"
            alt="Nested United Logo"
            width={360}
            height={150}
            priority
            sizes="(max-width: 768px) 200px, 360px"
            style={{ objectFit: "contain", objectPosition: "left", width: "360px", maxWidth: "100%", height: "auto" }}
          />
        </div>

        {/* Text Content */}
        <div className={`${styles.content} ${styles.animHeading}`}>
          <h1 className={styles.heading}>
            {lang === "ar" ? "ابدأ مشروعك\nمعنا" : "Start your project\nwith us"}
          </h1>
          <p className={styles.subtitle}>
            {lang === "ar" ? "من العمليات إلى النمو." : "From Operations to Growth."}
          </p>
        </div>

        {/* Collage — conditionally render desktop or mobile version */}
        {!isMobile && (
          <IconCollage className={styles.collage} />
        )}

        {/* Mobile accent bar */}
        {isMobile && <div className={styles.mobileAccent} aria-hidden="true" />}
      </div>

      {isMobile && (
        <>
          <TopRightCluster />
          <BottomRightCluster />
        </>
      )}
    </section>
  );
}
