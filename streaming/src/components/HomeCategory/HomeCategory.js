import styles from "./HomeCategory.module.css";

const HomeCategory = () => {
  return (
    <div className={styles.container}>
      {Array(4)
        .fill("Data Structure")
        .map((item) => (
          <span className={styles.item}> {item}</span>
        ))}
    </div>
  );
};

export default HomeCategory;
