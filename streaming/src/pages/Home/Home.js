import Featured from "../../components/Featured/Featured";
import HomeListHeader from "../../components/HomeListHeader/HomeListHeader";
import ProblemsTable from "../../components/ProblemsTable/ProblemsTable";
import Sidebar from "../../components/Sidebar/Sidebar";
import styles from "./Home.module.css";
import { initializeReduxState } from "../../util/util";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateProblems } from "../../Redux/slices";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProblems = async () => {
      console.log("Tryinggg ")
      try {
        const currentProblems = await initializeReduxState();
        dispatch(
          updateProblems({
            problems: currentProblems,
            listName: "Top 75",
            filteredProblems: currentProblems,
          })
        );
      } catch (error) {
        console.error("Error fetching problems:", error);
      }
    };

    fetchProblems();
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Sidebar />
      </div>
      <div className={styles.right}>
        <HomeListHeader />
        <Featured />
        <div style={{height: "70vh"}}>
          <ProblemsTable />
        </div>
      </div>
    </div>
  );
};

export default Home;
