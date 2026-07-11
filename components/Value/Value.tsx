import styles from "./Value.module.css";

export default function Value() {
  const items = [
    {
      title: "Who We Serve",
      type: "text",
      content: "We work with projects across various sectors — from short-term rentals and existing businesses to startups — focusing on operations, pricing, and customer experience with a sustainable approach."
    },
    {
      title: "The Value We Add",
      type: "bullets",
      content: [
        "Structured operations instead of randomness",
        "Clear systems for daily work",
        "Data-driven decisions",
        "Enhanced experience without losing identity",
        "Scalable foundations for growth"
      ]
    },
    {
      title: "After You Reach Out",
      type: "text",
      content: "We understand your project, assess its needs, and design a tailored approach to operate and grow it effectively."
    }
  ];

  return (
    <section className={styles.value}>
      <div className={styles.yellowBar}></div>
      <div className={styles.container}>
        {/* Left Column - Title */}
        <div className={styles.leftColumn}>
          <h2 className={styles.heading}>
            Wher we<br />
            <span className={styles.greenText}>add value</span>
          </h2>
        </div>

        {/* Right Column - Content */}
        <div className={styles.rightColumn}>
          <div className={styles.list}>
            {items.map((item, index) => (
              <div key={index} className={styles.listItem}>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <div className={styles.itemContent}>
                  {item.type === 'text' ? (
                    <p>{item.content as string}</p>
                  ) : (
                    <ul className={styles.bulletList}>
                      {(item.content as string[]).map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
