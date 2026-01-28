import styles from "./FilterButtonList.module.css";
import { memo, useState, type ReactNode } from "react";

interface FilterButtonListProps<T> {
  items: T[];
  renderItem: (item: T) => ReactNode;
  initialVisibleItems: number;
}

const FilterButtonListInner = <T,>({
  items,
  renderItem,
  initialVisibleItems,
}: FilterButtonListProps<T>) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const hasMore = items.length > initialVisibleItems;

  const visibleItems = isExpanded ? items : items.slice(0, initialVisibleItems);

  const toggleExpand = () => setIsExpanded((prev) => !prev);

  return (
    <>
      <div className={styles.container}>
        {visibleItems.map((item) => renderItem(item))}
      </div>
      {hasMore && (
        <button onClick={toggleExpand} className={styles.button}>
          Показать все
        </button>
      )}
    </>
  );
};

export const FilterButtonList = memo(
  FilterButtonListInner,
) as typeof FilterButtonListInner;
