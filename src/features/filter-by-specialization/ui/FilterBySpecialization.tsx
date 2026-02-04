import { useGetSpecializationsQuery } from "@/entities/specialization/api/specializationApi";
import type { Specialization } from "@/entities/specialization/model/specialization.types";
import { useUrlFilter } from "@/shared/lib/hooks/useUrlFilter";
import { Button } from "@/shared/ui/Button";
import { FilterButtonList } from "@/shared/ui/Filter-button-list";
import { QueryState } from "@/shared/ui/Query-state";
// import { useMemo } from "react";

const RESET_PARAMS = ["skills"];

export function FilterBySpecialization() {
  const { data: response, isLoading, isError } = useGetSpecializationsQuery({});

  // const specializations = useMemo(() => {
  //   const rawData = response?.data ?? [];
  //   return rawData.map((s) => ({
  //     ...s,
  //     displayTitle: formatTitle(s.title),
  //   }));
  // }, [response?.data]);

  const specializations = response?.data ?? []

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
          renderItem={(option: Specialization) => {
            const stringKey = String(option.id);
            const isActive = activeValues.includes(stringKey);

            return (
              <Button
                key={option.id}
                onClick={() => toggle(stringKey)}
                variant={isActive ? "primary" : "outline"}
              >
                {formatTitle(option.title)}
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
