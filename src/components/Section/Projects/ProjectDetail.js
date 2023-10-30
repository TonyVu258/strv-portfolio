import Link from "next/link";
import styles from "./project.module.scss";

function ProjectDetail({
  index,
  dataImage1,
  dataImage2,
  dataImage3,
  imgAlt,
  title,
  subtitle,
  projectLink,
}) {
  return (
    <div className={`styles.project_${index}`}>
      <figure>
        <Link
          href={projectLink ? projectLink : "/"}
          className={`styles.project_${index}_link`}
        >
          <div className={`styles.project_img`}>
            <div className={`styles.project_img_data`}>
              <img src={dataImage1} aria-hidden="true" alt="" className={`styles.project_img_data1`}/>
              <img aria-hidden="true" alt="" src={dataImage2} className={`styles.project_img_data2`}/>
              <img src={dataImage3} alt={imgAlt} className={`styles.project_img_data3`}/>
            </div>
          </div>
        </Link>
        <figcaption className={`styles.project_${index}_caption`}>
          <Link
            href={projectLink ? projectLink : "/"}
            className={`styles.project_${index}_detail`}
          >
            <h3 className={`styles.project_${index}_title`}>{title}</h3>
            <span className={`styles.project_${index}_note`}>{subtitle}</span>
          </Link>
        </figcaption>
      </figure>
    </div>
  );
}

export default ProjectDetail;
