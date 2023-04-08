import { Col, Container, Row } from "react-bootstrap";
import InfoCard from "../../components/InfoCard";

import orderIcon from "../../assets/svg-icons/food.svg";
import dollarIcon from "../../assets/svg-icons/dollar-symbol.svg";

export default function Dashboard() {
  return (
    <Container className="px-5 py-4">
      <Row>
        <Col xs={12} sm={12} md={6}>
          <InfoCard title="total orders" number="274" icon={orderIcon} />
        </Col>
        <Col xs={12} sm={12} md={6} className="mt-4 mt-md-0">
          <InfoCard title="total revenue" number="$ 22,350" icon={dollarIcon} />
        </Col>
      </Row>
    </Container>
  );
}