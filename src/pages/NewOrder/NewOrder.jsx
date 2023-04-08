import "./NewOrder.scss";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

import CreateOrderForm from "../../components/CreateOrderForm";
import arrowLeft from "../../assets/svg-icons/arrow-left.svg";

export default function NewOrder() {
  return (
    <Container className="px-5 py-4 d-flex flex-column gap-5">
      <Row>
        <Col>
          <Link
            to="/orders"
            className="left-arrow text-decoration-none text-black"
          >
            <span className="d-inline-block left-arrow--icon me-2">
              <img
                src={arrowLeft}
                alt="arrow left icon"
                className="w-100 h-100"
              />
            </span>
            <span className="left-arrow--text py-1">Back to orders</span>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col>
          {/*<AddOrderForm />*/}
          <CreateOrderForm />
        </Col>
      </Row>
    </Container>
  );
}
