"use client";

import Image from "next/image";
import styles from "./Hero.module.css";
import IconCollage from "../IconCollage/IconCollage";

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Hero: From Operations to Growth">
      {/* Right Column - Background Image */}
      <div className={styles.rightColumn}>
        <Image
          src="/ASSETS/pics/4.png"
          alt="Nested United modern office building exterior"
          fill
          priority
          sizes="40vw"
          className={styles.rightImage}
        />
      </div>

      {/* Left Column - Beige Area */}
      <div className={styles.leftColumn}>
        {/* Vertical Side Text */}
        <div className={styles.sideTextWrapper}>
          <div className={styles.sideText}>WHERE IDEAS TAKE SHAPE</div>
        </div>

        {/* Logo */}
        <div className={`${styles.logo} ${styles.animLogo}`}>
          <Image
            src="/ASSETS/logos/1.png"
            alt="Nested United Logo"
            width={360}
            height={150}
            priority
            sizes="(max-width: 768px) 200px, 360px"
            style={{ objectFit: "contain", objectPosition: "left" }}
          />
        </div>

        {/* Text Content */}
        <div className={`${styles.content} ${styles.animHeading}`}>
          <h1 className={styles.heading}>
            Start your project<br />
            with us
          </h1>
        </div>
        {/* Graphic Blocks Collage */}
        <IconCollage className={styles.collage} />
      </div>
    </section>
  );
}
