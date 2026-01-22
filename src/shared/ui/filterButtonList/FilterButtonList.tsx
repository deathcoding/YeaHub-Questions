// shared/ui/FilterButtonList.tsx
import { memo, type ReactNode } from "react";

// interface RenderItemProps<T> {
//   item: T;
//   // Мы убираем внутреннее вычисление isActive, 
//   // перекладывая ответственность на вызывающий код
// }

interface FilterButtonListProps<T> {
  filterValues: T[];
  getKey: (item: T) => string | number;
  renderItem: (item: T) => ReactNode; // Упрощаем сигнатуру
  className?: string;
}

const FilterButtonListInner = <T,>({
  filterValues,
  getKey,
  renderItem,
  className,
}: FilterButtonListProps<T>) => {
  return (
    <div className={className}>
      {filterValues.map((item) => (
        <div key={getKey(item)}>
          {renderItem(item)}
        </div>
      ))}
    </div>
  );
};

export const FilterButtonList = memo(FilterButtonListInner) as typeof FilterButtonListInner;