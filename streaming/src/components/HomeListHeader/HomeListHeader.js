import styles from  "./HomeListHeader.module.css"

const HomeListHeader = () => {
  return (
    <div className={styles.container}>
        <span className={styles.item}> Blind 50 </span>
        <span className={styles.item}> Blind 75 </span>
        <span className={styles.item}> Blind 100 </span>
    </div>
  )
}

export default HomeListHeader