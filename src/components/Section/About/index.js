import Link from "next/link";
import styles from "./about.module.scss";

function AboutSection() {
  return (
    <div className={styles.aboutSection}>
      <p className={styles.aboutContent}>
        <span className={styles.aboutItem_hello}>Hello!</span>
        STRV is a software design and engineering team that’s been learning and
        creating since 2004.
        <div className={styles.aboutVideoSize}>
          <div className={styles.aboutVideoItem}>
            <div className={styles.aboutVideoBg}>
              <video
                autoPlay
                playsInline
                preload="auto"
                loop
                className={styles.aboutVideo}
                src="https://www.datocms-assets.com/57452/1639681351-home-intro-looper.mp4"
              />
            </div>
          </div>
        </div>
        Our vision has always been simple:
        <span className={styles.aboutItem_red}>We want to do top work.</span>
        And today, with a team of 190 experts that continue striving for more,
        we’re still as ready as ever to go the
        <Link href="/" className={styles.aboutItem_underline}>
          extra mile
          <span className={styles.aboutItem_sup}>(view services)</span>
        </Link>
        for our craft,
        <Link href="/" className={styles.aboutItem_underline}>
          our partners
          <span className={styles.aboutItem_sup}>(view our work)</span>
        </Link>
        and each other.
      </p>
      <div>
        <Link href='/' className={styles.aboutContactBtn}>
            <div className={styles.aboutContactBtnContent}>
                Let's talk
            </div>
            <svg fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" className={styles.aboutContactBtnSVG}><path fill-rule="evenodd" clip-rule="evenodd" d="M11.2396 6.99425 6.58589 2.34052 7.99896.92517l7.06694 7.06695-.0005.00056.0044.00446-7.06126 7.07266-1.41421-1.4142 4.65307-4.66055-9.02388.00363-.0445.00002-.00081-2.00081.0445-.00002.00041 1.00041-.0004-1.00041 9.01688-.00362Z" fill="currentColor"></path></svg>
        </Link>
        <Link href='/' className={styles.aboutWhyUsBtn}>
            <div className={styles.aboutWhyUsBtnContent}>
                Why STRV?
            </div>
            <svg fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" className={styles.aboutWhyUsBtnSVG}><path fill-rule="evenodd" clip-rule="evenodd" d="M11.2396 6.99425 6.58589 2.34052 7.99896.92517l7.06694 7.06695-.0005.00056.0044.00446-7.06126 7.07266-1.41421-1.4142 4.65307-4.66055-9.02388.00363-.0445.00002-.00081-2.00081.0445-.00002.00041 1.00041-.0004-1.00041 9.01688-.00362Z" fill="currentColor"></path></svg>
        </Link>
      </div>
    </div>
  );
}

export default AboutSection;
