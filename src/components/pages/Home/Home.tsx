import { memo } from "react";
import { Link } from "react-router-dom";
import styles from "./home.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.info}>
          <div className={styles.card}>
            <span className={styles.title}>
              Welcome to the Rick and Morty App
            </span>
            <span className={styles.text}>
              <Link to="/signin">
                <span>Click here to enter the app</span>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Home);
