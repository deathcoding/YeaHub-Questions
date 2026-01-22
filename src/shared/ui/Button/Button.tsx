import type { ReactNode } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  className?: string;
  variant?: "primary" | "outline";
  type?: "button" | "submit" | "reset" | undefined;
}

export function Button({
  children,
  onClick,
  variant,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={variant === "primary" ? styles.primary : styles.outline}
      {...props}
    >
      {children}
    </button>
  );
}
