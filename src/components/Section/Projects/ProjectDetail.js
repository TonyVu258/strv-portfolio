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
    <div className={styles[`project_${index}`]}> {/* Use dynamic class name */}
      <figure>
        <Link href={projectLink ? projectLink : "/"} className={styles.project_link}>
          <div className={styles.project_img}>
            <div className={styles[`project_img_${index}_data`]}>
              <img src={dataImage1} aria-hidden="true" alt="" className={styles.project_img_data1}/>
              <img aria-hidden="true" alt="" src={dataImage2} className={styles.project_img_data2}/>
              <img src={dataImage3} alt={imgAlt} className={styles.project_img_data3}/>
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
