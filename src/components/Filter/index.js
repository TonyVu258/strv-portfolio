import FilterBox from './FilterBox'
import styles from './filter.module.scss'

const filterData = [
    {
        title: 'All Industries',
        option: ['Fitness & Wellness', 'Sports', 'Fintech', 'Ecommerce']
    },
    {
        title: 'All Services',
        option: ['Product Management', 'Product Design', 'Backend', 'Frontend']
    }
]

function Filter() {
    return (
        <nav className={styles.navFilter}>
            <div className={styles.navFilterBox}>
                <div>
                    <span className={styles.filterSpan}>
                        {filterData.map((data, index) => (
                            <FilterBox title={data.title} dataFilter={data.option} key={index} />
                        ))}
                        <div className={styles.resetFilter}>
                            <button type='button' className={styles.resetBtn}>
                                <div className={styles.resetBtnContent}>
                                    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" className={styles.resetSVG}><path d="M2.5 7A3.5 3.5 0 1 0 6 3.5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"></path><path d="M3 3.5 6 .469V6.53L3 3.5Z" fill="currentColor"></path></svg>
                                    Reset all filters
                                </div>
                            </button>
                        </div>
                    </span>
                </div>
            </div>
            <nav className={styles.navClientBox}>
                <button className={styles.navClientBtn}>
                    <div className={styles.navClientContent}>Client Case Studies</div>
                </button>
                <button className={styles.navClientBtn}>
                    <div className={styles.navClientContent}>Client List</div>
                </button>
            </nav>
        </nav>
    )
}

export default Filter