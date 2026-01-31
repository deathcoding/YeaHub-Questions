import { NavLink } from "react-router";
import styles from "./Auth.module.css";

export function Auth() {
  return (
    <div className={styles.authLinks}>
      <NavLink className={styles.loginLink} to={"/auth/login"}>
        Вход
      </NavLink>
      <NavLink className={styles.registerButton} to={"/auth/register"}>
        Регистрация
      </NavLink>
    </div>
  );
}
