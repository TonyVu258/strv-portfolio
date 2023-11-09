import Button from '@/components/Button'
import styles from './service.module.scss'
import Image from 'next/image'

function ServiceSection () {
  return (
    <div className={styles.serviceSection}>
      <div className={styles.serviceLeftSection}>
        <figure>
          <div className={styles.serviceLeftBox}>
            <div className={styles.serviceLeftBoxImg}>
              <img
                // className={styles.serviceLeftImg}
                alt=''
                aria-hidden='true'
                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEyMCIgaGVpZ2h0PSIxNDg4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIvPg=='
                width={'564px'}
                height={'750px'}
              />
            </div>
            <Image
              className={styles.serviceLeftImg}
              alt='Backend and Frontend Developers'
              src='/Images/about-strv.jpg'
              height={'750'}
              width={'564'}
              decoding='async'
              data-nimg='intrinsic'
            />
          </div>
        </figure>
      </div>
      <div className={styles.serviceRightSection}>
        <h2 className={styles.serviceRightTitle}>
          About <span style={{ color: 'var(--colors-red)' }}>STRV</span>
        </h2>
        <p className={styles.serviceRight_content1}>
          <span>Humble Brag </span>
          We’re proud to be able to say STRV is good people. We look for
          intelligent minds rooted in strong character and kindness.
        </p>
        <p className={styles.serviceRight_content2}>
          Our greatest success is that this remains true no matter our size
          (190+), goals (BIG) or success (not complaining). You’ll find a lot
          more about the team if you click around below. Get to know us a
          little.
        </p>
        <Button href={'/'} type={'red'} content={'Services'} />
      </div>
    </div>
  )
}

export default ServiceSection
