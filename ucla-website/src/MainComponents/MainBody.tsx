import styles from "./MainBody.module.css";

function yearLayout(title: string) {
  return (
    <div className={styles.yearTitle}>
      <h1 className={styles.classTitle}>{title}</h1>
      <hr className={styles.sidebarDivider} />
      <div className={styles.courseTitles}></div>

      <div className={styles.titleBoxes}>
        <div className={styles.seasonTitle}>Fall Quarter</div>
        <div className={styles.seasonTitle}>Spring Quarter</div>
        <div className={styles.seasonTitle}>Winter Quarter</div>
      </div>

      <div className={styles.courseBoxes}>
        <div className={styles.seasonBox}>Placeholder Values</div>
        <div className={styles.seasonBox}>Placeholder Values</div>
        <div className={styles.seasonBox}>Placeholder Values</div>
      </div>
    </div>
  );
}

const MainBody = () => {
  return (
    <div className={styles.bodyGrid}>
      <div>{/*This div must remain empty for formatting sake*/}</div>
      {yearLayout('Freshman Year')}
      {yearLayout('Sophomore Year')}
      {yearLayout('Junior Year')}
      {yearLayout('Senior Year')}
    </div>
  );
};

export default MainBody;
