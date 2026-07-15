"use client";

import styles from "./Brands.module.css";
import ClaudeIcon from "../IconCollage/ClaudeIcon";
import { useLanguage } from "@/contexts/LanguageContext";

const StarIcon = () => (
  <svg width="48" height="48" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="20" fill="#100f0d" />
    <path className={styles.starSparkle} d="M20 6C20 14 14 20 6 20C14 20 20 26 20 34C20 26 26 20 34 20C26 20 20 14 20 6Z" fill="#fff" />
  </svg>
);

const ArrowIcon = ({ color = "#fff", className = "" }) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${styles.arrowIcon} ${className}`} style={{ color }}>
    <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" className={styles.arrowCircle} />
    <path d="M14 20H26M26 20L20 14M26 20L20 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.arrowPath} />
  </svg>
);

export default function Brands() {
  const { tr } = useLanguage();
  const b = tr.brands;

  const blocks = [
    {
      id: "store",
      bgColor: "#0a0a0a",
      title: b.storeTitle,
      subtitle: b.storeSubtitle,
      titleColor: "#fff",
      arrowColor: "#fff",
      type: "title",
      hasAsterisk: true,
    },
    {
      id: "joynest",
      bgColor: "#ff5054",
      logoName: "JOYNEST",
      logoSub: "Event.",
      description: b.joynestDesc,
      titleColor: "#fff",
      arrowColor: "#fff",
      type: "logo",
    },
    {
      id: "stay",
      bgColor: "#0a0a0a",
      title: b.stayTitle,
      titleColor: "#fff",
      arrowColor: "#fff",
      type: "title",
    },
    {
      id: "technest",
      bgColor: "#4f72ff",
      logoName: "TECHNEST",
      logoSub: "Dept.",
      description: b.technestDesc,
      titleColor: "#100f0d",
      arrowColor: "#100f0d",
      type: "logo",
    },
    {
      id: "opnest",
      bgColor: "#ffdb3d",
      logoName: "OPNEST",
      logoSub: "Dept.",
      description: b.opnestDesc,
      titleColor: "#100f0d",
      arrowColor: "#100f0d",
      type: "logo",
    },
    {
      id: "printnest",
      bgColor: "#22c55e",
      logoName: "PRINTNEST",
      logoSub: "Dept.",
      description: b.printnestDesc,
      titleColor: "#100f0d",
      arrowColor: "#100f0d",
      type: "logo",
    }
  ];

  return (
    <section className={styles.brands}>
      <div className={styles.container}>

        {/* ── Left Column ── */}
        <div className={styles.leftColumn}>
          <div className={styles.header}>
            <StarIcon />
            <div>
              <h2 className={styles.heading}>{b.heading}</h2>
              <p className={styles.subtitle}>{b.subtitle}</p>
            </div>
          </div>

          {/* THENEST signature card */}
          <div className={`${styles.card} ${styles.cardSignature}`} style={{ backgroundColor: "#9ea1a0", "--card-bg": "#9ea1a0" } as React.CSSProperties}>
            <div className={styles.signatureContent}>
              <div className={styles.logoBlock}>
                <h3 className={styles.logoText} style={{ color: "#100f0d" }}>THENEST</h3>
                <span className={styles.logoSub} style={{ color: "#100f0d" }}>Boutique.</span>
              </div>
              <div className={styles.signatureBottom}>
                <h4 className={styles.signatureTitle} style={{ color: "#fff", whiteSpace: "pre-line" }}>{b.signatureTitle}</h4>
                <p className={styles.signatureDesc}>{b.signatureDesc}</p>
                <ArrowIcon color="#fff" className={styles.arrowBottomLeft} />
              </div>
            </div>
          </div>
        </div>

        {/* ── Right Grid ── */}
        <div className={styles.rightGrid}>
          {blocks.map((block) => (
            <div
              key={block.id}
              className={`${styles.card} ${block.type === "logo" ? styles.cardLogo : styles.cardTitle}`}
              style={{ backgroundColor: block.bgColor, "--card-bg": block.bgColor } as React.CSSProperties}
            >
              {/* Arrow: in normal flow at top-right */}
              <div className={styles.cardArrowRow}>
                <ArrowIcon color={block.arrowColor} />
              </div>

              {/* Logo cards: logo top, description bottom */}
              {block.type === "logo" && (
                <div className={styles.logoCardContent}>
                  <div className={styles.logoBlock}>
                    <h3 className={styles.logoText} style={{ color: block.titleColor }}>{block.logoName}</h3>
                    <span className={styles.logoSub} style={{ color: block.titleColor }}>{block.logoSub}</span>
                  </div>
                  <p className={styles.cardDesc} style={{ color: block.titleColor }}>{block.description}</p>
                </div>
              )}

              {/* Title cards: title + optional subtitle, centered */}
              {block.type === "title" && (
                <div className={styles.titleCardContent}>
                  <h4
                    className={styles.cardTitle}
                    style={{ color: block.titleColor, whiteSpace: "pre-wrap" }}
                  >
                    {block.title}
                  </h4>
                  {block.subtitle && (
                    <div className={styles.subtitleWrapper}>
                      <p className={styles.cardSubtitle} style={{ color: block.titleColor, margin: 0 }}>
                        {block.subtitle}
                      </p>
                      {block.hasAsterisk && (
                        <div className={styles.asteriskWrapper}>
                          <ClaudeIcon noBackground />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

