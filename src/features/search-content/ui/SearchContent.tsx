import { useDebouncedCallback } from "@/shared/lib/hooks/useDebouncedCallback";
import { useUrlFilter } from "@/shared/lib/hooks/useUrlFilter";
import { Input } from "@/shared/ui/Input";
import { useState, type ChangeEvent } from "react";

export function SearchContent() {
  const { set, activeValue } = useUrlFilter({
    paramName: "keywords",
    mode: "single",
  });

  const [inputValue, setInputValue] = useState(activeValue ?? "");
  const [prevActiveValue, setPrevActiveValue] = useState(activeValue);

  if (activeValue !== prevActiveValue) {
    setInputValue(activeValue);
    setPrevActiveValue(activeValue);
  }

  const debouncedSetUrl = useDebouncedCallback((value: string) => {
    set(value);
  }, 500);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    setInputValue(v);
    debouncedSetUrl(v);
  };

  return (
    <Input
      value={inputValue}
      onChange={handleInputChange}
      placeholder="Введите запрос"
    />
  );
}
