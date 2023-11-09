import Link from 'next/link'
import styles from './feedback.module.scss'
import FeedbackContent from './FeedbackContent'

function FeedbackSection() {
  return (
    <div className={styles.feedbackSection}>
        <div className={styles.feedbackBox}>
            <h2 className={styles.feedbackTitle}>Clients Say</h2>
            <div className={styles.feedbackSubTitle}>
            (Selected testimonials from <Link href="/" target="_blank" rel="noopener noreferrer" className={styles.feedbackTitleLink}>Clutch</Link>↗ and <Link href="/" className={styles.feedbackTitleLink}>our work</Link>)
            </div>
            <FeedbackContent date={'Sep 1, 2016'} blockquote='We needed more capacity, but we didn’t just need capacity. We needed real developers, real engineers who could work closely with our engineers to actually be a team. So we were really happy when we saw that process working and we saw STRV really become part of our team.' imgAlt='' imgSrc='https://www.datocms-assets.com/57452/1639664084-avatar-liam-donjpg.jpeg' customerName='Liam Don' customerTitle='Co-Founder & CTO, ClassDojo'/>
            <button className={styles.feedbackBtn}>
                <div>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.feedbackBtnSVG}><g clip-path="url(#a)" fill="currentColor"><path d="M2 3.66998v-1H0v1h2Zm-1 3H0v1h1v-1Zm3 1h1v-2H4v2Zm-4-4v3h2v-3H0Zm1 4h3v-2H1v2ZM14 12.3v1h2v-1h-2Zm1-3.00001h1v-1h-1v1Zm-3-1h-1V10.3h1V8.29999ZM16 12.3V9.29999h-2V12.3h2Zm-1-4.00001h-3V10.3h3V8.29999Z"></path><path d="m12.7173 6.33361.3336.94271 1.8854-.66719-.3336-.94272-1.8854.6672Zm-8.95731-2.5736.68478.72875.01142-.01073.01108-.01109-.70728-.70693ZM-.01812 5.93792c-.40248.37819-.42217 1.01105-.04398 1.41353.3782.40248 1.01105.42217 1.41353.04398L-.01812 5.93792ZM16.0181 10.0621c.4025-.3782.4222-1.01105.044-1.41353-.3782-.40248-1.0111-.42217-1.4136-.04398l1.3696 1.45751ZM12.24 12.24l-.6848-.7287-.0114.0107-.0111.0111.7073.7069ZM3.28271 9.66641l-.3336-.94271-1.88543.66719.33359.94271 1.88544-.66719Zm11.31999-4a7.00047 7.00047 0 0 0-1.9487-2.89689l-1.3287 1.49487a5.00059 5.00059 0 0 1 1.392 2.06922l1.8854-.6672ZM12.654 2.76952a6.99976 6.99976 0 0 0-3.10552-1.59535l-.44136 1.95069a4.9993 4.9993 0 0 1 2.21818 1.13953l1.3287-1.49487ZM9.54848 1.17417a6.99996 6.99996 0 0 0-3.48981.10307l.55572 1.92124a5.0001 5.0001 0 0 1 2.49273-.07362l.44136-1.95069Zm-3.48981.10307a6.99998 6.99998 0 0 0-3.00596 1.77584l1.41456 1.41386a5.00015 5.00015 0 0 1 2.14712-1.26846l-.55572-1.92124ZM3.07521 3.03126-.01812 5.93792l1.36955 1.45751 3.09334-2.90667-1.36956-1.4575ZM14.6485 8.60459l-3.0933 2.90671 1.3696 1.4575 3.0933-2.9067-1.3696-1.45751Zm-3.1158 2.92851a4.9992 4.9992 0 0 1-2.14711 1.2684l.55572 1.9213a6.9999 6.9999 0 0 0 3.00599-1.7759l-1.4146-1.4138Zm-2.14711 1.2684a4.99973 4.99973 0 0 1-2.49272.0737l-.44137 1.9507a7.00123 7.00123 0 0 0 3.48981-.1031l-.55572-1.9213Zm-2.49272.0737a5.00026 5.00026 0 0 1-2.21824-1.1396l-1.32866 1.4949a7.00107 7.00107 0 0 0 3.10553 1.5954l.44137-1.9507Zm-2.21824-1.1396a5.00022 5.00022 0 0 1-1.39192-2.06919l-1.88544.66719a7 7 0 0 0 1.9487 2.8969l1.32866-1.4949Z"></path></g></svg>
                    Show more feedback
                </div>
            </button>
        </div>
    </div>
  )
}

export default FeedbackSection