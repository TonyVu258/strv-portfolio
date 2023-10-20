import styles from '../header.module.scss'

function Logo() {
  return (
        <div className={`${styles.item} ${styles.logo}`}>
            <a href='/' aria-label='strv' className={styles.wrapper}><span/></a>
        </div>
    )
}

export default Logo