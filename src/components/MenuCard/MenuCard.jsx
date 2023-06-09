import "./MenuCard.scss";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { capitalizeWords } from "../../common/utils/helpers";
import { useNavigate } from "react-router-dom";

export default function MenuCard({ meal }) {
  const price = meal.price;
  const navigate = useNavigate();

  /*  const [count, setCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(price);*/

  /*  const handleAdd = () => {
    setCount(count + 1);
    setTotalPrice(totalPrice + price);
  };

  const handleRemove = () => {
    if (count > 1) {
      setTotalPrice(totalPrice - price);
      setCount(count - 1);
    } else {
      setCount(1);
    }
  };*/

  return (
    <Card className="mb-5">
      <Card.Img variant="top" src={meal.imgUrl} />
      <Card.Body>
        <div className="card-body-header d-flex justify-content-between align-items-center mb-3">
          <Card.Title className="mb-0">{capitalizeWords(meal.name)}</Card.Title>
          <span className="bg-warning rounded-2 p-1 fw-bold">${price}</span>
        </div>
        {/* <Card.Text>
          <span>Total price: </span>
          <span className="fw-bold text-danger">${totalPrice}</span>
        </Card.Text>*/}
        <div className="d-flex justify-content-between align-items-center">
          <Button
            className="w-100"
            variant="warning"
            onClick={() => navigate(`/orders/new`)}
          >
            Add
          </Button>
          {/*<div>
            <Button size="sm" variant="outline-primary" onClick={handleRemove}>
              -
            </Button>
            <span className="mx-2">{count}</span>
            <Button size="sm" variant="outline-primary" onClick={handleAdd}>
              +
            </Button>
          </div>*/}
        </div>
      </Card.Body>
    </Card>
  );
}
