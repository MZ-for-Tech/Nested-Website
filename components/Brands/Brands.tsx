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
      bgColor: "var(--brand-black)",
      title: b.storeTitle,
      subtitle: b.storeSubtitle,
      titleColor: "#fff",
      arrowColor: "#fff",
      type: "title",
      hasAsterisk: true,
    },
    {
      id: "joynest",
      bgColor: "var(--brand-red)",
      logoName: "JOYNEST",
      logoSub: "Event.",
      description: b.joynestDesc,
      titleColor: "var(--brand-black)",
      arrowColor: "var(--brand-black)",
      type: "logo",
      linkUrl: "https://linktr.ee/joy_nest",
    },
    {
      id: "stay",
      bgColor: "var(--brand-black)",
      title: b.stayTitle,
      titleColor: "#fff",
      arrowColor: "#fff",
      type: "title",
      linkUrl: "https://linktr.ee/OPNest",
    },
    {
      id: "technest",
      bgColor: "var(--brand-blue)",
      logoName: "TECHNEST",
      logoSub: "Dept.",
      description: b.technestDesc,
      titleColor: "var(--brand-black)",
      arrowColor: "var(--brand-black)",
      type: "logo",
      linkUrl: "/ASSETS/files/technest.pdf",
    },
    {
      id: "opnest",
      bgColor: "var(--brand-yellow)",
      logoName: "OPNEST",
      logoSub: "Dept.",
      description: b.opnestDesc,
      titleColor: "var(--brand-black)",
      arrowColor: "var(--brand-black)",
      type: "logo",
      linkUrl: "/ASSETS/files/opnest.pdf",
    },
    {
      id: "printnest",
      bgColor: "var(--brand-green)",
      logoName: "PRINTNEST",
      logoSub: "Dept.",
      description: b.printnestDesc,
      titleColor: "var(--brand-black)",
      arrowColor: "var(--brand-black)",
      type: "logo",
      linkUrl: "/ASSETS/files/printnest.pdf",
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
          <a
            href="https://linktr.ee/THE.NEST"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.card} ${styles.cardSignature}`}
            style={{ backgroundColor: "#9ea1a0", "--card-bg": "#9ea1a0" } as React.CSSProperties}
          >
            <div className={styles.signatureContent}>
              <div className={styles.logoBlock}>
                <h3 className={styles.logoText} style={{ color: "var(--brand-black)" }}>THENEST</h3>
                <span className={styles.logoSub} style={{ color: "var(--brand-black)" }}>Boutique.</span>
              </div>
              <div className={styles.signatureBottom}>
                <h4 className={styles.signatureTitle} style={{ color: "#fff", whiteSpace: "pre-line" }}>{b.signatureTitle}</h4>
                <p className={styles.signatureDesc}>{b.signatureDesc}</p>
                <ArrowIcon color="#fff" className={styles.arrowBottomLeft} />
              </div>
            </div>
          </a>
        </div>

        {/* ── Right Grid ── */}
        <div className={styles.rightGrid}>
          {blocks.map((block) => {
            const isLink = Boolean(block.linkUrl);
            const CardTag = isLink ? "a" : "div";
            const extraProps = isLink
              ? { href: block.linkUrl, target: "_blank", rel: "noopener noreferrer" }
              : {};

            return (
              <CardTag
                key={block.id}
                {...extraProps}
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
              </CardTag>
            );
          })}
        </div>

      </div>
    </section>
  );
}

