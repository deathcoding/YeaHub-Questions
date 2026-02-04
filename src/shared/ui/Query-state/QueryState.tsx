import type { ReactNode } from "react";

interface QueryStateProps {
  isLoading: boolean;
  isError: boolean;
  loadingMessage?: string;
  errorMessage?: string;
  loadingFallback?: ReactNode;
  children: ReactNode;
}

const DEFAULT_LOADING = "Загрузка...";
const DEFAULT_ERROR = "Запрос завершился с ошибкой. Проверьте доступ к API.";

export function QueryState({
  isLoading,
  isError,
  loadingMessage = DEFAULT_LOADING,
  errorMessage = DEFAULT_ERROR,
  loadingFallback,
  children,
}: QueryStateProps) {
  if (isLoading) return <>{loadingFallback ?? <p>{loadingMessage}</p>}</>;
  if (isError) return <p>{errorMessage}</p>;
  return <>{children}</>;
}
