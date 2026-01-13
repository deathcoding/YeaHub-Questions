import { usePagination, DOTS } from "@/shared/lib";
import styles from "./Pagination.module.css";
import Arrow_btn_back from "@/shared/assets/icons/Arrow_btn_back.svg";
import Arrow_btn_forward from "@/shared/assets/icons/Arrow_btn_forward.svg";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onChange: (page: number) => void;
}

export function Pagination({
  currentPage,
  totalPages,
  onChange,
}: PaginationProps) {
  const paginationRange = usePagination({
    totalPages,
    currentPage,
    siblingCount: 1,
  });

  if (paginationRange.length < 2) {
    return null;
  }

  return (
    <nav className={styles.container}>
      <button
        className={styles.arrowButton}
        disabled={currentPage === 1}
        onClick={() => onChange(Number(currentPage - 1))}
      >
        <img src={Arrow_btn_back}></img>
      </button>
      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return <span key={`dots-${index}`}>...</span>;
        }
        return (
          <button
            key={pageNumber}
            className={`${styles.pageItem} ${pageNumber === currentPage ? styles.active : ""}`}
            onClick={() => onChange(Number(pageNumber))}
          >
            {pageNumber}
          </button>
        );
      })}
      <button
        className={styles.arrowButton}
        disabled={currentPage === totalPages}
        onClick={() => onChange(Number(currentPage + 1))}
      >
        <img src={Arrow_btn_forward}></img>
      </button>
    </nav>
  );
}
