import Link from "next/link";
import styles from "./project.module.scss";

function ProjectDetail({
  dataImage1,
  dataImage2,
  dataImage3,
  imgAlt,
  title,
  subtitle,
  projectLink,
  project,
  ratio = ''
}) {
  return (
    <div className={styles[`project_${project}`]} style={ratio ? {'aspectRatio': `${ratio}`}: null}> 
      <figure>
        <Link href={projectLink ? projectLink : "/"} className={styles.project_link}>
          <div className={styles.project_img}>
            <div className={styles[`project_${project}_data`]}>
              <img src={dataImage1} aria-hidden="true" alt="" className={styles.project_img_1}/>
              <img aria-hidden="true" alt="" src={dataImage2} className={styles.project_img_2}/>
              <img src={dataImage3} alt={imgAlt} className={styles.project_img_3}/>
            </div>
          </div>
        </Link>
        <figcaption className={styles.project_caption}>
          <Link href={projectLink ? projectLink : "/"} className={styles.project_detail}>
            <h3 className={styles.project_title}>{title}</h3>
          </Link>
            {subtitle && <span className={styles.project_note}>{subtitle}</span>}
        </figcaption>
      </figure>
    </div>
  );
}

export default ProjectDetail;
