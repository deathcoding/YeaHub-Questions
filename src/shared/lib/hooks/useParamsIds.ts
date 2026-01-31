import { useSearchParams } from "react-router";

interface UseParamsIdsReturn {
  specializationIds: number[];
  skillsIds: number[];
  rateIds: number[];
  complexityIds: number[];
}

export function useParamsIds(): UseParamsIdsReturn {
  const [searchParams] = useSearchParams();

  const parseNumericParams = (key: string): number[] => {
    return searchParams
      .getAll(key)
      .map(Number)
      .filter((id) => !isNaN(id));
  };

  return {
    specializationIds: parseNumericParams("specialization"),
    skillsIds: parseNumericParams("skills"),
    rateIds: parseNumericParams("rate"),
    complexityIds: parseNumericParams("complexity"),
  };
}
