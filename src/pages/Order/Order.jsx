import { Col, Container, Row } from "react-bootstrap";

import Button from "react-bootstrap/Button";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import BackLink from "../../components/BackLink";
import AddOrderForm from "../../components/AddOrderForm";
import OrderDetailsTable from "../../components/OrderDetailsTable";
import { useNavigate, useParams } from "react-router-dom";
import {
  useDeleteOrderMutation,
  useGetOrderByIdQuery,
  useUpdateOrderMutation,
} from "../../services/ordersSlice/ordersSlice";
import { pageTitleSlice } from "../../features/pageTitle/pageTitleSlice";

export default function Order() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { orderId } = useParams();
  const { data: order } = useGetOrderByIdQuery(orderId);

  const [updateOrder] = useUpdateOrderMutation();
  const [deleteOrder] = useDeleteOrderMutation();

  const handleButtonClick = async () => {
    if (order?.orderItems) {
      // check if all order items status are pending
      const allPending = order.orderItems.some(
        (item) => item.status === "Pending"
      );

      if (allPending) {
        return alert("Please serve or cancel order meals first!");
      }

      const orderStatus = order.orderItems.every(
        (item) => item.status === "Cancelled"
      )
        ? "Cancelled"
        : "Delivered";

      const deliveredDate = orderStatus === "Delivered" ? new Date() : null;

      await updateOrder({
        ...order,
        id: order.id,
        status: orderStatus,
        deliveredDate: deliveredDate,
      });
    } else {
      await deleteOrder(order.id);
    }

    navigate("/orders");
  };

  useEffect(() => {
    dispatch(pageTitleSlice.actions.setTitle("Order details"));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container className="px-5 py-4 d-flex flex-column gap-5">
      <Row>
        <Col>
          <BackLink />
        </Col>
      </Row>
      <Row>
        <Col>{order?.status === "Pending" && <AddOrderForm />}</Col>
      </Row>
      <Row>
        <Col xs={12}>
          <OrderDetailsTable />
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <h3>Amount sum:</h3>
        </Col>
        <Col xs={6}>
          <h2>$ {order?.amount}</h2>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-end align-items-end">
          {order?.status === "Pending" && (
            <Button
              variant="danger"
              size="lg"
              className="border-0"
              onClick={() => handleButtonClick()}
            >
              {order?.orderItems ? "Complete Order" : "Cancel Order"}
            </Button>
          )}
        </Col>
      </Row>
    </Container>
  );
}
