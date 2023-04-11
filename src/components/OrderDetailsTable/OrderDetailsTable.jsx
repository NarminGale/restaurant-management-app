import "./OrderDetailsTable.scss";

import { useParams } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

import {
  useGetOrderByIdQuery,
  useUpdateOrderItemsMutation,
} from "../../services/ordersSlice/ordersSlice";
import { padZero, getStatusTextVariant } from "../../common/utils/helpers";

export default function OrderDetailsTable() {
  const { orderId } = useParams();

  const { data: order } = useGetOrderByIdQuery(orderId);
  const [updateOrderItems] = useUpdateOrderItemsMutation();

  const dateDiff = (startDate, endDate = new Date()) => {
    const diffInMs = endDate.getTime() - startDate.getTime();
    return Math.round(diffInMs / (1000 * 60));
  };

  const handleActionButtonClick = async (id, action) => {
    const newOrderItems = order.orderItems.map((item) =>
      item.orderId === id
        ? {
            ...item,
            status: action === "serve" ? "Served" : "Cancelled",
            waitingTime:
              action === "serve"
                ? dateDiff(new Date(item.orderTime))
                : "cancelled",
          }
        : item
    );

    const totalAmount = newOrderItems.reduce(
      (acc, item) => (item.status === "Served" ? acc + item.amount : acc),
      0
    );

    await updateOrderItems({
      id: order.id,
      amount: totalAmount,
      orderItems: newOrderItems,
    });

    console.log(
      {
        id: order.id,
        amount: totalAmount,
        orderItems: newOrderItems,
      },
      "updateOrderItems"
    );
  };

  return (
    <Table bordered hover className="details-table">
      <thead className="details-table--header">
        <tr>
          <th className="py-3 ps-4">Id</th>
          <th className="py-3">Meal Name</th>
          <th className="py-3">Quantity</th>
          <th className="py-3">Amount</th>
          <th className="py-3">Order time</th>
          <th className="py-3">Waiting time</th>
          <th className="py-3 pe-4">Status</th>
          <th className="py-3 pe-4">Actions</th>
        </tr>
      </thead>
      <tbody>
        {order &&
          order.orderItems?.map((meal) => {
            // calculate total amount
            const newDate = new Date(meal.orderTime);
            const orderTime =
              padZero(newDate.getHours()) + ":" + padZero(newDate.getMinutes());

            const waitingTime =
              typeof meal.waitingTime === "number"
                ? `${meal.waitingTime} ${meal.waitingTime > 1 ? "mins" : "min"}`
                : meal.waitingTime;

            return (
              <tr key={meal.orderId}>
                <td className="fw-bold ps-4">{meal.orderId}</td>
                <td>{meal.name}</td>
                <td>{meal.quantity}</td>
                <td>${meal.amount}</td>
                <td>{orderTime}</td>
                <td>{waitingTime}</td>
                <td>
                  <small className={getStatusTextVariant(meal.status)}>
                    {meal.status}
                  </small>
                </td>
                <td>
                  <div className="d-flex gap-3 align-items-center">
                    {meal.status === "Pending" ? (
                      <>
                        <Button
                          size="sm"
                          variant="secondary"
                          className="border-0"
                          onClick={() =>
                            handleActionButtonClick(meal.orderId, "cancel")
                          }
                        >
                          Cancel
                        </Button>
                        <Button
                          size="sm"
                          variant="success"
                          className="border-0"
                          onClick={() =>
                            handleActionButtonClick(meal.orderId, "serve")
                          }
                        >
                          Serve
                        </Button>
                      </>
                    ) : (
                      <div className="text-decoration-underline">
                        {meal.status}
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
}
