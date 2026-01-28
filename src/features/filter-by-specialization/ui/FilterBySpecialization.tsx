import { useGetSpecializationsQuery } from "@/entities/specialization/api/specializationApi";
import { useUrlFilter } from "@/shared/lib/hooks/useUrlFilter";
import { Button } from "@/shared/ui/button";
import { FilterButtonList } from "@/shared/ui/filter-button-list";
import { QueryState } from "@/shared/ui/query-state";
import { useMemo } from "react";

const RESET_PARAMS = ["skills"];

export function FilterBySpecialization() {
  const { data: response, isLoading, isError } = useGetSpecializationsQuery({});

  const specializations = useMemo(() => {
    const rawData = response?.data ?? [];
    return rawData.map((s) => ({
      ...s,
      displayTitle: formatTitle(s.title),
    }));
  }, [response?.data]);

  const { toggle, activeValues } = useUrlFilter({
    paramName: "specialization",
    mode: "single",
    resetParams: RESET_PARAMS,
  });

  return (
    <QueryState
      isLoading={isLoading}
      isError={isError}
      loadingMessage="Загрузка..."
      errorMessage="Запрос завершился с ошибкой. Проверьте доступ к API."
    >
      <>
        <h4>Специализация</h4>
        <FilterButtonList
          items={specializations}
          initialVisibleItems={5}
          renderItem={(option) => {
            const stringKey = String(option.id);
            const isActive = activeValues.includes(stringKey);

            return (
              <Button
                key={option.id}
                onClick={() => toggle(stringKey)}
                variant={isActive ? "primary" : "outline"}
              >
                {option.displayTitle}
              </Button>
            );
          }}
        />
      </>
    </QueryState>
  );
}

function formatTitle(title: string) {
  return title.replace(/\s*developer/i, "").trim();
}
