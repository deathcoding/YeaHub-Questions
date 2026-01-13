import { Container } from "@/shared/ui/Container";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
}
