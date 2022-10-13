import { memo, useEffect, useState } from "react";
import styles from "./singleCharacter.module.scss";
import { useTypedDispatch, useTypedSelector } from "../../../redux/store";
import { getSingleCharacter } from "../../../redux/actions/characters";
import { useParams } from "react-router-dom";

const SingleCharacter = () => {
  const dispatch = useTypedDispatch();
  const params = useParams();
  const {
    characters: { loading, singleCharacter: singleCharacterState },
  } = useTypedSelector((state) => state);

  const [singleCharacter, setSingleCharacter] = useState({
    id: 0,
    name: "",
    gender: "",
    type: "",
    status: "",
    species: "",
    image: "",
    location: {
      name: "",
    },
    origin: {
      name: "",
    },
  });

  useEffect(() => {
    params.id && dispatch(getSingleCharacter(params.id));
  }, [dispatch, params.id]);

  useEffect(() => {
    singleCharacterState && setSingleCharacter(singleCharacterState);
  }, [singleCharacterState]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.info}>
          <div className={styles.space}>
            {!loading && (
              <div className={styles.card}>
                <img
                  className={styles.image}
                  src={singleCharacter.image}
                  alt={singleCharacter.image}
                />
                <div className={styles.data}>
                  <span className={styles.name}>{singleCharacter.name}</span>
                  <span className={styles.item}>
                    ({singleCharacter.gender})
                  </span>
                  <div className={styles.groupitem}>
                    <span className={styles.item}>
                      {singleCharacter.status} {singleCharacter.species}
                    </span>
                    {singleCharacter.type && (
                      <span className={styles.item}>
                        {singleCharacter.type} Type
                      </span>
                    )}
                    <span className={styles.item}>
                      From: {singleCharacter.origin?.name}
                    </span>
                    <span className={styles.item}>
                      Current Location: {singleCharacter.location?.name}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(SingleCharacter);
