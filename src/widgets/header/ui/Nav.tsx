import { NavLink } from "react-router";

export default function Nav() {
  return (
    <nav>
      <NavLink to="/">База вопросов</NavLink>
      <NavLink to="/quiz">Тренажер</NavLink>
    </nav>
  );
}
