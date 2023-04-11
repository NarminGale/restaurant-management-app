import "./Orders.scss";

import { Link, useHref } from "react-router-dom";
import { Col, Container, Row, Button } from "react-bootstrap";

import AllOrdersTable from "../../components/AllOrdersTable";
import shoppingCart from "../../assets/svg-icons/cart-fill.svg";
import { useSelector } from "react-redux";
export default function Orders() {
  const url = useHref(undefined, undefined);
  const newOrderUrl = `${url}/new`;

  const amount = useSelector((state) => state.totalOrders.amount);

  console.log(useSelector((state) => state));
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
          <AllOrdersTable />
        </Col>
      </Row>

      <Row>
        <Col xs={6}>
          <h3>Amount sum:</h3>
        </Col>
        <Col xs={6}>
          <h2>$ {amount}</h2>
        </Col>
      </Row>
    </Container>
  );
}
