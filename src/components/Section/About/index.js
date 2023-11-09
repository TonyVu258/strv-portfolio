import Link from 'next/link'
import styles from './about.module.scss'
import Button from '@/components/Button'

function AboutSection () {
  return (
    <div className={styles.aboutSection}>
      <p className={styles.aboutContent}>
        <span className={styles.aboutItem_hello}>Hello!</span>
        STRV is a software design and engineering team that&rsquo;s been
        learning and creating since 2004.&nbsp;
        <div className={styles.aboutVideoSize}>
          <div className={styles.aboutVideoItem}>
            <div className={styles.aboutVideoBg}>
              <video
                autoPlay
                playsInline
                preload='auto'
                loop
                src='https://www.datocms-assets.com/57452/1639681351-home-intro-looper.mp4'
              />
              <div className={styles.aboutVideo}></div>
            </div>
          </div>
        </div>
        &nbsp;Our vision has always been simple:
        <span className={styles.aboutItem_red}>
          &nbsp;We want to do top work.
        </span>
        &nbsp;And today, with a team of 190 experts that continue striving for
        more, we&rsquo;re still as ready as ever to go the&nbsp;
        <Link href='/' className={styles.aboutItem_underline}>
         extra mile
          <span className={styles.aboutItem_sup}>&nbsp;(view services)</span>
        </Link>
        &nbsp;for our craft,&nbsp;
        <Link href='/' className={styles.aboutItem_underline}>
          our partners
          <span className={styles.aboutItem_sup}>&nbsp;(view our work)</span>
        </Link>
        &nbsp;and each other.
      </p>
      <div className={styles.aboutBtns}>
        <Button href={''} type={'red'} content={"Let's talk"} />
        <Button href={''} type={'black'} content={'Why STRV?'} />
      </div>
    </div>
  )
}

export default AboutSection
