import { Logo } from "@/shared/ui/Logo";
import styles from "./Nav.module.css";
import { NavLink } from "react-router";

export function Nav() {
  return (
    <div className={styles.navLinks}>
      <NavLink to="/">
        <Logo />
      </NavLink>
      <NavLink className={styles.link} to="/">
        База вопросов
      </NavLink>
      <NavLink className={styles.link} to="/quiz">
        Тренажер
      </NavLink>
    </div>
  );
}
