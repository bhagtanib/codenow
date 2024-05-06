import styles from "./Featured.module.css";

const Featured = () => {
  const featuredlist = [
    "Data Structure",
    "Algoritms",
    "Graphs",
    "Dynamic Programming",
  ];
  return (
    <>
      <p># Featured</p>
      <div className={styles.container}>
        {featuredlist.map((item) => (
          <span className={styles.item}>{item}</span>
        ))}
      </div>
    </>
  );
};

export default Featured;
