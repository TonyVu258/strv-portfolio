import Link from "next/link";
import styles from "./about.module.scss";

function AboutSection() {
  return (
    <div className={styles.aboutSection}>
      <p className={styles.aboutContent}>
        <span className={styles.aboutItem_hello}>Hello!</span>
        STRV is a software design and engineering team that&rsquo;s been learning and
        creating since 2004.&nbsp;
        <div className={styles.aboutVideoSize}>
          <div className={styles.aboutVideoItem}>
            <div className={styles.aboutVideoBg}>
              <video
                autoPlay
                playsInline
                preload="auto"
                loop
                
                src="https://www.datocms-assets.com/57452/1639681351-home-intro-looper.mp4"
              />
              <div className={styles.aboutVideo}/>
            </div>
          </div>
        </div>
        &nbsp;Our vision has always been simple: 
        <span className={styles.aboutItem_red}>&nbsp;We want to do top work.</span>
        &nbsp;And today, with a team of 190 experts that continue striving for more,
        we&rsquo;re still as ready as ever to go the 
        <Link href="/" className={styles.aboutItem_underline}>
        &nbsp;extra mile
          <span className={styles.aboutItem_sup}>&nbsp;(view services)</span>
        </Link>
        &nbsp;for our craft,&nbsp;
        <Link href="/" className={styles.aboutItem_underline}>
          our partners
          <span className={styles.aboutItem_sup}>&nbsp;(view our work)</span>
        </Link>
        &nbsp;and each other.
      </p>
      <div className={styles.aboutBtns}>
        <Link href='/' className={styles.aboutContactBtn}>
            <div className={styles.aboutBtnContent}>
                Let&rsquo;s talk
            <svg fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" className={styles.aboutBtnSVG}><path fill-rule="evenodd" clip-rule="evenodd" d="M11.2396 6.99425 6.58589 2.34052 7.99896.92517l7.06694 7.06695-.0005.00056.0044.00446-7.06126 7.07266-1.41421-1.4142 4.65307-4.66055-9.02388.00363-.0445.00002-.00081-2.00081.0445-.00002.00041 1.00041-.0004-1.00041 9.01688-.00362Z" fill="currentColor"></path></svg>
            </div>
        </Link>
        <Link href='/' className={styles.aboutWhyUsBtn}>
            <div className={styles.aboutBtnContent}>
                Why STRV?
            <svg fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" className={styles.aboutBtnSVG}><path fill-rule="evenodd" clip-rule="evenodd" d="M11.2396 6.99425 6.58589 2.34052 7.99896.92517l7.06694 7.06695-.0005.00056.0044.00446-7.06126 7.07266-1.41421-1.4142 4.65307-4.66055-9.02388.00363-.0445.00002-.00081-2.00081.0445-.00002.00041 1.00041-.0004-1.00041 9.01688-.00362Z" fill="currentColor"></path></svg>
            </div>
        </Link>
      </div>
    </div>
  );
}

export default AboutSection;
