import { useGetSpecializationsQuery } from "@/entities/specialization/api/specializationApi";
import { useUrlFilter } from "@/shared/lib/hooks/useUrlFilter";
import { Button } from "@/shared/ui/button";

export function FilterBySpecialization() {
  const { data: response } = useGetSpecializationsQuery({});
  const specializations = response?.data ?? [];

  const { toggle: toggleSpecialization, activeValues } = useUrlFilter({
    paramName: "specialization",
    mode: "single",
    resetParams: ["skills"],
  });

  return (
    <div>
      <ul>
        <p>Специализация</p>
        {specializations?.map((s) => {
          const isActive = activeValues.includes(String(s.id));

          return (
            <Button
              onClick={() => toggleSpecialization(s.id)}
              key={s.id}
              variant={isActive ? "primary" : "outline"}
            >
              {s.title}
            </Button>
          );
        })}
      </ul>
    </div>
  );
}
