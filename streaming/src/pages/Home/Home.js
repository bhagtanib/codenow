import HomeCategory from "../../components/HomeCategory/HomeCategory"
import HomeListHeader from "../../components/HomeListHeader/HomeListHeader"
import HomeProblems from "../../components/HomeProblems/HomeProblems"
import HomeSearch from "../../components/HomeSearch/HomeSearch"
import Sidebar from "../../components/Sidebar/Sidebar"
import styles from "./Home.module.css"
const Home = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <Sidebar />
        </div>
        <div className={styles.right}>
            <HomeListHeader />
            <div className={styles.content} > 
              <HomeSearch />
              <HomeCategory />
              <HomeProblems />
            </div>
        </div>
    </div>
  )
}

export default Home