import "./Orders.scss";

import { Link, useHref } from "react-router-dom";
import { Col, Container, Row, Button } from "react-bootstrap";

import DataTable from "../../components/DataTable";
import shoppingCart from "../../assets/svg-icons/cart-fill.svg";
export default function Orders() {
  const url = useHref(undefined, undefined);
  const newOrderUrl = `${url}/new`;

  return (
    <Container className="py-3">
      <Row>
        <Col>
          <div className="d-flex justify-content-end align-items-end mb-4">
            <Link to={newOrderUrl} className="text-decoration-none text-black">
              <Button
                className="btn fw-bold rounded-5 d-flex align-items-center gap-2 px-3 py-2"
                variant="warning"
              >
                <img src={shoppingCart} alt="shopping cart icon" />
                <span>Add New Order</span>
              </Button>
            </Link>
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <DataTable />
        </Col>
      </Row>
    </Container>
  );
}
