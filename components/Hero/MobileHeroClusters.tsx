import Image from "next/image";
import styles from "./MobileHeroClusters.module.css";
import ClaudeIcon from "../IconCollage/ClaudeIcon";
import GeminiIcon from "../IconCollage/GeminiIcon";
import LinesIcon from "../IconCollage/LinesIcon";
import SquareIcon from "../IconCollage/SquareIcon";
import TiktokIcon from "../IconCollage/TiktokIcon";
import CircleIcon from "../IconCollage/CircleIcon";
import DotsIcon from "../IconCollage/DotsIcon";

export function TopRightCluster() {
  return (
    <div className={styles.topCluster} aria-hidden="true">
      <div className={styles.icon} style={{ position: "absolute", top: 0, left: 0 }}><Image src="/ASSETS/icons/1.png" alt="" fill sizes="44px" style={{ objectFit: "contain" }} /></div>
      <div className={styles.icon} style={{ position: "absolute", top: 0, left: "44px" }}><ClaudeIcon /></div>
      <div className={styles.icon} style={{ position: "absolute", top: 0, left: "88px" }}><Image src="/ASSETS/icons/3.png" alt="" fill sizes="44px" style={{ objectFit: "contain" }} /></div>
      
      <div className={styles.icon} style={{ position: "absolute", top: "44px", left: "44px" }}><Image src="/ASSETS/icons/4.png" alt="" fill sizes="44px" style={{ objectFit: "contain" }} /></div>
      <div className={styles.icon} style={{ position: "absolute", top: "44px", left: "88px" }}><GeminiIcon /></div>
    </div>
  );
}

export function BottomRightCluster() {
  return (
    <div className={styles.bottomCluster} aria-hidden="true">
      {/* Right Column (right: 0) */}
      <div className={styles.icon} style={{ position: "absolute", top: 0, right: 0 }}><CircleIcon /></div>
      <div className={styles.icon} style={{ position: "absolute", top: "44px", right: 0 }}><SquareIcon /></div>
      <div className={styles.icon} style={{ position: "absolute", top: "88px", right: 0 }}><Image src="/ASSETS/icons/14.png" alt="" fill sizes="44px" style={{ objectFit: "contain" }} /></div>
      <div className={styles.icon} style={{ position: "absolute", top: "132px", right: 0 }}><TiktokIcon /></div>
      
      {/* Middle Column (right: 44px) */}
      <div className={styles.icon} style={{ position: "absolute", top: "22px", right: "44px" }}><DotsIcon /></div>
      <div className={styles.icon} style={{ position: "absolute", top: "88px", right: "44px" }}><LinesIcon /></div>
      
      {/* Left Column (right: 88px) */}
      <div className={styles.icon} style={{ position: "absolute", top: "44px", right: "88px" }}><Image src="/ASSETS/icons/9.png" alt="" fill sizes="44px" style={{ objectFit: "contain" }} /></div>
    </div>
  );
}
