import type { ChangeEvent } from "react";
import Search from "@/shared/assets/icons/Search.svg";
import styles from "./Input.module.css";

interface InputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export function Input({ value, onChange, placeholder }: InputProps) {
  return (
    <div className={styles.container}>
      <img src={Search} alt="Лупа" className={styles.searchImage} />
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}
