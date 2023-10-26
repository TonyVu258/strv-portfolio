import Header from "@/components/Header";
import Layout from "@/components/Layout";
import Section from "@/components/Section";
import AboutSection from "@/components/Section/About";
import BannerSection from "@/components/Section/Banner";
import ReelSection from "@/components/Section/Reel";

export default function Home() {
  return (
    <Layout>
      <Header />
      <Section sectionClass={'mainSection'}>
        <Section sectionClass={'bannerSection'}>
          {/* <BannerSection /> */}
        </Section>
        <Section sectionClass={'reelSection'} id='reel'>
          {/* <ReelSection /> */}
        </Section>
        <Section sectionClass={'aboutSection'} id='reel'>
          <AboutSection />
        </Section>
      </Section>
    </Layout>
  )
}
