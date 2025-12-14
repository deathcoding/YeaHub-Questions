import { useGetSkillsListQuery } from "@/entities/skill/api/skillApi";
import { useGetSpecializationsQuery } from "@/entities/specialization/api/specializationApi";

export function QuestionsFilter() {
  const { data: skillsData } = useGetSkillsListQuery({});
  const { data: specializationsData } = useGetSpecializationsQuery({});

  const skills = skillsData?.data;
  const specializations = specializationsData?.data;

  return (
    <>
    {/*Фичи по фильтрациям будут тут*/}
      <ul>
        {specializations?.map((s) => (
          <li key={s.id}>{s.title}</li>
        ))}
      </ul>
      <ul>
        {skills?.map((s) => (
          <li key={s.id}>{s.title}</li>
        ))}
      </ul>
    </>
  );
}
