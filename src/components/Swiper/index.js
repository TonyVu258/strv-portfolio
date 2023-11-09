'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/scss/pagination'
import styles from './swiper.module.scss'
import SlideContent from './SlideContent'

const swiperData = [
  {
    bgSrc:
      'data:image/svg+xml,<svg xmlns=%27http://www.w3.org/2000/svg%27 version=%271.1%27 width=%271260%27 height=%27740%27/>',
    imgAlt: 'Product Management retrospective session',
    imgSrc:
      'https://www.strv.com/_next/static/image/src/modules/home/assets/carousel/carousel-01.042fbf3c0c55b54d00e69f9862a7d3bc.jpg',
    figcaption:
      'Kate laughing her way through another retro session with the product team',
    ratio: '1260 / 740'
  },
  {
    bgSrc:
      'data:image/svg+xml,<svg xmlns=%27http://www.w3.org/2000/svg%27 version=%271.1%27 width=%27740%27 height=%27740%27/>',
    imgAlt: 'iOS Developers discussing Swift',
    imgSrc:
      'https://www.strv.com/_next/static/image/src/modules/home/assets/carousel/carousel-02.ae80072255734ca8fff9226a57d3313b.jpg',
    figcaption:
      'CJ dropping that iOS knowledge... Or showing you the door? ',
      ratio: '740 / 740'
  },
  {
    bgSrc:
      'data:image/svg+xml,<svg xmlns=%27http://www.w3.org/2000/svg%27 version=%271.1%27 width=%27600%27 height=%27740%27/>',
    imgAlt: 'Data Science Engineers talking',
    imgSrc:
      'https://www.strv.com/_next/static/image/src/modules/home/assets/carousel/carousel-03.95a5659bd50cb1fee2568735570d2f22.jpg',
    figcaption: 'Jan debunking data science myths one by one',
    ratio: '600 / 740'
  },
  {
    bgSrc:
      'data:image/svg+xml,<svg xmlns=%27http://www.w3.org/2000/svg%27 version=%271.1%27 width=%27600%27 height=%27740%27/>',
    imgAlt: 'UX/UI Product Designers working on review',
    imgSrc:
      'https://www.strv.com/_next/static/image/src/modules/home/assets/carousel/carousel-04.6e756da79341f7cd7c8b3912f41f4166.jpg',
    figcaption: 'Marketa suggesting to move that button juuust a little',
    ratio: '600 / 740'
  },
  {
    bgSrc:
      'data:image/svg+xml,<svg xmlns=%27http://www.w3.org/2000/svg%27 version=%271.1%27 width=%271260%27 height=%27740%27/>',
    imgAlt: 'Creative Director observing the design team',
    imgSrc:
      'https://www.strv.com/_next/static/image/src/modules/home/assets/carousel/carousel-05.bf39d3dec4e1b5c5efff916e6d46e326.jpg',
    figcaption: 'Ales embodying the "I\'m always watching" energy',
    ratio: '1260 / 740'
  }
]

function SwiperSection () {
  return (
    <div className='swiperSection'>
      <Swiper
        modules={[Pagination]}
        className={styles.swiper}
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={3}
        aria-live='polite'
      >
      {swiperData.map((slide, index) => (
        <SwiperSlide
          key={index}
          className={styles.swiperSlide}
          role='group'
          aria-label={`${index+1} / 5`}
        >
          <SlideContent bgSrc={slide.bgSrc} imgSrc={slide.imgSrc} imgAlt={slide.imgAlt} figcaption={slide.figcaption} ratio={slide.ratio}/>
        </SwiperSlide>
      ))}
      </Swiper>
    </div>
  )
}

export default SwiperSection
