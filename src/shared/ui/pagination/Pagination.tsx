interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onChange: (page: number) => void;
}

export function Pagination({currentPage, totalPages, onChange}: PaginationProps) {

}