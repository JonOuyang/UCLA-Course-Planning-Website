import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Sidebar.module.css";

let genEds = ["class 1", "class 2", "class 3"];
let lowerDivs = [
  "Com Sci 1",
  "Com Sci 31",
  "Com Sci 32",
  "Com Sci 33",
  "Com Sci 34",
  "Com Sci 35L",
  "Math 31",
  "Math 32",
  "Math 33a",
  "Math 33b",
  "Math 61",
];
let upperDivs = [
  "Com Sci 101",
  "Com Sci 102",
  "Com Sci 103",
  "Com Sci 104",
  "Com Sci 105",
  "Math 101",
  "Math 102",
];

// Generate code for listing out all classes in array
function listItems(list: string[]) {
  return (
    <ul className={`no-borders ${styles.sidebarListContainer}`}>
      {list.map((classID: string) => (
        <li className="list-group-item d-flex justify-content-between align-items-center">
          • {classID}
          <a
            href={`https://www.bruinwalk.com/classes/${classID.replaceAll(" ", "-").toLowerCase()}/`}
            target="_blank"
            className={`badge text-bg-primary rounded-pill ${styles.BruinWalkText}`}
            style={{
              fontSize: "12px",
              fontWeight: "normal",
              textDecoration: "none",
            }}
          >
            BruinWalk
          </a>
        </li>
      ))}
    </ul>
  );
}

const Sidebar = () => {
  return (
    <div className={styles.sidebarStyle}>
      <strong className={styles.sidebarTextStrong}>User Information</strong>
      <hr className={styles.sidebarDivider} />
      <p className={styles.sidebarTextNormal}>Major</p>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          This dropdown button doesn't work
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li>
            <a className="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </div>
      <strong className={styles.sidebarTextStrong}>General Education</strong>
      <hr className={styles.sidebarDivider} />
      {listItems(genEds)}
      <strong className={styles.sidebarTextStrong}>Lower Division</strong>
      <hr className={styles.sidebarDivider} />
      {listItems(lowerDivs)}
      <strong className={styles.sidebarTextStrong}>Upper Division</strong>
      <hr className={styles.sidebarDivider} />
      {listItems(upperDivs)}
    </div>
  );
};

export default Sidebar;
