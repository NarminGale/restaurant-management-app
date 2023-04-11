import "./Header.scss";

import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
export default function Header() {
  const title = useSelector((state) => state.pageTitle.title);

  return (
    <Container>
      <header>
        <h1 className="mb-0 fs-2 text-capitalize">{title}</h1>
      </header>
    </Container>
  );
}
