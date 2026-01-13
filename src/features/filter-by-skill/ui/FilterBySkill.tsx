import type { Skill } from "@/entities/skill/model/skill.types";
import { Button } from "@/shared/ui/Button";

interface FilterBySkillProps {
  skills: Skill[];
}

export function FilterBySkill({ skills }: FilterBySkillProps) {
  function handleClick(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <ul>
      <p>Навыки</p>
      {skills?.map((s) => (
        <Button onClick={handleClick} key={s.id}>
          {s.title}
        </Button>
      ))}
    </ul>
  );
}
