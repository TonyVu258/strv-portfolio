import Marquee from "react-fast-marquee";
import styles from "./marquee.module.scss"
import MarqueeImage from "./MarqueeImage";

function MarqueeSection( direction = left) {
    return (
        <Marquee
            speed={180}
            gradient
            className={styles.marqueeSection}
            gradientColor={[0, 0, 0]}
            direction = {direction}
        >
            <div className={styles.marqueeBox}>
                <MarqueeImage imgAlt={"The Athletic Logo"} imgSrc={"https://www.datocms-assets.com/57452/1637226487-the-athletic-logo.svg"} />
                <MarqueeImage imgAlt={"Autodesk Logo"} imgSrc={"https://www.datocms-assets.com/57452/1637226572-autodesk-logo.svg"} />
                <MarqueeImage imgAlt={"Barnes & Noble Logo"} imgSrc={"https://www.datocms-assets.com/57452/1637226647-barnes-noble-logo.svg"} />
                <MarqueeImage imgAlt={"ClassDojo Logo"} imgSrc={"https://www.datocms-assets.com/57452/1637237336-classdogo-logo.svg"} />
                <MarqueeImage imgAlt={"Microsoft Logo"} imgSrc={"https://www.datocms-assets.com/57452/1637226304-microsoft-logo.svg"} />
                <MarqueeImage imgAlt={"Barry's Logo"} imgSrc={"https://www.datocms-assets.com/57452/1637227230-barrys-logo.svg"} />
                <MarqueeImage imgAlt={"MedMen Logo"} imgSrc={"https://www.datocms-assets.com/57452/1637226826-medmen-logo.svg"} />
                <MarqueeImage imgAlt={"Minted Logo"} imgSrc={"https://www.datocms-assets.com/57452/1637226906-minted-logo.svg"} />
                <MarqueeImage imgAlt={"Philz Coffee Logo"} imgSrc={"https://www.datocms-assets.com/57452/1637227012-philz-coffee-logo.svg"} />
            </div>
            <div className={styles.marqueeBox}>
            <MarqueeImage imgAlt={"The Athletic Logo"} imgSrc={"https://www.datocms-assets.com/57452/1637226487-the-athletic-logo.svg"} />
                <MarqueeImage imgAlt={"Autodesk Logo"} imgSrc={"https://www.datocms-assets.com/57452/1637226572-autodesk-logo.svg"} />
                <MarqueeImage imgAlt={"Barnes & Noble Logo"} imgSrc={"https://www.datocms-assets.com/57452/1637226647-barnes-noble-logo.svg"} />
                <MarqueeImage imgAlt={"ClassDojo Logo"} imgSrc={"https://www.datocms-assets.com/57452/1637237336-classdogo-logo.svg"} />
                <MarqueeImage imgAlt={"Microsoft Logo"} imgSrc={"https://www.datocms-assets.com/57452/1637226304-microsoft-logo.svg"} />
                <MarqueeImage imgAlt={"Barry's Logo"} imgSrc={"https://www.datocms-assets.com/57452/1637227230-barrys-logo.svg"} />
                <MarqueeImage imgAlt={"MedMen Logo"} imgSrc={"https://www.datocms-assets.com/57452/1637226826-medmen-logo.svg"} />
                <MarqueeImage imgAlt={"Minted Logo"} imgSrc={"https://www.datocms-assets.com/57452/1637226906-minted-logo.svg"} />
                <MarqueeImage imgAlt={"Philz Coffee Logo"} imgSrc={"https://www.datocms-assets.com/57452/1637227012-philz-coffee-logo.svg"} />
            </div>
        </Marquee>
    )
}

export default MarqueeSection