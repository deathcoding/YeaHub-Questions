import { useGetSkillsListQuery } from "@/entities/skill/api/skillApi";
import { useGetSpecializationsQuery } from "@/entities/specialization/api/specializationApi";
import styles from "./QuestionsFilter.module.css";

export function QuestionsFilter() {
  const { data: skillsData } = useGetSkillsListQuery({});
  const { data: specializationsData } = useGetSpecializationsQuery({});

  const skills = skillsData?.data;
  const specializations = specializationsData?.data;

  return (
    <div className={styles.filtersContainer}>
      {/*Фичи по фильтрациям будут тут*/}
      <ul>
        <p>Специализация</p>
        {specializations?.map((s) => (
          <li key={s.id}>{s.title}</li>
        ))}
      </ul>
      <ul>
        <p>Навыки</p>
        {skills?.map((s) => (
          <li key={s.id}>{s.title}</li>
        ))}
      </ul>
    </div>
  );
}
