'use client'
import { useRef, useState } from 'react'
import styles from './reel.module.scss'

function ReelSection() {
  const [isPlay, setPlay] = useState(true);
  const videoRef = useRef(null);
  const videoPlay = () => {
    if (isPlay) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  }

  return (
    <div>
      <div className={styles.reelSectionItem}>
        <button className={styles.reelVideoBtn} >
          <video autoPlay playsInline preload='auto' muted loop className={styles.reelVideo} src='https://stream.mux.com/SQpThJ2WUvwb9VqzenyjcqRSGII84eou/high.mp4' ref={videoRef} />
          <div className={styles.reelVideoItem} onClick={() => videoPlay()}>
            <div className={styles.reelPlayBtnBox}>
              <div className={styles.reelPlayBtn}>
                {isPlay ? (<svg fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" className={styles.reelSVG}><path d="M16 8 4 14.9282V1.0718L16 8Z" fill="currentColor"></path></svg>) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className={styles.reelSVG} viewBox="0 0 16 16">
                    <path d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5z" />
                  </svg>
                )}
              </div>
            </div>
          </div>
        </button>
        <div className={styles.reelVideoContent}>
          <span className={styles.reelVideoTitle} >Play — STRV Showreel &rsquo;22</span>
        </div>
      </div>
    </div>
  )
}

export default ReelSection