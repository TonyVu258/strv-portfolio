import Button from '@/components/Button'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Layout from '@/components/Layout'
import Section from '@/components/Section'
import ServiceBanner from '@/components/Section/Banner/ServiceBanner'
import ServiceDetail from '@/components/Section/Services/ServiceDetail'
import Services from '@/components/Section/Services/Services'

function OurWork() {
  return (
    <Layout>
        <Header />
        <Section sectionClass={'mainSection'}>
            <ServiceBanner />
            <Services />
            {/* <ServiceDetail id={'123'} dataImage1={''} dataImage2={''} dataImage3={''} imgAlt={''} title={''} subtitle={''} project={''} projectLink={''} ratio={''} /> */}
            <Button type={'red'} onClick={'showMore'} content={'load more projects'}/>
        </Section>
        <Footer subscribe={false}/>
    </Layout>
  )
}

export default OurWork