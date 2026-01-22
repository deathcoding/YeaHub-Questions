import { useGetSkillsListQuery } from "@/entities/skill/api/skillApi";
import { useUrlFilter } from "@/shared/lib/hooks/useUrlFilter";
import { Button } from "@/shared/ui/button";
import { useSearchParams } from "react-router";

export function FilterBySkill() {
  const [searchParams] = useSearchParams();
  const specializationsParams = searchParams.getAll("specialization");
  const specializationsIds = specializationsParams.map(Number);

  const { data: response } = useGetSkillsListQuery({
    specializations:
      specializationsIds.length > 0 ? specializationsIds : undefined,
  });
  const skills = response?.data ?? [];

  const { toggle, activeValues } = useUrlFilter({
    paramName: "skills",
    mode: "multiple",
  });

  return (
    <ul>
      <p>Навыки</p>
      {skills?.map((s) => {
        const isActive = activeValues.includes(String(s.id));

        return (
          <Button
            onClick={() => toggle(s.id)}
            key={s.id}
            variant={isActive ? "primary" : "outline"}
          >
            {s.title}
          </Button>
        );
      })}
    </ul>
  );
}
