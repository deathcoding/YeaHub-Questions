export const removeEmptyParams = (params: Record<string, unknown>) => {
  const cleanParams: Record<string, unknown> = {};

  Object.entries(params).forEach(([key, value]) => {
    if (value === null || value === undefined || value === "") return;

    if (Array.isArray(value) && value.length === 0) return;

    cleanParams[key] = value;
  });

  return cleanParams;
};
