import Image from "next/image";
import styles from "./Vision.module.css";

export default function Vision() {
  const items = [
    {
      title: "Our Vision",
      description: "To be a leading ecosystem in smart project operations and development.",
    },
    {
      title: "Philosophy",
      description: "We believe success is built through structure and attention to detail.",
    },
    {
      title: "Structure",
      description: "Nested United is a unified system of connected operational units.",
    }
  ];

  return (
    <>
      <section className={styles.vision}>
        <div className={styles.contentWrapper}>
          <div className={styles.visionImageWrapper}>
            <Image
              src="/vision.png"
              alt="Vision Icons"
              fill
              className={styles.visionImage}
            />
          </div>
          <div className={styles.container}>
            {items.map((item, index) => (
              <div key={index} className={styles.card}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.description}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className={styles.patternFooter}>
        <Image
          src="/pattern.png"
          alt="Pattern Footer"
          fill
          className={styles.patternImage}
        />
      </div>
    </>
  );
}
