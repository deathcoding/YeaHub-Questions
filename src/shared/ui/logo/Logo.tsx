import logo from "@/shared/assets/images/logo.svg";
import styles from "./Logo.module.css";

export function Logo() {
  return (
    <div className={styles.logo}>
      <img src={logo} alt="logo image" className={styles.logoImage} />
    </div>
  );
}
