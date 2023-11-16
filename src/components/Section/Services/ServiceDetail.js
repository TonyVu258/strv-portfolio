import Link from 'next/link'
import styles from './service.module.scss'
import Section from '@/components/Section'
import ProjectDetail from '../Projects/ProjectDetail'

function ServiceDetail({ id, dataImage1, dataImage2, dataImage3, imgAlt, title ,subtitle, project, projectLink, ratio }) {
    return (
        <Section id={id} sectionClass={'serviceDetailSection'}>
            <div className={styles.serviceDetail}></div>
            <div className={styles.serviceProject}>
                <ProjectDetail
                    dataImage1={dataImage1}
                    dataImage2={dataImage2}
                    dataImage3={dataImage3}
                    imgAlt={imgAlt}
                    title={title}
                    subtitle={subtitle}
                    project={project}
                    projectLink={projectLink}
                    ratio={ratio} />
            </div>
        </Section>
    )
}

export default ServiceDetail