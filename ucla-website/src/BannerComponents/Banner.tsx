import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Banner.module.css";
import { useState } from "react";

interface Props {
  iconText: string;
}

function Banner({ iconText }: Props) {
  const [activePageIndex, setIndex] = useState(0);

  return (
    <div className={styles.gridContainer}>
      <div className={styles.bannerIcon}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/84/84501.png"
          className={styles.bannerIMG}
          alt="None"
        />
        <strong className={styles.bannerTextStrong}>{iconText}</strong>
      </div>
      <div className={styles.bannerPages}>
        <ul className="nav nav-underline justify-content-end">
          <li className="nav-item">
            <a
              className={activePageIndex == 0 ? "nav-link active" : "nav-link"}
              aria-current="page"
              href="#"
              onClick={() => {
                setIndex(0);
              }}
              style={{ color: "white" }}
            >
              Create New
            </a>
          </li>
          <li className="nav-item">
            <a
              className={activePageIndex == 1 ? "nav-link active" : "nav-link"}
              href="#"
              onClick={() => {
                setIndex(1);
              }}
              style={{ color: "white" }}
            >
              Saved Schedules
            </a>
          </li>
          <li className="nav-item">
            <a
              className={activePageIndex == 2 ? "nav-link active" : "nav-link"}
              href="#"
              onClick={() => {
                setIndex(2);
              }}
              style={{ color: "white" }}
            >
              Settings
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.bannerLogin}>
        <button type="button" className="btn btn-dark">
          Sign In
        </button>
      </div>
    </div>
  );
}

export default Banner;
