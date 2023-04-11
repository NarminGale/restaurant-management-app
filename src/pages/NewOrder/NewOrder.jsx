import "./NewOrder.scss";

import { Col, Container, Row } from "react-bootstrap";

import BackLink from "../../components/BackLink";
import CreateOrderForm from "../../components/CreateOrderForm";

export default function NewOrder() {
  return (
    <Container className="px-5 py-4 d-flex flex-column gap-5">
      <Row>
        <Col>
          <BackLink />
        </Col>
      </Row>
      <Row>
        <Col>
          <CreateOrderForm />
        </Col>
      </Row>
    </Container>
  );
}
