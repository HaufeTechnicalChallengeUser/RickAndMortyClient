import { ChangeEvent, FormEvent, memo, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./signup.module.scss";
import { useTypedDispatch, useTypedSelector } from "../../../redux/store";
import { openAlert } from "../../../redux/actions/alerts";
import { signup } from "../../../redux/actions/auth";

const Signup = () => {
  const dispatch = useTypedDispatch();
  const authState = useTypedSelector((state) => state.auth);

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    passwordRepeat: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!credentials.username || !credentials.password) {
      dispatch(openAlert("warning", "Fill in all the fields"));
    } else if (credentials.password.length < 6) {
      dispatch(
        openAlert("warning", "Enter a password with at least 6 characters")
      );
    } else if (credentials.password !== credentials.passwordRepeat) {
      dispatch(openAlert("warning", "Passwords do not match"));
    } else {
      dispatch(signup(credentials));
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.info}>
          <div className={styles.card}>
            <span className={styles.title}>Sign Up</span>
            <form className={styles.form} onSubmit={(e) => onSubmit(e)}>
              <input
                name="username"
                id="username"
                placeholder={"Username"}
                type="text"
                value={credentials.username}
                onChange={handleChange}
                className={styles.input}
                maxLength={20}
              />
              <input
                name="password"
                id="password"
                placeholder={"Password"}
                type="password"
                value={credentials.password}
                onChange={handleChange}
                className={styles.input}
                autoComplete="new-password"
                maxLength={20}
              />
              <input
                name="passwordRepeat"
                id="passwordRepeat"
                placeholder={"Repeat password"}
                type="password"
                value={credentials.passwordRepeat}
                onChange={handleChange}
                className={styles.input}
                maxLength={20}
              />
              {!authState.loading && (
                <input
                  type="submit"
                  value={"Signup"}
                  className={styles.submit}
                />
              )}
            </form>
            <div className={styles.links}>
              <span className={styles.signin}>
                <Link to="/signin">
                  <span>I want to sign in</span>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Signup);
