import { useCallback } from "react";
import { useSearchParams } from "react-router";

interface UseUrlFilterProps {
  paramName: string;
  mode: FilterMode;
  resetParams?: string[];
}

type FilterMode = "single" | "multiple";

export function useUrlFilter({
  paramName,
  mode,
  resetParams,
}: UseUrlFilterProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  const activeValues = searchParams.getAll(paramName);
  
  const toggle = useCallback(
    (value: string | string[]) => {
      
      setSearchParams((prev) => {
        const next = new URLSearchParams(prev);
       
        const valuesToToggle = Array.isArray(value) ? value : [value];
      

        if (mode === "single") {
          const rawValue = valuesToToggle[valuesToToggle.length - 1];
          const lastValue = String(rawValue);
          toggleSingleValue(next, paramName, lastValue);
        } else {
          valuesToToggle.forEach((v) => {
            toggleMultipleValue(next, paramName, String(v));
          });
        }

        next.delete("page");

        if (resetParams) {
          resetParams.forEach((key) => next.delete(key));
        }

        return next;
      });
    },
    [mode, paramName, setSearchParams, resetParams],
  );

  return {
    toggle,
    activeValues,
    activeValue: activeValues[0],
  };
}

const toggleSingleValue = (
  params: URLSearchParams,
  key: string,
  value: string,
): void => {
  const currentValue = params.get(key);

  if (currentValue === value) {
    params.delete(key);
    return;
  }
 
  params.set(key, value);
};

const toggleMultipleValue = (
  params: URLSearchParams,
  key: string,
  value: string,
): void => {
  const currentValues = params.getAll(key);

  if (!currentValues.includes(value)) {
    params.append(key, value);
    return;
  }

  params.delete(key);

  const newValues = currentValues.filter((v) => v !== value);
  newValues.forEach((v) => params.append(key, v));
};
