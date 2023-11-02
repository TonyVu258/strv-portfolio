import styles from './feedback.module.scss'

function FeedbackContent ({ date , blockquote , imgAlt, imgSrc, customerName, customerTitle}) {
  return (
    <figure>
      <span className={styles.feedbackContent}>
        <svg
          width='16'
          height='16'
          viewBox='0 0 16 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={styles.feedbackSVG}
        >
          <path
            d='M6.31438 4.41071C4.60201 4.73214 3.74582 5.80357 3.74582 7.67857L6.31438 7.67857L6.31438 14L0 14L-4.82386e-07 8.48214C-8.33639e-07 4.46429 2.08695 2.26786 6.31438 2L6.31438 4.41071ZM16 4.41071C14.2876 4.73214 13.4314 5.80357 13.4314 7.67857L16 7.67857L16 14L9.68562 14L9.68562 8.48214C9.68562 4.46429 11.7726 2.26786 16 2L16 4.41071Z'
            fill='currentColor'
          />
        </svg>
        {date}
      </span>
      <blockquote className={styles.feedbackBlockquote}>
        {blockquote}
      </blockquote>
      <div className={styles.feedbackCustomer}>
        <span className={styles.feedbackCustomerImg} >
            <div>
            <img alt={imgAlt} src={imgSrc} decoding="async" data-nimg="fill" className={styles.feedbackImg}/>
            </div>
        </span>
        <div className={styles.feedbackCustomerData}>
            <span className={styles.feedbackCustomerName}>{customerName}</span>
            <span className={styles.feedbackCustomerName}>{customerTitle}</span>
        </div>
      </div>
      <div className={styles.feedbackRedUnderline} />
    </figure>
  )
}

export default FeedbackContent
