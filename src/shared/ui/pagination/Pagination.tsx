import styles from "./Pagination.module.css";

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
  const handleChange = () => {
    onChange();
  };

  return <div className={styles.container}>pagination will be here</div>;
}
