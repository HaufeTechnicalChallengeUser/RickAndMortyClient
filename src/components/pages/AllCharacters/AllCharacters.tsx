import { memo, useState, useEffect, ChangeEvent, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styles from "./allCharacters.module.scss";
import { useTypedDispatch, useTypedSelector } from "../../../redux/store";
import { getAllCharacters } from "../../../redux/actions/characters";
import Pagination from "../../common/Pagination/Pagination";
import { getUserData, putUserData } from "../../../redux/actions/userData";
import preloadImage from "../../../shared/assets/images/preload.jpg";

const AllCharacters = () => {
  const dispatch = useTypedDispatch();
  const {
    characters: {
      loading,
      allCharacters: { results, info },
    },
    userData: { data },
  } = useTypedSelector((state) => state);
  const navigate = useNavigate();

  const [allCharacters, setAllCharacters] = useState([
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
  const [infoCharacters, setInfoCharacters] = useState({
    pages: 0,
  });
  const [userData, setUserData] = useState({
    favorites: [0],
  });
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPage(1);
    const { value } = e.target;
    setSearch(value);
  };

  const handleCharacterClick = (id: number) => {
    navigate(`/characters/${id}`);
  };

  const handleFavoriteClick = (e: MouseEvent<HTMLElement>, id: number) => {
    e.stopPropagation();
    dispatch(putUserData({ favorite: id }));
  };

  const getIfIsFavorite = (id: number) => {
    return userData.favorites && userData.favorites.includes(id);
  };

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllCharacters(page.toString(), search));
  }, [dispatch, page, search]);

  useEffect(() => {
    results ? setAllCharacters(results) : setAllCharacters([]);
    info && setInfoCharacters(info);
    data && setUserData(data);
  }, [results, info, data]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.info}>
          <span className={styles.title}>Characters</span>
          <div className={styles.groupitem}>
            <input
              name="search"
              id="search"
              placeholder={"Search by name"}
              value={search}
              onChange={handleChange}
              className={styles.input}
              maxLength={20}
            />
          </div>
          <div className={styles.groupSpaces}>
            {!loading &&
              (allCharacters.length > 0 && allCharacters[0].id ? (
                <>
                  {allCharacters.map((character) => (
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
                  ))}
                </>
              ) : (
                <span className={styles.empty}>Ups, no characters found</span>
              ))}
          </div>
        </div>
        {infoCharacters.pages > 1 && (
          <Pagination
            page={page}
            setPage={setPage}
            maxPage={infoCharacters.pages}
          />
        )}
      </div>
    </div>
  );
};

export default memo(AllCharacters);
