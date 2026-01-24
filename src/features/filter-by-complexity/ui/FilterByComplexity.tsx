// entities/filter/ui/FilterByComplexity.tsx
import { useUrlFilter } from "@/shared/lib/hooks/useUrlFilter";
import { Button } from "@/shared/ui/button";
import { FilterButtonList } from "@/shared/ui/filter-button-list";

const complexityOptions = [
  { label: "1-3", values: ["1", "2", "3"] },
  { label: "4-6", values: ["4", "5", "6"] },
  { label: "7-8", values: ["7", "8"] },
  { label: "9-10", values: ["9", "10"] },
];

export function FilterByComplexity() {
  const { toggle, activeValues } = useUrlFilter({
    paramName: "complexity",
    mode: "multiple",
  });

  return (
    <>
      <h4>Уровень сложности</h4>
      <FilterButtonList
        items={complexityOptions}
        initialVisibleItems={4}
        renderItem={(option) => {
          const isActive = option.values.every((val) =>
            activeValues.includes(val),
          );

          return (
            <Button
              key={option.label}
              onClick={() => toggle(option.values)}
              variant={isActive ? "primary" : "outline"}
            >
              {option.label}
            </Button>
          );
        }}
      />
    </>
  );
}
