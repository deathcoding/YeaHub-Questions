import { useGetSkillsListQuery } from "@/entities/skill/api/skillApi";
import { useGetSpecializationsQuery } from "@/entities/specialization/api/specializationApi";
import styles from "./QuestionsFilter.module.css";
import { FilterBySpecialization } from "@/features/filter-by-specialization";
import { FilterBySkill } from "@/features/filter-by-skill";
import { FilterByComplexity } from "@/features/filter-by-complexity";
import { FilterByRating } from "@/features/filter-by-rating";
import { SearchContent } from "@/features/search-content";

export function QuestionsFilter() {
  const { data: skillsData } = useGetSkillsListQuery({});
  const { data: specializationsData } = useGetSpecializationsQuery({});

  const skills = skillsData?.data ?? [];
  const specializations = specializationsData?.data ?? [];

  return (
    <div className={styles.filtersContainer}>
      <SearchContent />
      <FilterBySpecialization specializations={specializations} />
      <FilterBySkill skills={skills} />
      <FilterByComplexity />
      <FilterByRating />
    </div>
  );
}
