import { useNavigate } from "react-router";
import styles from "./BackButton.module.css";
import Arrow_Left from "@/shared/assets/icons/Arrow_Left.svg";
import clsx from "clsx";

interface BackButtonProps {
  fallbackPath: string;
  children?: React.ReactNode;
  className?: string;
}

export function BackButton({
  fallbackPath,
  children,
  className,
}: BackButtonProps) {
  const navigate = useNavigate();

  const buttonClasses = clsx(styles.button, className);

  const handleBack = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate(fallbackPath);
    }
  };

  return (
    <button onClick={handleBack} className={buttonClasses}>
      <img src={Arrow_Left} alt="back button image" />
      {children || "Назад"}
    </button>
  );
}
