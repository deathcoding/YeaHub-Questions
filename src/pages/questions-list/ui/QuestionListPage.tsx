import { useGetQuestionsListQuery } from "@/entities/question/api/questionApi";
import { useGetSkillsListQuery } from "@/entities/skill/api/skillApi";
import { useGetSpecializationsQuery } from "@/entities/specialization/api/specializationApi";

export function QuestionList() {
  //just checking that the api slices are working
  const { data: questionsData } = useGetQuestionsListQuery();
  const { data: skillsData } = useGetSkillsListQuery({});
  const { data: specializationsData } = useGetSpecializationsQuery({});
  const questions = questionsData?.data;
  const skills = skillsData?.data;
  const specializations = specializationsData?.data;

  return (
    <>
      Вопросы
      <ul>
        {questions?.map((q) => (
          <li key={q.id}>{q.title}</li>
        ))}
      </ul>
      Cпециализация
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
