import FilterProjectData from './FilterProjectData'
import styles from './filter.module.scss'


function FilterProject() {
  return (
    <div className={styles.filterProject}>
        <FilterProjectData />
    </div>
  )
}

export default FilterProject