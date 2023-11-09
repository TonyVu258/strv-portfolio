import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import MarqueeSection from "@/components/Marquee";
import Section from "@/components/Section";
import AboutSection from "@/components/Section/About";
import BannerSection from "@/components/Section/Banner";
import FeedbackSection from "@/components/Section/Feedback";
import ProjectSection from "@/components/Section/Projects";
import ReelSection from "@/components/Section/Reel";
import ServiceSection from "@/components/Section/Services";
import SwiperSection from "@/components/Swiper";

export default function Home() {
  return (
    <Layout>
      <Header />
      <Section sectionClass={'mainSection'}>
        <Section sectionClass={'bannerSection'}>
          <BannerSection />
        </Section>
        <Section sectionClass={'reelSection'} id='reel'>
          <ReelSection />
        </Section>
        <Section sectionClass={'aboutSection'} id='reel'>
          <AboutSection />
        </Section>
        <MarqueeSection />
        <Section sectionClass={'projectSection'} id='projects'>
          <ProjectSection />
        </Section>
        <Section sectionClass={'serviceSection'} id='services'>
          <ServiceSection />
        </Section>
        <MarqueeSection direction='right' />
        <Section sectionClass={'feedbackSection'} id='feedback'>
          <FeedbackSection />
        </Section>
        <SwiperSection />
      </Section>
      <Footer/>
    </Layout>
  )
}
