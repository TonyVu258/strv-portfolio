import styles from './layout.module.scss'

function Layout ({ children }) {
  return (
    <div id='__next'>
      <div>
        <div className={styles.layout} />
        {children}
      </div>
    </div>
  )
}

export default Layout
