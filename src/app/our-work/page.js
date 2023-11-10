import Filter from '@/components/Filter'
import Header from '@/components/Header'
import Layout from '@/components/Layout'
import Section from '@/components/Section'
import WorkBanner from '@/components/Section/Banner/WorkBanner'

function OurWork() {
  return (
    <Layout>
        <Header />
        <Section sectionClass={'mainSection'}>
            <Section sectionClass={'workSection'}>
                <WorkBanner />
            </Section>
            <Filter />
        </Section>
    </Layout>
  )
}

export default OurWork