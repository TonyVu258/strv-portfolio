import styles from './footer.module.scss'
import CopyRight from '../Header/MenuItem/CopyRight'


function FooterNav() {
    return (
        <nav className={styles.footerNav}>
            <button className={styles.backToTopBtn}>
                <div className={styles.btnText}><svg fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fillRule="evenodd" clipRule="evenodd" d="M11.2396 6.99425 6.58589 2.34052 7.99896.92517l7.06694 7.06695-.0005.00056.0044.00446-7.06126 7.07266-1.41421-1.4142 4.65307-4.66055-9.02388.00363-.0445.00002-.00081-2.00081.0445-.00002.00041 1.00041-.0004-1.00041 9.01688-.00362Z" fill="currentColor"></path></svg>Back to top</div>
            </button>
            <CopyRight type={'footer'} />
        </nav>
    )
}

export default FooterNav