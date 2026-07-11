"use client";

import Image from "next/image";
import styles from "./Hero.module.css";
import IconCollage from "../IconCollage/IconCollage";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Right Column - Background Image */}
      <div className={styles.rightColumn}>
        <Image
          src="/ASSETS/pics/4.png"
          alt="Building"
          fill
          priority
          className={styles.rightImage}
        />
      </div>

      {/* Left Column - Beige Area */}
      <div className={styles.leftColumn}>
        {/* Logo */}
        <div className={styles.logo}>
          <Image
            src="/ASSETS/logos/1.png"
            alt="Nested United Logo"
            width={360}
            height={150}
            priority
            style={{ objectFit: "contain", objectPosition: "left" }}
          />
        </div>

        {/* Text Content */}
        <div className={styles.content}>
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
