import type { Specialization } from "@/entities/specialization/model/specialization.types";
import { Button } from "@/shared/ui/Button";

interface filterBySpecializationProps {
  specializations: Specialization[];
}

export function FilterBySpecialization({
  specializations,
}: filterBySpecializationProps) {
  function handleClick(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div>
      <ul>
        <p>Специализация</p>
        {specializations?.map((s) => (
          <Button onClick={handleClick} key={s.id}>
            {s.title}
          </Button>
        ))}
      </ul>
    </div>
  );
}
