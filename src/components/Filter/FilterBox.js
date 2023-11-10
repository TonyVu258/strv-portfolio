import styles from './filter.module.scss'

function FilterBox({title, dataFilter}) {
    const svgActive = false ? `${styles.filterSVG} ${styles.top}`: `${styles.filterSVG} ${styles.bottom}`;
    const optionActive = false ? `${styles.filterSelect} ${styles.isActive}`: styles.filterSelect;
    return (
        <div className={styles.filter}>
            {false && (<div className={styles.filterActive}></div>)}
            <div className={styles.filterBox}>
                <button type='button' className={styles.filterBtn}>
                    <div className={styles.filterData}>
                        <span>{title}</span>
                        <svg fill="none" xmlns="http://www.w3.org/2000/svg" height="12" width="12" viewBox="0 0 12 12" className={svgActive}><title>Chevron Right</title><path d="M3.75 10.5 8.25 6l-4.5-4.5" stroke="currentColor" strokeWidth="2"></path></svg>
                    </div>
                    {true && <hr/>}
                </button>
            </div>
            <ul className={optionActive}>
                {dataFilter.map((data, index) => (
                    <li className={styles.filterOption} key={index}>
                        <label className={styles.filterLabel}>
                            <button type='button' role='checkbox' aria-checked='false' value='on' id={data.id} className={styles.optionBtn}/>
                            {data}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FilterBox