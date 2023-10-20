import Logo from './Logo'
import Navigation from './Navigation'
import styles from './header.module.scss'

function Header() {
  return (
    <div className={styles.layoutHeader}>
        <header className={`${styles.header} ${styles.headerFixed}`}>
            <div className={styles.headerGrid}>
                <Navigation position='left'/>
                <Logo/>
                <Navigation position='right'/>
            </div>
        </header>
    </div>
  )
}

export default Header