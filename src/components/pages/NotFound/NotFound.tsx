import { memo } from "react";
import styles from "./notfound.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.info}>
          <div className={styles.card}>
            <span className={styles.title}>
              We could not find what you were looking for
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Home);
