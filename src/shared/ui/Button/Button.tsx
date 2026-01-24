import type { ReactNode } from "react";
import styles from "./Button.module.css";
import clsx from "clsx";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  variant?: "primary" | "outline";
}

export function Button({ children, onClick, variant, ...props }: ButtonProps) {
  const buttonClasses = clsx(
    styles.button,
    variant && styles[variant], 
  );
  
  return (
      <button
        onClick={onClick}
        className={buttonClasses}
        {...props}
      >
        {children}
      </button>
    
  );
}
