import styles from './HomeSearch.module.css'

const HomeSearch = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.search}>
                <input placeholder='Two sum...'></input>
                <img src=""/> 
            </div>
        </div>
        <div className={styles.right}>
            <button className={styles.randomBtn}>Y</button>
            <button className={styles.deleteBtn}>X</button>
        </div>
    </div>
  )
}

export default HomeSearch