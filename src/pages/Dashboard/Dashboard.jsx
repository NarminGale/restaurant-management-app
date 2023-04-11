import { useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";

import InfoCard from "../../components/InfoCard";
import orderIcon from "../../assets/svg-icons/food.svg";
import dollarIcon from "../../assets/svg-icons/dollar-symbol.svg";

export default function Dashboard() {
  const ordersQuantity = useSelector((state) => state.totalOrders.quantity);
  const ordersAmount = useSelector((state) => state.totalOrders.amount);

  return (
    <Container className="pt-2 pt-xl-3">
      <Row>
        <Col xs={12} sm={12} md={12} lg={6}>
          <InfoCard
            title="total orders"
            number={ordersQuantity}
            icon={orderIcon}
          />
        </Col>
        <Col xs={12} sm={12} md={12} lg={6} className="mt-4 mt-lg-0">
          <InfoCard
            title="total revenue"
            number={`$${ordersAmount}`}
            icon={dollarIcon}
          />
        </Col>
      </Row>
    </Container>
  );
}
