"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import IconCollage from "../IconCollage/IconCollage";
import MobileHeroCollage from "./MobileHeroCollage";
import TypewriterHeading from "./TypewriterHeading";
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
          sizes="(max-width: 768px) 0vw, 40vw"
          className={styles.rightImage}
        />
      </div>

      {/* Left Column */}
      <div className={styles.leftColumn}>
        {/* Vertical Side Text */}
        <div className={styles.sideTextWrapper}>
          <div className={styles.sideText}>{tr.hero.sideText}</div>
        </div>

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
            <TypewriterHeading
              phrases={
                lang === "ar"
                  ? ["ابدأ مشروعك\nمعنا", "من العمليات\nإلى النمو"]
                  : ["Start your project\nwith us", "From Operations\nto Growth"]
              }
              typingSpeed={60}
              deletingSpeed={35}
              pauseAfterType={2400}
              pauseAfterDelete={500}
            />
          </h1>
        </div>

        {/* Collage — conditionally render desktop or mobile version */}
        {isMobile ? (
          <div className={styles.mobileCollageWrapper}>
            <MobileHeroCollage />
          </div>
        ) : (
          <IconCollage className={styles.collage} />
        )}

        {/* Mobile accent bar */}
        {isMobile && <div className={styles.mobileAccent} aria-hidden="true" />}
      </div>
    </section>
  );
}
