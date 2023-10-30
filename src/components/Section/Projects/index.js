import Link from "next/link";
import styles from "./project.module.scss";

function ProjectSection() {
  return (
    <div className={styles.projectSection}>
      <div className={styles.projectBox}>
        <h2 className={styles.projectBoxContent}>
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" className={styles.projectBoxSVG}><path fill-rule="evenodd" clip-rule="evenodd" d="M11.2396 6.99425 6.58589 2.34052 7.99896.92517l7.06694 7.06695-.0005.00056.0044.00446-7.06126 7.07266-1.41421-1.4142 4.65307-4.66055-9.02388.00363-.0445.00002-.00081-2.00081.0445-.00002.00041 1.00041-.0004-1.00041 9.01688-.00362Z" fill="currentColor"></path></svg>
        Selected projects
        </h2>
      </div>
      
      <div className={styles.project_three}></div>
      <div className={styles.project_four}></div>
      <div className={styles.project_five}></div>
      <div className={styles.project_six}></div>
    </div>
  );
}

export default ProjectSection;
