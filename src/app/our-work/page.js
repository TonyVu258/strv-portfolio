import Button from '@/components/Button'
import Filter from '@/components/Filter'
import FilterProject from '@/components/Filter/FilterProject'
import Footer from '@/components/Footer'
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
            <Section sectionClass={'filterProjectSection'}>
              <FilterProject />
            </Section>
            <Button type={'red'} onClick={'showMore'} content={'load more projects'}/>
        </Section>
        <Footer subscribe={false}/>
    </Layout>
  )
}

export default OurWork