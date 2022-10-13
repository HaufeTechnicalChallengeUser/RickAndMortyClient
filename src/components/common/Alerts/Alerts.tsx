import { memo } from "react";
import { closeAlert } from "../../../redux/actions/alerts";
import { useTypedDispatch, useTypedSelector } from "../../../redux/store";
import styles from "./alerts.module.scss";

const Alerts = () => {
  const dispatch = useTypedDispatch();
  const {
    alerts: { open, condition, text },
  } = useTypedSelector((state) => state);

  const handleOnClick = () => {
    dispatch(closeAlert());
  };

  return (
    <div className={styles.alerts}>
      <div
        className={`${styles.alert} ${styles[condition]} ${
          open ? styles.shown : styles.hidden
        }`}
        onMouseEnter={handleOnClick}
      >
        {text}
      </div>
    </div>
  );
};

export default memo(Alerts);
