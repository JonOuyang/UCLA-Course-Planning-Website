import Banner from "./BannerComponents/Banner";
import Sidebar from "./SidebarComponents/Sidebar";
import MainBody from "./MainComponents/MainBody";
import styles from "./App.module.css";

//<div className={`${styles.item} ${styles.bannerStyle}`}></div>
//<div className={`${styles.item} ${styles.mainBody}`}>Main Body</div>
function App() {
  return (
    <>
      <div className={styles.background}>
        <Banner iconText="Hello Bruin!"/>
        <Sidebar />
        <MainBody />
      </div>
    </>
  );
}

export default App;
