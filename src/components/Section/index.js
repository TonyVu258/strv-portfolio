import styles from './section.module.scss'

function Section({ children, sectionClass, id = null }) {
    return (
      sectionClass === 'mainSection' ? (
        <main className={styles.mainSection}>
          {children}
        </main>
      ) : (
        <section className={styles[sectionClass]} id={id}>
          {children}
        </section>
      )
    );
  }
  

export default Section