"use client";

import { useState, ComponentType } from "react";
import ClaudeIcon from "@/components/IconCollage/ClaudeIcon";
import styles from "./Solutions.module.css";
import { useLanguage } from "@/contexts/LanguageContext";

/* ── Service card icons (clean SVG) ── */
const GearIcon = () => (
  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const UsersIcon = () => (
  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const TrendingUpIcon = () => (
  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

const HotelIcon = () => (
  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const MegaphoneIcon = () => (
  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 11l19-9-9 19-2-8-8-2z" />
  </svg>
);

const MonitorIcon = () => (
  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

const serviceIcons: ComponentType[] = [GearIcon, UsersIcon, TrendingUpIcon, HotelIcon, MegaphoneIcon, MonitorIcon];

const hoverClasses = [
  styles.hoverYellow,
  styles.hoverRed,
  styles.hoverBlue,
  styles.hoverGreen,
  styles.hoverBlack,
];

function ServiceCard({ Icon, title, description }: { Icon: ComponentType, title: string, description: string }) {
  const [activeHoverClass, setActiveHoverClass] = useState(hoverClasses[0]);

  const handleMouseEnter = () => {
    let randomClass = hoverClasses[Math.floor(Math.random() * hoverClasses.length)];
    while (randomClass === activeHoverClass) {
      randomClass = hoverClasses[Math.floor(Math.random() * hoverClasses.length)];
    }
    setActiveHoverClass(randomClass);
  };

  return (
    <div
      className={`${styles.card} ${activeHoverClass}`}
      onMouseEnter={handleMouseEnter}
    >
      <div className={styles.iconWrapper}>
        <Icon />
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDesc}>{description}</p>
    </div>
  );
}

export default function Solutions() {
  const { tr } = useLanguage();
  const s = tr.solutions;

  return (
    <section className={styles.solutions}>
      {/* ── Centred main content ── */}
      <div className={styles.content}>

        {/* ── Spinning asterisk — aligned top-left of content container ── */}
        <div className={styles.asteriskWrapper}>
          <ClaudeIcon noBackground />
        </div>

        {/* Header — fully centred */}
        <div className={styles.header}>
          <p className={styles.tag}>{s.tag}</p>
          <h2 className={styles.heading}>
            {s.heading}{" "}
            <span className={styles.highlight}>{s.headingHighlight}</span>
          </h2>
          <p className={styles.description}>{s.description}</p>
        </div>

        {/* Grid and Side text container */}
        <div className={styles.gridSection}>
          {/* 3 × 2 service cards */}
          <div className={styles.grid}>
            {s.services.map(({ id, title, description }, i) => (
              <ServiceCard
                key={id}
                Icon={serviceIcons[i]}
                title={title}
                description={description}
              />
            ))}
          </div>

          {/* ── Vertical side label — right edge ── */}
          <div className={styles.sideTextWrapper} aria-hidden="true">
            <span className={styles.sideText}>{s.sideText}</span>
          </div>
        </div>
      </div>

      {/* Yellow bottom stripe */}
      <div className={styles.yellowBar} />
    </section>
  );
}

