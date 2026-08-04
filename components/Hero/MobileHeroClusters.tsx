"use client";

import Image from "next/image";
import styles from "./MobileHeroClusters.module.css";
import ClaudeIcon from "../IconCollage/ClaudeIcon";
import GeminiIcon from "../IconCollage/GeminiIcon";
import LinesIcon from "../IconCollage/LinesIcon";
import SquareIcon from "../IconCollage/SquareIcon";
import TiktokIcon from "../IconCollage/TiktokIcon";
import CircleIcon from "../IconCollage/CircleIcon";
import DotsIcon from "../IconCollage/DotsIcon";
import { useLanguage } from "@/contexts/LanguageContext";

export function TopRightCluster() {
  const { lang } = useLanguage();
  const isRtl = lang === "ar";

  // In LTR: cluster anchors top-right, icons spread left→right using `left`
  // In RTL:  cluster anchors top-left,  icons spread right→left using `right`
  const pos = (offset: number): React.CSSProperties =>
    isRtl
      ? { position: "absolute", right: offset }
      : { position: "absolute", left: offset };

  return (
    <div className={styles.topCluster} aria-hidden="true">
      <div className={styles.icon} style={{ ...pos(0),   top: 0 }}><Image src="/ASSETS/icons/1.png" alt="" fill sizes="44px" style={{ objectFit: "contain" }} /></div>
      <div className={styles.icon} style={{ ...pos(44),  top: 0 }}><ClaudeIcon /></div>
      <div className={styles.icon} style={{ ...pos(88),  top: 0 }}><Image src="/ASSETS/icons/3.png" alt="" fill sizes="44px" style={{ objectFit: "contain" }} /></div>

      <div className={styles.icon} style={{ ...pos(44),  top: "44px" }}><Image src="/ASSETS/icons/4.png" alt="" fill sizes="44px" style={{ objectFit: "contain" }} /></div>
      <div className={styles.icon} style={{ ...pos(88),  top: "44px" }}><GeminiIcon /></div>
    </div>
  );
}

export function BottomRightCluster() {
  const { lang } = useLanguage();
  const isRtl = lang === "ar";

  // In LTR: icons use `right` offset from the cluster's right edge
  // In RTL:  icons use `left` offset from the cluster's left edge
  const pos = (offset: number): React.CSSProperties =>
    isRtl
      ? { position: "absolute", left: offset }
      : { position: "absolute", right: offset };

  return (
    <div className={styles.bottomCluster} aria-hidden="true">
      {/* Near edge column (offset 0) */}
      <div className={styles.icon} style={{ ...pos(0),  top: 0 }}><CircleIcon /></div>
      <div className={styles.icon} style={{ ...pos(0),  top: "44px" }}><SquareIcon /></div>
      <div className={styles.icon} style={{ ...pos(0),  top: "88px" }}><Image src="/ASSETS/icons/14.png" alt="" fill sizes="44px" style={{ objectFit: "contain" }} /></div>
      <div className={styles.icon} style={{ ...pos(0),  top: "132px" }}><TiktokIcon /></div>

      {/* Middle column (offset 44px) */}
      <div className={styles.icon} style={{ ...pos(44), top: "22px" }}><DotsIcon /></div>
      <div className={styles.icon} style={{ ...pos(44), top: "88px" }}><LinesIcon /></div>

      {/* Far column (offset 88px) */}
      <div className={styles.icon} style={{ ...pos(88), top: "44px" }}><Image src="/ASSETS/icons/9.png" alt="" fill sizes="44px" style={{ objectFit: "contain" }} /></div>
    </div>
  );
}
