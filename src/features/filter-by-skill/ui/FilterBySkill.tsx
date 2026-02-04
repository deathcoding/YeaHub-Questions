import { useGetSkillsListQuery } from "@/entities/skill/api/skillApi";
import type { Skill } from "@/entities/skill/model/skill.types";
import { useUrlFilter } from "@/shared/lib/hooks/useUrlFilter";
import { Button } from "@/shared/ui/Button";
import { FilterButtonList } from "@/shared/ui/Filter-button-list";
import { QueryState } from "@/shared/ui/Query-state";
import { useSearchParams } from "react-router";

export function FilterBySkill() {
  const [searchParams] = useSearchParams();
  const specializationsParams = searchParams.getAll("specialization");
  const specializationsIds = specializationsParams.map(Number);

  const {
    data: response,
    isLoading,
    isError,
  } = useGetSkillsListQuery({
    specializations:
      specializationsIds.length > 0 ? specializationsIds : undefined,
  });
  const skills = response?.data ?? [];

  const { toggle, activeValues } = useUrlFilter({
    paramName: "skills",
    mode: "multiple",
  });

  return (
    <QueryState
      isLoading={isLoading}
      isError={isError}
      loadingMessage="Загрузка..."
      errorMessage="Запрос завершился с ошибкой. Проверьте доступ к API."
    >
      <>
        <h4>Навыки</h4>
        <FilterButtonList
          items={skills}
          initialVisibleItems={8}
          renderItem={(option: Skill) => {
            const stringKey = String(option.id);
            const isActive = activeValues.includes(stringKey);

            return (
              <Button
                key={option.id}
                onClick={() => toggle(stringKey)}
                variant={isActive ? "primary" : "outline"}
              >
                {option.title}
              </Button>
            );
          }}
        />
      </>
    </QueryState>
  );
}
