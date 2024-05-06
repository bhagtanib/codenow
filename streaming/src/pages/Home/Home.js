import Featured from "../../components/Featured/Featured";
import HomeListHeader from "../../components/HomeListHeader/HomeListHeader";
import HomeProblems from "../../components/HomeProblems/HomeProblems";
import ProblemsTable from "../../components/ProblemsTable/ProblemsTable";
import Sidebar from "../../components/Sidebar/Sidebar";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Sidebar />
      </div>
      <div className={styles.right}>
        <HomeListHeader />
        <Featured />
        <ProblemsTable />
      </div>
    </div>
  );
};

export default Home;
