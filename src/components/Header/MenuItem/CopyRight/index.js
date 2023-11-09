import Link from 'next/link'
import styles from './copyright.module.scss'

function CopyRight({type}) {
  const leftContainer = type == 'footer' ? `${styles.footer} ${styles.footerLeft}` : styles.navigation;
  const rightContainer = type == 'footer' && styles.footerRight;
  return (
    <>
      <div className={`${styles.copyRight_left} ${leftContainer}`}>
        <span>© 2023 TONY VU</span>
        <span>ALL RIGHTS RESERVED.</span>
      </div>
      <div className={`${styles.copyRight_right} ${rightContainer}`} >
        <Link href='/' className={styles.copyRight_right_link}>Security</Link>
        <Link href='/' className={styles.copyRight_right_link}>Privacy Policy</Link>
      </div>
    </>
  )
}

export default CopyRight