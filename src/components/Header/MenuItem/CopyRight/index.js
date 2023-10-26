import Link from 'next/link'
import styles from './copyright.module.scss'

function CopyRight() {
  return (
    <div className={styles.copyRight}>
      <div className={styles.copyRight_left}>
        <span>© 2023 TONY VU</span>
        <span>ALL RIGHTS RESERVED.</span>
      </div>
      <div className={styles.copyRight_right}>
        <Link href='/' className={styles.copyRight_right_link}>Security</Link>
        <Link href='/' className={styles.copyRight_right_link}>Privacy Policy</Link>
      </div>
    </div>
  )
}

export default CopyRight