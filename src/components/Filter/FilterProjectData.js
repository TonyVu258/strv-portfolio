import ProjectDetail from '../Section/Projects/ProjectDetail'

const projectData = [
    {
        dataImage1: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTIwIiBoZWlnaHQ9IjE5ODAiPjwvc3ZnPg==',
        dataImage2: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoICAgRDRQLDhgQFQ0NDxENDw0NFxwZGBYfFiEdKysjGh0oKSEWJDUlKC0vMjIyGSI4PTcwPCsxMi8BCgsLDg0OHA4NHDscFhw7Oy8vLy87Oy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIAA4AGAMBIgACEQEDEQH/xAAXAAADAQAAAAAAAAAAAAAAAAAABAUD/8QAHRAAAQQCAwAAAAAAAAAAAAAAAgABAwQFERIhYf/EABYBAAMAAAAAAAAAAAAAAAAAAAMEBf/EABwRAAAGAwAAAAAAAAAAAAAAAAABAgMREgQhMf/aAAwDAQACEQMRAD8AXtTxBG7bUoJYpBNtp69Ubi/ajRQ8ZSbaGslSG8VTNODPD1xHLEXqFSxFQXuO+0IqbQJ7ps3PQ//Z',
        dataImage3: 'https://www.datocms-assets.com/57452/1681982595-default.png?dpr=0.75&fm=webp',
        imgAlt: 'The Pump',
        title: 'The Pump',
        subtitle: 'PM, DESIGN, iOS, ANDROID',
        project: 'pump',
        projectLink: ''
    },
    {
        dataImage1: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNzIwIiBoZWlnaHQ9IjE3MjAiPjwvc3ZnPg==',
        dataImage2:  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoIEA8RDRYPDiQPDRUNDhENDQ0OFxUZGBYVFhUaHysjJikoHRUiJTUlKC0vMjIyGSI4PTcwPCsxMi8BCgsLDg0OHA4OFS8cIh0vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIABgAGAMBIgACEQEDEQH/xAAZAAEAAgMAAAAAAAAAAAAAAAAABAYCAwf/xAAfEAACAgIBBQAAAAAAAAAAAAAAAQIDBGESBQYUFXH/xAAYAQACAwAAAAAAAAAAAAAAAAABAwACBP/EABgRAQADAQAAAAAAAAAAAAAAAAABAjEh/9oADAMBAAIRAxEAPwDlU5VxwkSOdb6UQr4JYq+k2GK/T8wLVhGrcPDYMaFF4rQAVMdbMqMVTFbLJXj1vtrloALRXFdxYQdclsAEKnX/2Q==',
        dataImage3: 'https://www.datocms-assets.com/57452/1693434883-1643157953-large2.jpeg?fm=webp',
        imgAlt: 'The Athletic',
        title: 'The Athletic',
        subtitle: 'DESIGN, iOS, ANDROID',
        project: 'athletic_work',
        projectLink: ''
      },
      {
        dataImage1: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNzIwIiBoZWlnaHQ9IjE3MjAiPjwvc3ZnPg==',
        dataImage2: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBhUQDggXCg0NDQ0QDQ0NDhUNDg0NFxUZGBYfFhUmHysjHR0oHRUWJDUlKC0vMjIyGSI4PTcwPCsxMi8BCgsLDg0OHA8NHS8cIhwvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIABgAGAMBIgACEQEDEQH/xAAbAAABBAMAAAAAAAAAAAAAAAAAAQIGBwMEBf/EAB0QAAICAgMBAAAAAAAAAAAAAAACAwQBMQUREkH/xAAWAQEBAQAAAAAAAAAAAAAAAAADAAH/xAAXEQADAQAAAAAAAAAAAAAAAAAAAiEB/9oADAMBAAIRAxEAPwC25p4412Nr2kfOyP3LD+dj+OmbP0ZUhpJXmRV2ByZpm6EC1KRgt1MeBePrYwIAq7CN+WvjoAAPdpH/2Q==',
        dataImage3: 'https://www.datocms-assets.com/57452/1642287399-b_n-1x1.jpg?fm=webp',
        imgAlt: 'Barnes & Noble',
        title: 'Barnes & Noble',
        subtitle: 'BOOKS, DESIGN',
        project: 'barnes_work',
        projectLink: '',
        ratio:'536 / 715'
      },
      {
        dataImage1: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNzIwIiBoZWlnaHQ9IjE3MjAiPjwvc3ZnPg==',
        dataImage2: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoSCAgLFg0XEw4ODQ0QDhINDREYFxsZGCIVIiEaHysjJh0oHRUWJDUlKC0vMjIyGSI4PTcwPCsxMi8BCgsLDg0OHBAQHDsnIig7Oy8vLzs7NTU1Ly81NTUvLy8vLy81Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIABgAGAMBIgACEQEDEQH/xAAZAAADAAMAAAAAAAAAAAAAAAAABQYBAgP/xAAgEAABBAEFAQEAAAAAAAAAAAAAAQIDBQQREhMxQSEG/8QAFgEBAQEAAAAAAAAAAAAAAAAAAwUE/8QAHBEAAQUBAQEAAAAAAAAAAAAAAgABAwQSITER/9oADAMBAAIRAxEAPwDhFXOe9NUKDErVSFPhrjSQap0UGK+Li8LV60elKoVRyon9BXO2dAPr2WHb4AsVo8sjlrjp+qOx7JzHJqo8jv8Ajg7ADZdiDXiz1ZCFnZnSawvedVMgAscQZbiIiIn+u6//2Q==',
        dataImage3: 'https://www.datocms-assets.com/57452/1642288274-micorosft-1x1.jpg?fm=webp',
        imgAlt: 'Microsoft',
        title: 'Microsoft',
        project: 'microsoft',
        subtitle: 'DESIGN, WEB',
        projectLink: ''
      }
]

function FilterProjectData() {
    return (
        <>
            {projectData.map((data, index) =>(
            <ProjectDetail 
            key={index}
            dataImage1={data.dataImage1}
            dataImage2={data.dataImage2}
            dataImage3={data.dataImage3}
            imgAlt={data.imgAlt}
            title={data.title}
            subtitle={data.subtitle}
            project = {data.project}
            projectLink={data.projectLink}
            ratio={data.ratio}
            />
          ))}
        </>
    )
}

export default FilterProjectData