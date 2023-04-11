import { Col, Container, Row } from "react-bootstrap";

import Button from "react-bootstrap/Button";

import BackLink from "../../components/BackLink";
import AddOrderForm from "../../components/AddOrderForm";
import OrderDetailsTable from "../../components/OrderDetailsTable";

export default function Order() {
  return (
    <Container className="px-5 py-4 d-flex flex-column gap-5">
      <Row>
        <Col>
          <BackLink />
        </Col>
      </Row>
      <Row>
        <Col>
          <AddOrderForm />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <OrderDetailsTable />
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <h3>Amount sum</h3>
        </Col>
        <Col xs={6}>
          <h3>$33</h3>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-end align-items-end">
          <Button variant="danger" size="lg" className="border-0">
            Complete Order
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
