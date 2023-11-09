import styles from "./marquee.module.scss"

function MarqueeImage({imgAlt,imgSrc}) {
  return (
    <img alt={imgAlt} src={imgSrc} className={styles.marqueeImage}/>
  )
}

export default MarqueeImage