import { useState, type ReactNode } from "react";
import chevroneUp from "@/shared/assets/icons/Chevrone_Up.svg";
import chevroneDown from "@/shared/assets/icons/Chevrone_Down.svg";
import styles from "./Accordion.module.css";

interface AccordionProps {
  title: string;
  children?: ReactNode;
}

export function Accordion({ title, children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen((prev) => !prev);

  return (
    <div className={styles.container}>
      <div onClick={handleOpen} className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <span>
          {isOpen ? (
            <img src={chevroneUp} alt="Свернуть информацию" />
          ) : (
            <img src={chevroneDown} alt="Раскрыть информацию" />
          )}
        </span>
      </div>
      {isOpen && <div className={styles.children}>{children}</div>}
    </div>
  );
}
