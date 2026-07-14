import Image from "next/image";
import styles from "./Footer.module.css";
import IconCollage from "../IconCollage/IconCollage";

const InstagramIcon = () => (
  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="ig-grad" cx="0.2" cy="0.8" r="1.2" fx="0.2" fy="0.8">
        <stop offset="0%" stopColor="#f09433" />
        <stop offset="30%" stopColor="#e6683c" />
        <stop offset="60%" stopColor="#dc2743" />
        <stop offset="80%" stopColor="#cc2366" />
        <stop offset="100%" stopColor="#bc1888" />
      </radialGradient>
    </defs>
    <rect width="24" height="24" rx="6" fill="url(#ig-grad)" />
    <path d="M12 7.5A4.5 4.5 0 1 0 12 16.5A4.5 4.5 0 1 0 12 7.5ZM12 14.5A2.5 2.5 0 1 1 12 9.5A2.5 2.5 0 1 1 12 14.5Z" fill="#fff" />
    <path d="M17.5 7A1 1 0 1 1 16.5 6A1 1 0 0 1 17.5 7Z" fill="#fff" />
    <path fillRule="evenodd" clipRule="evenodd" d="M12 4.5c-2.4 0-2.7 0-3.65.04-.88.04-1.36.19-1.68.31-.42.17-.72.36-1.02.66-.3.3-.49.6-.66 1.02-.12.32-.27.8-.31 1.68C4.51 9.25 4.5 9.55 4.5 12c0 2.45.01 2.75.05 3.7.04.88.19 1.36.31 1.68.17.42.36.72.66 1.02.3.3.6.49 1.02.66.32.12.8.27 1.68.31.95.04 1.25.05 3.7.05s2.75-.01 3.7-.05c.88-.04 1.36-.19 1.68-.31.42-.17.72-.36 1.02-.66.3-.3.49-.6.66-1.02.12-.32.27-.8.31-1.68.04-.95.05-1.25.05-3.7s-.01-2.75-.05-3.7c-.04-.88-.19-1.36-.31-1.68-.17-.42-.36-.72-.66-1.02-.3-.3-.6-.49-1.02-.66-.32-.12-.8-.27-1.68-.31-.95-.04-1.25-.05-3.7-.05zm0 1.5c2.4 0 2.68.01 3.63.05.81.04 1.25.17 1.54.29.38.15.65.33.92.6.27.27.45.54.6.92.12.29.25.73.29 1.54.04.95.05 1.23.05 3.63s-.01 2.68-.05 3.63c-.04.81-.17 1.25-.29 1.54-.15.38-.33.65-.6.92-.27.27-.54-.45-.92.6-.29.12-.73.25-1.54.29-.95.04-1.23.05-3.63.05s-2.68-.01-3.63-.05c-.81-.04-1.25-.17-1.54-.29-.38-.15-.65-.33-.92-.6-.27-.27-.45-.54-.6-.92-.12-.29-.25-.73-.29-1.54C6.01 14.68 6 14.4 6 12s.01-2.68.05-3.63c.04-.81.17-1.25.29-1.54.15-.38.33-.65.6-.92.27-.27.54-.45.92-.6.29-.12.73-.25 1.54-.29.95-.04 1.23-.05 3.63-.05z" fill="#fff" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#0A66C2" />
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.46v6.28zM5.34 7.43c-1.14 0-2.06-.93-2.06-2.07 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.07-2.06 2.07zM7.12 20.45H3.56V9h3.56v11.45z" fill="#fff" />
  </svg>
);

const TikTokIcon = () => (
  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#000" />
    <path d="M12.5 3v10.5c0 1.6-.9 3-2.3 3.6-1.4.5-3-.2-3.8-1.4-.8-1.2-.6-2.9.4-3.9 1-.9 2.5-1.1 3.7-.4v-3c-2.3-.6-4.9 0-6.4 1.8-1.5 1.9-1.5 4.6-.2 6.5 1.4 1.9 3.8 2.8 6.1 2.3 2.3-.5 4.1-2.4 4.5-4.8.1-.4.1-.7.1-1.1V8c1 .8 2.2 1.3 3.5 1.5V6.5c-1.5-.2-2.8-1-3.6-2.2-.2-.3-.3-.6-.4-1H12.5z" fill="#EE1D52" transform="translate(-0.5, 0.5)" />
    <path d="M12.5 3v10.5c0 1.6-.9 3-2.3 3.6-1.4.5-3-.2-3.8-1.4-.8-1.2-.6-2.9.4-3.9 1-.9 2.5-1.1 3.7-.4v-3c-2.3-.6-4.9 0-6.4 1.8-1.5 1.9-1.5 4.6-.2 6.5 1.4 1.9 3.8 2.8 6.1 2.3 2.3-.5 4.1-2.4 4.5-4.8.1-.4.1-.7.1-1.1V8c1 .8 2.2 1.3 3.5 1.5V6.5c-1.5-.2-2.8-1-3.6-2.2-.2-.3-.3-.6-.4-1H12.5z" fill="#69C9D0" transform="translate(0.5, -0.5)" />
    <path d="M12.5 3v10.5c0 1.6-.9 3-2.3 3.6-1.4.5-3-.2-3.8-1.4-.8-1.2-.6-2.9.4-3.9 1-.9 2.5-1.1 3.7-.4v-3c-2.3-.6-4.9 0-6.4 1.8-1.5 1.9-1.5 4.6-.2 6.5 1.4 1.9 3.8 2.8 6.1 2.3 2.3-.5 4.1-2.4 4.5-4.8.1-.4.1-.7.1-1.1V8c1 .8 2.2 1.3 3.5 1.5V6.5c-1.5-.2-2.8-1-3.6-2.2-.2-.3-.3-.6-.4-1H12.5z" fill="#FFF" />
  </svg>
);

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Left Column - Contact Details */}
        <div className={styles.leftColumn}>
          <h2 className={styles.heading}>Ready to Start Your Project?</h2>

          <div className={styles.contactBlock}>
            <h3 className={styles.contactTitle}>PHONE</h3>
            <p className={styles.contactText}>+966 54 979 9468</p>
          </div>

          <div className={styles.contactBlock}>
            <h3 className={styles.contactTitle}>EMAIL</h3>
            <p className={styles.contactText}>NestedUnited@Gmail.com</p>
          </div>

          <div className={styles.contactBlock}>
            <h3 className={styles.contactTitle}>SOCIAL</h3>
            <div className={styles.socialList}>
              <a href="https://www.instagram.com/nestedunited" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <div className={styles.socialIcon}>
                  <InstagramIcon />
                </div>
                <span className={styles.socialText}>Instagram</span>
              </a>
              <a href="https://www.linkedin.com/company/nested-united/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <div className={styles.socialIcon}>
                  <LinkedInIcon />
                </div>
                <span className={styles.socialText}>LinkedIn</span>
              </a>
              <a href="https://www.tiktok.com/@nested.united" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <div className={styles.socialIcon}>
                  <TikTokIcon />
                </div>
                <span className={styles.socialText}>TikTok</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column - Collage */}
        <div className={styles.rightColumn}>
          {/* Abstract background shapes behind the hand */}
          <IconCollage className={styles.footerCollage} />

          {/* Hand holding phone */}
          <div className={styles.handImageWrapper}>
            <Image
              src="/ASSETS/pics/hand.png"
              alt="Customer Service"
              fill
              className={styles.handImage}
            />
          </div>
        </div>
      </div>

    </footer>
  );
}
