import { useUrlFilter } from "@/shared/lib/hooks/useUrlFilter";
import { Button } from "@/shared/ui/button";

const ratingValues = ["1", "2", "3", "4", "5"];

export function FilterByRating() {
  const { toggle, activeValues } = useUrlFilter({
    paramName: "rate",
    mode: "multiple",
  });

  return (
    <>
      {ratingValues.map((rate) => {
        const isActive = activeValues.includes(String(rate));
        return (
          <Button
            key={rate}
            onClick={() => toggle(rate)}
            variant={isActive ? "primary" : "outline"}
          >
            {rate}
          </Button>
        );
      })}
    </>
  );
}
