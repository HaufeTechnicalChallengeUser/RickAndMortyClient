import { memo, ReactElement } from "react";
import { useTypedSelector } from "../../../redux/store";
import styles from "./body.module.scss";
import Spinner from "../Spinner/Spinner";

interface BodyProps {
  children: ReactElement;
}

const Body = ({ children }: BodyProps) => {
  const {
    auth: { loading: loadingAuth },
    user: { loading: loadingUser },
    userData: { loading: loadingUserData },
    characters: { loading: loadingCharacters },
  } = useTypedSelector((state) => state);

  return (
    <div className={styles.body}>
      {children}
      {(loadingAuth || loadingUser || loadingCharacters || loadingUserData) && (
        <Spinner />
      )}
    </div>
  );
};
export default memo(Body);
