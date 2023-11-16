import Link from 'next/link'
import styles from './service.module.scss'
import Section from '@/components/Section'
import services from '@/data/services'

function Services() {
    return (
        <Section sectionClass={'servicesSection'}>
            <div className={styles.servicesBox}>
                <div className={styles.servicesBoxLeft}></div>
                <div className={styles.servicesBoxRight}>
                    <nav className={styles.servicesBoxNav}>
                        {services.map((data, index) => (
                            <Link href={data.href} className={styles.servicesLink} key={index}>
                                <span className={styles.servicesTitle}>{data.title}</span>
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </Section>
    )
}

export default Services