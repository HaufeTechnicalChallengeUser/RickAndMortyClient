import { memo } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./navbar.module.scss";
import { signout } from "../../../redux/actions/auth";
import { useTypedDispatch, useTypedSelector } from "../../../redux/store";

const Navbar = () => {
  const dispatch = useTypedDispatch();
  const {
    user: { username },
    loading,
  } = useTypedSelector((state) => state.user);
  const location = useLocation();

  return (
    <div className={styles.topbar}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.links}>
            <div className={styles.group}>
              {location.pathname !== "/characters" ? (
                <Link to="/characters">
                  <span className={styles.link}>Characters</span>
                </Link>
              ) : (
                <Link to="/favorites">
                  <span className={styles.link}>Favorites</span>
                </Link>
              )}
            </div>
            <div className={styles.group}>
              <span className={styles.item}> {!loading && username}</span>
            </div>
            <div className={styles.group}>
              <span className={styles.link} onClick={() => dispatch(signout())}>
                Signout
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Navbar);
