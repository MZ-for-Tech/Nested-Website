import Image from "next/image";
import styles from "./MobileHeroCollage.module.css";
import ClaudeIcon from "../IconCollage/ClaudeIcon";
import GeminiIcon from "../IconCollage/GeminiIcon";
import BowlsIcon from "../IconCollage/BowlsIcon";

export default function MobileHeroCollage() {
  return (
    <div className={styles.grid} aria-hidden="true">
      {/* Row 1 */}
      <div className={styles.cell}>
        <Image src="/ASSETS/icons/1.png" alt="" fill sizes="33vw" style={{ objectFit: "contain" }} />
      </div>
      <div className={styles.cell}>
        <ClaudeIcon />
      </div>
      <div className={styles.cell}>
        <Image src="/ASSETS/icons/3.png" alt="" fill sizes="33vw" style={{ objectFit: "contain" }} />
      </div>
      {/* Row 2 */}
      <div className={styles.cell}>
        <Image src="/ASSETS/icons/4.png" alt="" fill sizes="33vw" style={{ objectFit: "contain" }} />
      </div>
      <div className={styles.cell}>
        <GeminiIcon />
      </div>
      <div className={styles.cell}>
        <BowlsIcon />
      </div>
    </div>
  );
}
