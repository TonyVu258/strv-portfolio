import styles from "./banner.module.scss";

function BannerSection() {
  return (
    <span className={styles.bannerSection}>
      <span className={styles.bannerWidth}>
        <span style={{'display': 'inline-block', 'overflow': 'hidden'}}>
          <span style={{'display':'inline-block'}}>
            <span tabIndex='0' className={styles.bannerRed}>Next-Level</span>
            <span className={styles.bannerResponsive}>
              <span className={styles.bannerMobile}>
                <span className={styles.bannerWhite}>
                  Design
                  <span className={styles.banner}>&</span>
                  <span className={styles.bannerVideoSpan}>
                    <figure className={styles.bannerFigure}>
                      <div className={styles.bannerCover}>
                        <button className={styles.bannerBtn}>
                          <div className={styles.btnVideo}>
                            <div className={styles.btnVideo_relative}>
                              <video
                                autoPlay
                                playsInline
                                preload="auto"
                                muted
                                loop
                                className={styles.bannerVideo}
                                src="https://stream.mux.com/8sr8qtxjwQKZ01qk00wzrGI7tDo8soLo35/low.mp4"
                              />
                              <div className={styles.bannerVideoItem} />
                            </div>
                          </div>
                        </button>
                      </div>
                      <figcaption className={styles.bannerFigcaption}>
                        STRV-REEL ’22
                      </figcaption>
                    </figure>
                  </span>
                </span>
              </span>
              <span className={styles.bannerDesktop}>
                <span>
                  <span className={styles.bannerVideoSpan}>
                    <figure className={styles.bannerFigure}>
                      <div className={styles.bannerCover}>
                        <button className={styles.bannerBtn}>
                          <div className={styles.btnVideo}>
                            <div className={styles.btnVideo_relative}>
                              <video
                                autoPlay
                                playsInline
                                preload="auto"
                                muted
                                loop
                                className={styles.bannerVideo}
                                src="https://stream.mux.com/8sr8qtxjwQKZ01qk00wzrGI7tDo8soLo35/low.mp4"
                              />
                              <div className={styles.bannerVideoItem} />
                            </div>
                          </div>
                        </button>
                      </div>
                      <figcaption className={styles.bannerFigcaption}>
                        STRV-REEL ’22
                      </figcaption>
                    </figure>
                  </span>
                  Design<br/>& Engineering
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
    </span>
  );
}

export default BannerSection;
