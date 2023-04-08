import "./InfoCard.scss";
import Card from "react-bootstrap/Card";

export default function InfoCard({ title, number, icon }) {
  return (
    <Card className="info-card border-0 rounded-4">
      <Card.Body className="d-flex justify-content-between align-items-center">
        <div>
          <Card.Subtitle className="mb-2 text-muted info-card--title">
            {title}
          </Card.Subtitle>
          <Card.Title className="fw-bold fs-2">{number}</Card.Title>
        </div>

        <Card.Text>
          <span className="info-card--icon">
            <img src={icon} alt="cart icon" />
          </span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
