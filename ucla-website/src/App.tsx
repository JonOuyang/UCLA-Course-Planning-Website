import Banner from "./BannerComponents/Banner";
import Sidebar from "./SidebarComponents/Sidebar";
import styles from "./App.module.css";

//<div className={`${styles.item} ${styles.bannerStyle}`}></div>
function App() {
  return (
    <>
      <div className={styles.background}>
        <Banner iconText="Hello Bruin!"/>
        <Sidebar />
        <div className={`${styles.item} ${styles.mainBody}`}>Main Body</div>
      </div>
    </>
  );
}

export default App;
