import HeaderStyles from "./Header.module.css";
import { Nav } from "./Nav";
import { Auth } from "./Auth";
import { Container } from "@/shared/ui/container";

export function Header() {
  return (
    <header className={HeaderStyles.header}>
      <Container>
        <nav className={HeaderStyles.nav}>
          <Nav />
          <Auth />
        </nav>
      </Container>
    </header>
  );
}
