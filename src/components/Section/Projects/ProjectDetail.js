import styles from "./project.module.scss";

function ProjectDetail({index, dataImage1, dataImage2, title, subtitle, projectLink}) {
  return (
    <div className={`styles.project_${index}`}>
      <figure className={`styles.project_${index}_box`}>
        <Link href={projectLink? projectLink: '/'} className={`styles.project_${index}_link`}>
          <div className={`styles.project_${index}_img`}>
            <img
              src={dataImage1}
              aria-hidden="true"
              alt=""
            />
            <img
              aria-hidden="true"
              alt=""
              src={dataImage2}
            />
          </div>
        </Link>
        <figcaption className={`styles.project_${index}_caption`}>
          <Link href={projectLink? projectLink: '/'} className={`styles.project_${index}_detail`}>
            <h3 className={`styles.project_${index}_title`}>{title}</h3>
            <span className={`styles.project_${index}_note`}>
              {subtitle}
            </span>
          </Link>
        </figcaption>
      </figure>
    </div>
  );
}

export default ProjectDetail;
