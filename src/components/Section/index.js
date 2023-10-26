import styles from './section.module.scss'

function Section({ children, sectionClass }) {
    return (
      sectionClass === 'mainSection' ? (
        <main className={styles.mainSection}>
          {children}
        </main>
      ) : (
        <section className={styles[sectionClass]}>
          {children}
        </section>
      )
    );
  }
  

export default Section