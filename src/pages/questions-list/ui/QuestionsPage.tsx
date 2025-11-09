import { useGetSkillsListQuery } from "@/entities/skill/api/skillApi";
import { useGetSpecializationsQuery } from "@/entities/specialization/api/specializationApi";
import { QuestionsList } from "@/widgets/questionsList";

export function QuestionsPage() {
  //just checking that the api slices are working

  const { data: skillsData } = useGetSkillsListQuery({});
  const { data: specializationsData } = useGetSpecializationsQuery({});

  const skills = skillsData?.data;
  const specializations = specializationsData?.data;

  return (
    <>
      Вопросы
      {/* Виджет QuestionsList*/}
      <QuestionsList />
      Специализация
      <ul>
        {specializations?.map((s) => (
          <li key={s.id}>{s.title}</li>
        ))}
      </ul>
      Скилы
      <ul>
        {skills?.map((s) => (
          <li key={s.id}>{s.title}</li>
        ))}
      </ul>
    </>
  );
}
