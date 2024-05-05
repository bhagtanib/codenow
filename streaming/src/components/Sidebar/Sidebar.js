import ProgressBar from "../ProgressBar/ProgressBar";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const percentage = 65;
  return (
    <div className={styles.container}>
      <p className={styles.item}>
        <p>Dashboard </p>{" "}
      </p>
      {/* <div className={`${styles.item}`}>
        <p>Practice </p>{" "}
      </div> */}

      <div className={`${styles.item} ${styles.statsContainer}`}>
        <p> Stats </p>
        <div className={styles.allStats}>
          <div className={styles.stat}>
            <div className={styles.statsTop}>
              <span>Easy</span>
              <span> 6 / 19</span>
            </div>
            <ProgressBar percentage={percentage} />
          </div>
          <div className={styles.stat}>
            <div className={styles.statsTop}>
              <span>Medium</span>
              <span> 6 / 19</span>
            </div>
            <ProgressBar percentage={percentage} />
          </div>
          <div className={styles.stat}>
            <div className={styles.statsTop}>
              <span>Hard</span>
              <span> 6 / 19</span>
            </div>
            <ProgressBar percentage={percentage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
