import Link from 'next/link'
import styles from './footer.module.scss'
import FooterNav from './FooterNav'

function Footer({ subscribe = true }) {
    return (
        <footer className={styles.footerSection}>
            <div className={styles.footerBox}>
                <h2 className={styles.footerTitle}>
                    Got a project?<br />
                    <Link href={'/'} className={styles.footerTitleLink}>
                        <svg fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" className={styles.footerSVG}><path fillRule="evenodd" clipRule="evenodd" d="M11.2396 6.99425 6.58589 2.34052 7.99896.92517l7.06694 7.06695-.0005.00056.0044.00446-7.06126 7.07266-1.41421-1.4142 4.65307-4.66055-9.02388.00363-.0445.00002-.00081-2.00081.0445-.00002.00041 1.00041-.0004-1.00041 9.01688-.00362Z" fill="currentColor"></path></svg>
                        Let&rsquo;s talk <span>(WE&rsquo;RE READY!)</span>
                    </Link>
                </h2>
            </div>
            {subscribe && (
                <div className={styles.footerSubscribe}>
                    <div className={styles.subscribeBox}>
                        <span className={styles.subscribeTitle}>
                            Follow&nbsp;
                            <Link target='_blank' rel='noopener noreferrer' href={'/'} className={styles.subscribeLink}>
                                @STRVCOM
                                <span className={styles.subscribeIcon}>(<svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={styles.subscribeSVG}><path fillRule="evenodd" clipRule="evenodd" d="M5 2h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3ZM0 5a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v6a5 5 0 0 1-5 5H5a5 5 0 0 1-5-5V5Zm13-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6 8c0 1.101.899 2 2 2s2-.899 2-2-.899-2-2-2-2 .899-2 2ZM4 8c0 2.206 1.794 4 4 4s4-1.794 4-4-1.794-4-4-4-4 1.794-4 4Z" fill="currentColor"></path></svg>)</span>
                            </Link>
                        </span>
                    </div>
                    <div className={styles.subscribeBox}>
                        <span className={styles.subscribeTitle}>
                            Go next:&nbsp;
                            <Link target='_blank' rel='noopener noreferrer' href={'/'} className={styles.subscribeLink}>Our work</Link>
                        </span>
                    </div>
                </div>
            )}
            <FooterNav />
        </footer>
    )
}

export default Footer