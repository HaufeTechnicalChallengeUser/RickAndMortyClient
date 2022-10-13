import { Dispatch, memo, SetStateAction } from "react";
import styles from "./pagination.module.scss";

const Pagination = ({
  page,
  setPage,
  maxPage,
}: {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  maxPage: number;
}) => {
  const handlePagination = (value: number) => {
    if (value < 1 || value > maxPage) {
      setPage(1);
    } else {
      setPage(value);
    }
  };

  return (
    <div className={styles.pagination}>
      <div className={styles.card}>
        {page > 1 && (
          <span
            className={`${styles.page} ${styles.icons}`}
            onClick={() => handlePagination(page - 1)}
          >
            &lt;
          </span>
        )}
        <span
          className={`${styles.page} ${page === 1 && styles.actual}`}
          onClick={() => handlePagination(1)}
        >
          1
        </span>
        {page > 4 && (
          <span className={`${styles.page} ${styles.nonClickable}`}>...</span>
        )}
        {page > 3 && (
          <span
            className={styles.page}
            onClick={() => handlePagination(page - 2)}
          >
            {page - 2}
          </span>
        )}
        {page > 2 && (
          <span
            className={styles.page}
            onClick={() => handlePagination(page - 1)}
          >
            {page - 1}
          </span>
        )}
        {page > 1 && page < maxPage && (
          <span className={`${styles.page} ${styles.actual}`}>{page}</span>
        )}
        {page < maxPage - 1 && (
          <span
            className={styles.page}
            onClick={() => handlePagination(page + 1)}
          >
            {page + 1}
          </span>
        )}
        {page < maxPage - 2 && (
          <span
            className={styles.page}
            onClick={() => handlePagination(page + 2)}
          >
            {page + 2}
          </span>
        )}
        {page < maxPage - 3 && (
          <span className={`${styles.page} ${styles.nonClickable}`}>...</span>
        )}
        {maxPage !== 1 && (
          <span
            className={`${styles.page} ${page === maxPage && styles.actual}`}
            onClick={() => handlePagination(maxPage)}
          >
            {maxPage}
          </span>
        )}
        {page < maxPage && (
          <span
            className={`${styles.page} ${styles.icons}`}
            onClick={() => handlePagination(page + 1)}
          >
            &gt;
          </span>
        )}
      </div>
    </div>
  );
};

export default memo(Pagination);
