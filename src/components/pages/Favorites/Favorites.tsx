import { memo, useState, useEffect, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styles from "./favorites.module.scss";
import { useTypedDispatch, useTypedSelector } from "../../../redux/store";
import { getMultipleCharacters } from "../../../redux/actions/characters";
import { getUserData, putUserData } from "../../../redux/actions/userData";
import preloadImage from "../../../shared/assets/images/preload.jpg";

const Favorites = () => {
  const dispatch = useTypedDispatch();
  const {
    characters: { loading, multipleCharacters: multipleCharactersState },
    userData: { data },
  } = useTypedSelector((state) => state);
  const navigate = useNavigate();

  const [multipleCharacters, setMultipleCharacters] = useState([
    {
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
    },
  ]);
  const [userData, setUserData] = useState({
    favorites: [],
  });

  const handleCharacterClick = (id: number) => {
    navigate(`/characters/${id}`);
  };

  const handleFavoriteClick = (e: MouseEvent<HTMLElement>, id: number) => {
    e.stopPropagation();
    dispatch(putUserData({ favorite: id }));
  };

  const getIfIsFavorite = (id: number) => {
    const favorites: number[] = userData.favorites;
    return favorites && favorites.length > 0 && favorites.includes(id);
  };

  useEffect(() => {
    data && setUserData(data);
  }, [data]);

  useEffect(() => {
    if (Array.isArray(multipleCharactersState)) {
      setMultipleCharacters(multipleCharactersState);
    } else {
      setMultipleCharacters([multipleCharactersState]);
    }
  }, [multipleCharactersState]);

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  useEffect(() => {
    userData.favorites.length > 0
      ? dispatch(getMultipleCharacters(userData.favorites.join(",")))
      : setMultipleCharacters([]);
  }, [dispatch, userData.favorites]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.info}>
          <span className={styles.title}>Favorites</span>
          <div className={styles.groupSpaces}>
            {!loading &&
              (multipleCharacters.length > 0 && multipleCharacters[0].id ? (
                multipleCharacters.map((character) => (
                  <div
                    className={styles.space}
                    key={character.id}
                    onClick={() => handleCharacterClick(character.id)}
                  >
                    <div className={styles.card}>
                      <LazyLoadImage
                        className={styles.image}
                        src={character.image}
                        alt={character.name}
                        placeholderSrc={preloadImage}
                      />
                      <div className={styles.data}>
                        <span className={styles.item}>{character.name}</span>
                        <span className={styles.item}>
                          ({character.gender})
                        </span>
                        <span className={styles.item}>
                          {character.status} {character.species}
                        </span>
                      </div>
                      <span
                        className={styles.favorite}
                        onClick={(e) => handleFavoriteClick(e, character.id)}
                      >
                        {getIfIsFavorite(character.id) ? (
                          <span className={styles.forget}>Forget me</span>
                        ) : (
                          <span className={styles.remember}>Remeber me</span>
                        )}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <span className={styles.empty}>No characters to remember</span>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Favorites);
