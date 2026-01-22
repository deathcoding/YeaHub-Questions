  // entities/filter/ui/FilterByComplexity.tsx
  import { useUrlFilter } from "@/shared/lib/hooks/useUrlFilter";
  import { Button } from "@/shared/ui/button";
  import { FilterButtonList } from "@/shared/ui/filterButtonList";

  type ComplexityOption = {
    label: string;
    values: string[];
  };

  const complexityOptions: ComplexityOption[] = [
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


    console.log(activeValues)
    return (
      <FilterButtonList
        filterValues={complexityOptions}
        getKey={(item) => item.label}
        renderItem={(item) => {
        
          const itemKey = item.values.join(",")
          const isActive = activeValues.includes(itemKey);
          return (
            <Button
              variant={isActive ? "primary" : "outline"}
              onClick={() => toggle(item.values)} 
            >
              {item.label}
            </Button>
          );
        }}
      />
    );
  }