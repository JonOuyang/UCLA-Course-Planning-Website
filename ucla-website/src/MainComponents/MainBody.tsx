import styles from "./MainBody.module.css";

const MainBody = () => {
  return (
    <div className={styles.bodyGrid}>
      <div className={styles.yearTitle}>Block 1</div>
      <div className={styles.yearTitle2}>Block 2</div>
      <div className={styles.yearTitle}>Block 3</div>
      <div className={styles.yearTitle2}>Block 4</div>
    </div>
  );
};

export default MainBody;
