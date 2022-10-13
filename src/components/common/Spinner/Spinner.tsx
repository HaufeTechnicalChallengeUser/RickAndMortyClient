import { memo } from "react";
import logo from "../../../shared/assets/images/spinner.png";
import styles from "./spinner.module.scss";

const Spinner = () => (
  <div className={styles.spinner}>
    <img src={logo} alt="Logo" />
  </div>
);

export default memo(Spinner);
