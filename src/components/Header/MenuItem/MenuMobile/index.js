import Link from 'next/link'
import styles from './menu_mobile.module.scss'


function MenuMobile() {
  return (
    <div className={styles.navMenuMobile}>
        <Link href='/' target='_blank' className={styles.navMenuMobile_link}><svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="m6.22099 15.2009-.02087-6.30048H3.5V6.20029h2.70012V4.40042c0-2.4295 1.50471-3.60037 3.67156-3.60037 1.03832 0 1.93062.07732 2.19012.11169v2.53873l-1.5028.00061c-1.17887 0-1.40715.56027-1.40715 1.38197v1.36724H12.5l-.9002 2.70013H9.15123v6.30048H6.21976h.00123Z" fill="currentColor"></path></svg></Link>
        <Link href='/' target='_blank' className={styles.navMenuMobile_link}><svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M3.905 2.45833c0 .80559-.6475 1.45834-1.44667 1.45834-.79916 0-1.44666-.65275-1.44666-1.45834 0-.805.6475-1.45833 1.44666-1.45833C3.2575 1 3.905 1.65333 3.905 2.45833Zm.01167 2.625H1v9.33337h2.91667V5.08333Zm4.65616 0h-2.898v9.33337h2.89859V9.51725c0-2.72417 3.51688-2.947 3.51688 0v4.89945H15V8.50692c0-4.59667-5.2045-4.42925-6.42717-2.1665V5.08333Z" fill="currentColor"></path></svg></Link>
        <Link href='/' target='_blank' className={styles.navMenuMobile_link}><svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8 0a8 8 0 0 0-2.529 15.591c.4.074.529-.174.529-.384v-1.49c-2.225.484-2.689-.944-2.689-.944-.364-.924-.888-1.17-.888-1.17-.726-.497.055-.486.055-.486.803.056 1.226.824 1.226.824.713 1.223 1.871.87 2.328.665.071-.517.279-.87.508-1.07-1.777-.203-3.645-.889-3.645-3.953 0-.874.313-1.588.824-2.148-.082-.202-.356-1.016.078-2.117 0 0 .672-.215 2.201.82A7.673 7.673 0 0 1 8 3.868c.68.004 1.365.093 2.004.27 1.527-1.035 2.198-.82 2.198-.82.435 1.102.161 1.916.079 2.117.513.56.823 1.274.823 2.148 0 3.072-1.871 3.749-3.653 3.947.287.248.549.735.549 1.481v2.196c0 .212.128.462.534.384A8.002 8.002 0 0 0 8 0Z" fill="currentColor"></path></svg></Link>
    </div>
  )
}

export default MenuMobile