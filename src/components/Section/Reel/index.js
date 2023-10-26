import styles from './reel.module.scss'

function ReelSection() {
  return (
    <div>
        <div className={styles.reelSectionItem}>
            <button className={styles.reelVideoBtn} >
                <video autoPlay playsInline preload='auto' muted loop className={styles.reelVideo} src='https://stream.mux.com/SQpThJ2WUvwb9VqzenyjcqRSGII84eou/high.mp4'/>
                <div className={styles.reelVideoItem} />
            </button>
            <div className={styles.reelVideoContent}>
                <span className={styles.reelVideoTitle} >Play — STRV Showreel ’22</span>
            </div>
        </div>
    </div>
  )
}

export default ReelSection