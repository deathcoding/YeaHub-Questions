import styles from "./QuestionsFilter.module.css";
import { FilterBySpecialization } from "@/features/filter-by-specialization";
import { FilterBySkill } from "@/features/filter-by-skill";
import { FilterByComplexity } from "@/features/filter-by-complexity";
import { FilterByRating } from "@/features/filter-by-rating";
import { SearchContent } from "@/features/search-content";

export function QuestionsFilter() {
  return (
    <div className={styles.filtersContainer}>
      <SearchContent />
      <FilterBySpecialization />
      <FilterBySkill />
      <FilterByComplexity />
      <FilterByRating />
    </div>
  );
}
