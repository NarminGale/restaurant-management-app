import { Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

export default function Order() {
  const { orderId } = useParams();

  console.log(orderId, "orderId");
  return (
    <Container className="p-5">
      <Row>
        <Col>
          <Link to="/orders">Back to orders</Link>
        </Col>
      </Row>
      <Row>
        <Col>{orderId} yess</Col>
      </Row>
    </Container>
  );
}
