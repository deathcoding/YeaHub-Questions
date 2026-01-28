import { useCallback, useRef } from "react";
import { useSearchParams } from "react-router";

type FilterMode = "single" | "multiple";

interface UseUrlFilterProps {
  paramName: string;
  mode: FilterMode;
  resetParams?: string[];
}

export function useUrlFilter({
  paramName,
  mode,
  resetParams,
}: UseUrlFilterProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  // ref для стабильности, чтобы не вызывать бесконечного цикла ререндеров.
  // Если условный разработчик передаст resetParams инлайново, как ['skills] например.

  const resetParamsRef = useRef(resetParams);
  resetParamsRef.current = resetParams;

  const activeValues = searchParams.getAll(paramName);

  const toggle = useCallback(
    (value: string | string[]) => {
      setSearchParams((prev) => {
        const next = new URLSearchParams(prev);
        const valuesToToggle = Array.isArray(value) ? value : [value];

        if (mode === "single") {
          toggleSingleValue(next, paramName, valuesToToggle[0]);
        } else {
          valuesToToggle.forEach((val) => {
            toggleMultipleValue(next, paramName, val);
          });
        }
        next.delete("page");
        resetParamsRef.current?.forEach((key) => next.delete(key));

        return next;
      });
    },
    [mode, paramName, setSearchParams],
  );

  const set = useCallback(
    (value: string | number | null) => {
      setSearchParams((prev) => {
        const next = new URLSearchParams(prev);
        if (value === null || value === "") {
          next.delete(paramName);
        } else {
          next.set(paramName, String(value));
        }
        next.delete("page");

        resetParamsRef.current?.forEach((key) => next.delete(key));
        return next;
      });
    },
    [paramName, setSearchParams],
  );

  return {
    toggle,
    set,
    activeValues,
    activeValue: activeValues[0] || "",
  };
}

const toggleSingleValue = (
  params: URLSearchParams,
  key: string,
  value: string,
) => {
  const currentValue = params.get(key);
  if (currentValue === value) {
    params.delete(key);
  } else {
    params.set(key, value);
  }
};

const toggleMultipleValue = (
  params: URLSearchParams,
  key: string,
  value: string,
) => {
  const currentValues = params.getAll(key);
  if (currentValues.includes(value)) {
    params.delete(key);
    currentValues
      .filter((v) => v !== value)
      .forEach((v) => params.append(key, v));
  } else {
    params.append(key, value);
  }
};
