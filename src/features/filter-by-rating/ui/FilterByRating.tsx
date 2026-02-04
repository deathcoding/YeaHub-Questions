import { useUrlFilter } from "@/shared/lib/hooks/useUrlFilter";
import { Button } from "@/shared/ui/Button";
import { FilterButtonList } from "@/shared/ui/Filter-button-list";

const ratingValues = ["1", "2", "3", "4", "5"];

export function FilterByRating() {
  const { toggle, activeValues } = useUrlFilter({
    paramName: "rate",
    mode: "multiple",
  });

  return (
    <>
      <h4>Рейтинг</h4>
      <FilterButtonList
        items={ratingValues}
        initialVisibleItems={5}
        renderItem={(option) => {
          const isActive = activeValues.includes(option);

          return (
            <Button
              key={option}
              onClick={() => toggle(option)}
              variant={isActive ? "primary" : "outline"}
            >
              {option}
            </Button>
          );
        }}
      />
    </>
  );
}
