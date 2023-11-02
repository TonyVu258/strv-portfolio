import Link from 'next/link'
import styles from './project.module.scss'
import ProjectDetail from './ProjectDetail'
import Button from '@/components/Button'

function ProjectSection() {
  return (
    <>
      <div className={styles.projectSection}>
        <div className={styles.projectBox}>
          <h2 className={styles.projectBoxContent}>
            <svg
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              viewBox='0 0 16 16'
              className={styles.projectBoxSVG}
            >
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M11.2396 6.99425 6.58589 2.34052 7.99896.92517l7.06694 7.06695-.0005.00056.0044.00446-7.06126 7.07266-1.41421-1.4142 4.65307-4.66055-9.02388.00363-.0445.00002-.00081-2.00081.0445-.00002.00041 1.00041-.0004-1.00041 9.01688-.00362Z'
                fill='currentColor'
              ></path>
            </svg>
            Selected projects
          </h2>
        </div>
        <ProjectDetail
          index={1}
          dataImage1={
            'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNzIwIiBoZWlnaHQ9IjE3MjAiPjwvc3ZnPg=='
          }
          dataImage2={
            'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoQEggSChUWGhcNDQ0NDhUNDh0OFxowGBYfFhUmHysjHSkoHRUWJDUlKC0vMjIyGSI4PTcwPCsxMi8BCgsLDg0OHBAQHDsmIiU7OzsvNTs7NTIvLy82Ly8vLy8vLzU8NS8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIABgAGAMBIgACEQEDEQH/xAAZAAEAAwEBAAAAAAAAAAAAAAAABAUGBwL/xAAdEAACAgMBAQEAAAAAAAAAAAAAAgMFAQQxIRIT/8QAGAEAAgMAAAAAAAAAAAAAAAAABQYAAwT/xAAaEQEAAgMBAAAAAAAAAAAAAAABAAIDETIi/9oADAMBAAIRAxEAPwDxJp/onCDuV/zDnw1SpD8ELfWPEefCNnUsxW9zm1hrZibgLW/zGicBgsqxnx2GpNq8+I1KG5vEgUALNTUU8XcydlaptpwAA6wbjDW6AE//2Q=='
          }
          dataImage3={
            'https://www.datocms-assets.com/57452/1639686148-barrys-1x1.jpg'
          }
          imgAlt={"Barry's X instructor posing"}
          title={"Barry's"}
          subtitle={'PM, DESIGN, iOS, ANDROID, WEB'}
          projectLink={''}
        />
        <ProjectDetail
          index={2}
          dataImage1={
            'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNzIwIiBoZWlnaHQ9IjE3MjAiPjwvc3ZnPg=='
          }
          dataImage2={
            'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoIEA8RDRYPDiQPDRUNDhENDQ0OFxUZGBYVFhUaHysjJikoHRUiJTUlKC0vMjIyGSI4PTcwPCsxMi8BCgsLDg0OHA4OFS8cIh0vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIABgAGAMBIgACEQEDEQH/xAAZAAEAAgMAAAAAAAAAAAAAAAAABAYCAwf/xAAfEAACAgIBBQAAAAAAAAAAAAAAAQIDBGESBQYUFXH/xAAYAQACAwAAAAAAAAAAAAAAAAABAwACBP/EABgRAQADAQAAAAAAAAAAAAAAAAABAjEh/9oADAMBAAIRAxEAPwDlU5VxwkSOdb6UQr4JYq+k2GK/T8wLVhGrcPDYMaFF4rQAVMdbMqMVTFbLJXj1vtrloALRXFdxYQdclsAEKnX/2Q=='
          }
          dataImage3={
            'https://www.datocms-assets.com/57452/1693434883-1643157953-large2.jpeg?fm=webp'
          }
          imgAlt={"The Athletic"}
          title={"The Athletic"}
          subtitle={'DESIGN, iOS, ANDROID'}
          projectLink={''}
        />
        <ProjectDetail
          index={3}
          dataImage1={
            'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNzIwIiBoZWlnaHQ9IjE3MjAiPjwvc3ZnPg=='
          }
          dataImage2={
            'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBhUQDggXCg0NDQ0QDQ0NDhUNDg0NFxUZGBYfFhUmHysjHR0oHRUWJDUlKC0vMjIyGSI4PTcwPCsxMi8BCgsLDg0OHA8NHS8cIhwvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIABgAGAMBIgACEQEDEQH/xAAbAAABBAMAAAAAAAAAAAAAAAAAAQIGBwMEBf/EAB0QAAICAgMBAAAAAAAAAAAAAAACAwQBMQUREkH/xAAWAQEBAQAAAAAAAAAAAAAAAAADAAH/xAAXEQADAQAAAAAAAAAAAAAAAAAAAiEB/9oADAMBAAIRAxEAPwC25p4412Nr2kfOyP3LD+dj+OmbP0ZUhpJXmRV2ByZpm6EC1KRgt1MeBePrYwIAq7CN+WvjoAAPdpH/2Q=='
          }
          dataImage3={
            'https://www.datocms-assets.com/57452/1642287399-b_n-1x1.jpg?fm=webp'
          }
          imgAlt={"Barnes & Noble"}
          title={"Barnes & Noble"}
          subtitle={''}
          projectLink={''}
        />
        <ProjectDetail
          index={4}
          dataImage1={
            'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNzIwIiBoZWlnaHQ9IjE3MjAiPjwvc3ZnPg=='
          }
          dataImage2={
            'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoSCAgLFg0XEw4ODQ0QDhINDREYFxsZGCIVIiEaHysjJh0oHRUWJDUlKC0vMjIyGSI4PTcwPCsxMi8BCgsLDg0OHBAQHDsnIig7Oy8vLzs7NTU1Ly81NTUvLy8vLy81Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIABgAGAMBIgACEQEDEQH/xAAZAAADAAMAAAAAAAAAAAAAAAAABQYBAgP/xAAgEAABBAEFAQEAAAAAAAAAAAAAAQIDBQQREhMxQSEG/8QAFgEBAQEAAAAAAAAAAAAAAAAAAwUE/8QAHBEAAQUBAQEAAAAAAAAAAAAAAgABAwQSITER/9oADAMBAAIRAxEAPwDhFXOe9NUKDErVSFPhrjSQap0UGK+Li8LV60elKoVRyon9BXO2dAPr2WHb4AsVo8sjlrjp+qOx7JzHJqo8jv8Ajg7ADZdiDXiz1ZCFnZnSawvedVMgAscQZbiIiIn+u6//2Q=='
          }
          dataImage3={
            'https://www.datocms-assets.com/57452/1642288274-micorosft-1x1.jpg?fm=webp'
          }
          imgAlt={"Microsoft"}
          title={"Microsoft"}
          subtitle={'DESIGN, WEB'}
          projectLink={''}
        />
      </div>
      <div className={styles.projectBtns}>
        <Button href={''} type={'red'} content={'More Projects'} />
        <Button href={''} type={'black'} content={'Client List'} />
      </div>
    </>
  )
}

export default ProjectSection
