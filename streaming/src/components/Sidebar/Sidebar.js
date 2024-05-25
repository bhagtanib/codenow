import ProgressBar from "../ProgressBar/ProgressBar";
import styles from "./Sidebar.module.css";

const SidebarItem = ({ details }) => {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.itemLeft}>
        <img width="36" height="36" src={details.image} alt="ninja" />{" "}
      </div>
      <div className={styles.itemRight}>
        <h2>{details.heading}</h2>
        <p>{details.description}</p>
      </div>
    </div>
  );
};

const Info = () => {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.itemLeft}>
        <img
          width="30"
          height="30"
          src="https://img.icons8.com/color/48/xbox-b--v1.png"
          alt="xbox-b--v1"
        />
      </div>
      <div className={styles.itemRight}>
        <h2>Bhavesh Bhagtani</h2>
        <p>View Dashboard</p>
      </div>
    </div>
  );
};
const Sidebar = () => {
  const sideOptions = [
    {
      heading: "Practice",
      description:
        "Sharpen your coding skills with exercises tailored to your level.",
      image: "https://img.icons8.com/glyph-neue/64/FFFFFF/ninja.png",
    },
    {
      heading: "Categories",
      description:
        "Explore a variety of coding challenges matched to your interests.",
      image: "https://img.icons8.com/ios-filled/100/FFFFFF/categorize.png",
    },
    {
      heading: "Playlist",
      description:
        "Discover LeetCode gems curated to elevate your interview performance.",
      image: "https://img.icons8.com/ios/100/FFFFFF/bulleted-list.png",
    },

    {
      heading: "Top Employers",
      description:
        "Unlock  access to interview questions asked by top-tier tech companies.",
      image: "https://img.icons8.com/wired/64/FFFFFF/company.png",
    },
  ];
  return (
    <div className={styles.sidebarContainer}>
      <Info />
      {sideOptions.map((item, index) => (
        <SidebarItem key={index} details={item} />
      ))}
    </div>
  );
};

// const Sidebar = () => {
//   const percentage = 65;
//   return (
//     <div className={styles.container}>
//       <p className={styles.item}>
//         <p>Dashboard </p>{" "}
//       </p>
//       {/* <div className={`${styles.item}`}>
//         <p>Practice </p>{" "}
//       </div> */}

//       <div className={`${styles.item} ${styles.statsContainer}`}>
//         <p> Stats </p>
//         <div className={styles.allStats}>
//           <div className={styles.stat}>
//             <div className={styles.statsTop}>
//               <span>Easy</span>
//               <span> 6 / 19</span>
//             </div>
//             <ProgressBar percentage={percentage} />
//           </div>
//           <div className={styles.stat}>
//             <div className={styles.statsTop}>
//               <span>Medium</span>
//               <span> 6 / 19</span>
//             </div>
//             <ProgressBar percentage={percentage} />
//           </div>
//           <div className={styles.stat}>
//             <div className={styles.statsTop}>
//               <span>Hard</span>
//               <span> 6 / 19</span>
//             </div>
//             <ProgressBar percentage={percentage} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

export default Sidebar;
