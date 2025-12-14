import Container from "@/shared/ui/container/Container";
import HeaderStyles from "./Header.module.css";
import Nav from "./Nav";

export function Header() {
  return (
    <header className={HeaderStyles.header}>
      <Container>
        <Nav />
      </Container>
    </header>
  );
}
