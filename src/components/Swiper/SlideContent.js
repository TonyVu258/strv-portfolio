import styles from './swiper.module.scss'

function SlideContent({ bgSrc, imgAlt, imgSrc, figcaption, ratio}) {
  return (
    <figure>
        <div className={styles.slideBox} style={{'aspectRatio': `${ratio}`}}>
            <div className={styles.slideBg}>
                <img src={bgSrc} aria-hidden="true" alt="" className={styles.bgImg} />
            </div>
            <div className={styles.slideImgBox}>
                <img src={imgSrc} aria-hidden="true" alt={imgAlt} className={styles.slideImg} decoding="async" data-nimg="intrinsic"/>
            </div>
        </div>
        <figcaption className={styles.slideFigcaption}>{figcaption}</figcaption>
    </figure>
  )
}

export default SlideContent