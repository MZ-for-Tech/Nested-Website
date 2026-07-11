import styles from "./Services.module.css";

const StarIcon = () => (
  <svg width="48" height="48" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="20" fill="#100f0d" />
    <path d="M20 6C20 14 14 20 6 20C14 20 20 26 20 34C20 26 26 20 34 20C26 20 20 14 20 6Z" fill="#fff" />
  </svg>
);

const ArrowIcon = ({ color = "#fff", className = "" }) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="20" cy="20" r="18" stroke={color} strokeWidth="2" />
    <path d="M14 20H26M26 20L20 14M26 20L20 26" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Services() {
  const blocks = [
    {
      id: "store",
      bgColor: "#0a0a0a",
      title: "Visit Our Store",
      titleColor: "#fff",
      arrowColor: "#fff",
      align: "center",
    },
    {
      id: "joynest",
      bgColor: "#ff5054",
      logoName: "JOYNEST",
      logoSub: "Event.",
      title: "Events &\nCelebrations",
      titleColor: "#fff",
      arrowColor: "#fff",
      align: "center",
    },
    {
      id: "stay",
      bgColor: "#0a0a0a",
      title: "Book your stay\nanywhere",
      titleColor: "#fff",
      arrowColor: "#fff",
      align: "center",
    },
    {
      id: "technest",
      bgColor: "#4f72ff",
      logoName: "TECHNEST",
      logoSub: "Dept.",
      title: "Systems &\nTechnologies",
      titleColor: "#100f0d",
      arrowColor: "#100f0d",
      align: "center",
    },
    {
      id: "opnest",
      bgColor: "#ffdb3d",
      logoName: "OPNEST",
      logoSub: "Dept.",
      title: "Project\nServices",
      titleColor: "#fff",
      arrowColor: "#fff",
      align: "center",
    },
    {
      id: "printnest",
      bgColor: "#22c55e",
      logoName: "PRINTNEST",
      logoSub: "Dept.",
      title: "Printing\n& Design",
      titleColor: "#100f0d",
      arrowColor: "#100f0d",
      align: "center",
    }
  ];

  return (
    <section className={styles.services}>
      <div className={styles.container}>
        {/* Left Column */}
        <div className={styles.leftColumn}>
          <div className={styles.header}>
            <StarIcon />
            <h2 className={styles.heading}>Our services</h2>
          </div>
          
          <div className={`${styles.card} ${styles.cardSignature}`} style={{ backgroundColor: "#9ea1a0" }}>
            <div className={styles.signatureContent}>
              <div className={styles.logoBlock}>
                <h3 className={styles.logoText} style={{ color: "#100f0d" }}>THENEST</h3>
                <span className={styles.logoSub} style={{ color: "#100f0d" }}>Boutique.</span>
              </div>
              <div className={styles.signatureBottom}>
                <h4 className={styles.signatureTitle} style={{ color: "#fff" }}>Our<br/>Signature<br/>Brand</h4>
                <ArrowIcon color="#fff" className={styles.arrowBottomLeft} />
              </div>
            </div>
          </div>
        </div>

        {/* Right Grid */}
        <div className={styles.rightGrid}>
          {blocks.map((block) => (
            <div 
              key={block.id} 
              className={`${styles.card} ${styles['align' + block.align]}`}
              style={{ backgroundColor: block.bgColor }}
            >
              <ArrowIcon color={block.arrowColor} className={styles.arrowTopRight} />
              
              <div className={styles.cardContent}>
                {block.logoName && (
                  <div className={styles.logoBlock}>
                    <h3 className={styles.logoText} style={{ color: "#100f0d" }}>{block.logoName}</h3>
                    <span className={styles.logoSub} style={{ color: "#100f0d" }}>{block.logoSub}</span>
                  </div>
                )}
                <h4 
                  className={styles.cardTitle} 
                  style={{ color: block.titleColor, whiteSpace: "pre-wrap" }}
                >
                  {block.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
