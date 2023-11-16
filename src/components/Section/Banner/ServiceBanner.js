import styles from "./banner.module.scss";
import Section from '@/components/Section'


function ServiceBanner() {
    return (
        <Section sectionClass={'serviceBannerSection'}>
            <span className={styles.bannerMobile}>
                <span className={styles.bannerSection}>
                    <span className={styles.bannerBox}>
                        <span className={styles.bannerText}>
                            <span className={styles.bannerData}>
                                <span className={styles.textClear}>
                                    We build
                                </span>
                            </span>
                        </span>
                        <br />
                        <span className={styles.bannerText}>
                            <span className={`${styles.bannerDataMobile} ${styles.bannerDesktop}`}>
                                Software&nbsp;
                                <span className={styles.workImgBox}>
                                    <svg width="23" height="96" viewBox="0 0 23 96" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.workSVG}><path d="M22.1538 92.6733C11.1716 79.7465 5.68047 64.9188 5.68047 48.095c0-9.4099 1.60947-17.9643 4.82843-25.4732 3.3136-7.5089 7.1952-13.97229 11.6449-19.29506L17.8935 0C5.9645 14.5426 0 30.5109 0 48.095 0 65.4891 5.9645 81.4574 17.8935 96l4.2603-3.3267Z" fill="currentColor"></path></svg>
                                    <span className={styles.workImgLogo}>
                                        <div style={{ "display": "inline-block", "max-width": "100%", "overflow": "hidden", "position": "relative", "box-sizing": "border-box", "margin": "0px" }}>
                                            <div style={{ "box-sizing": "border-box", "display": "block", "max-width": "100%" }}>
                                                <img aria-hidden='true' src={'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMzIiBoZWlnaHQ9IjYwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIvPg=='} className={styles.workImgBg} />
                                            </div>
                                            <img src={'https://www.datocms-assets.com/57452/1637226304-microsoft-logo.svg'} decoding="async" className={styles.workImg} />
                                        </div>
                                    </span>
                                    <svg width="23" height="96" viewBox="0 0 23 96" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.workSVG}><path d="M.84615 92.6733C11.8284 79.7465 17.3195 64.9188 17.3195 48.095c0-9.4099-1.6094-17.9643-4.8284-25.4732C9.17752 15.1129 5.29586 8.64951.84615 3.32674L5.10651 0C17.0355 14.5426 23 30.5109 23 48.095 23 65.4891 17.0355 81.4574 5.10651 96L.84615 92.6733Z" fill="currentColor"></path></svg>
                                </span>
                            </span>
                        </span>
                        <br />
                        <span className={styles.bannerText}>
                            <span className={styles.bannerData}>
                                Solutions
                            </span>
                        </span>
                        <br />
                    </span>
                </span>
            </span>
            <span className={`${styles.bannerDesktop} ${styles.bannerDataDesktop}`}>
                <span className={styles.bannerSection}>
                    <span className={styles.bannerBox}>
                        <span className={styles.bannerText}>
                            <span className={styles.bannerData}>
                                <span className={styles.textClear}>
                                    We build&nbsp;
                                </span>
                                Software
                            </span>
                        </span>
                        <br />
                        <span className={styles.bannerText}>
                            <span className={styles.bannerData}>
                                <span className={styles.workImgBox}>
                                    <svg width="23" height="96" viewBox="0 0 23 96" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.workSVG}><path d="M22.1538 92.6733C11.1716 79.7465 5.68047 64.9188 5.68047 48.095c0-9.4099 1.60947-17.9643 4.82843-25.4732 3.3136-7.5089 7.1952-13.97229 11.6449-19.29506L17.8935 0C5.9645 14.5426 0 30.5109 0 48.095 0 65.4891 5.9645 81.4574 17.8935 96l4.2603-3.3267Z" fill="currentColor"></path></svg>
                                    <span className={styles.workImgLogo}>
                                        <div style={{ "display": "inline-block", "max-width": "100%", "overflow": "hidden", "position": "relative", "box-sizing": "border-box", "margin": "0px" }}>
                                            <div style={{ "box-sizing": "border-box", "display": "block", "max-width": "100%" }}>
                                                <img aria-hidden='true' src={'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMzIiBoZWlnaHQ9IjYwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIvPg=='} className={styles.workImgBg} />
                                            </div>
                                            <img src={'https://www.datocms-assets.com/57452/1637226304-microsoft-logo.svg'} decoding="async" className={styles.workImg} />
                                        </div>
                                    </span>
                                    <svg width="23" height="96" viewBox="0 0 23 96" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.workSVG}><path d="M.84615 92.6733C11.8284 79.7465 17.3195 64.9188 17.3195 48.095c0-9.4099-1.6094-17.9643-4.8284-25.4732C9.17752 15.1129 5.29586 8.64951.84615 3.32674L5.10651 0C17.0355 14.5426 23 30.5109 23 48.095 23 65.4891 17.0355 81.4574 5.10651 96L.84615 92.6733Z" fill="currentColor"></path></svg>
                                </span>
                                &nbsp;Solutions
                            </span>
                        </span>
                        <br />
                    </span>
                </span>
            </span>
        </Section>
    )
}

export default ServiceBanner