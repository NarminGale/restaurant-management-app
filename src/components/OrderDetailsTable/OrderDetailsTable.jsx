import "./OrderDetailsTable.scss";

import { useParams } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

import {
  useGetOrderByIdQuery,
  useUpdateOrderItemsMutation,
} from "../../services/ordersSlice/ordersSlice";
import { padZero } from "../../common/utils/helpers";

export default function OrderDetailsTable() {
  const { orderId } = useParams();

  // get order by id
  const { data: order } = useGetOrderByIdQuery(orderId);

  const [updateOrderItems] = useUpdateOrderItemsMutation();
  const handleDeleteOrder = async (id) => {
    const newOrderItems = order.orderItems.map((item) => {
      console.log(item, "item");
      if (item.orderId === id) {
        return { ...item, status: "Cancelled", waitingTime: "cancelled" };
      } else {
        return item;
      }
    });

    // const orderItemCounts = newOrderItems.length;

    /*    const acceptedOrderItems = newOrderItems.filter(
          (item) => item?.status === "Accepted"
        ).length;

        const cancelledOrderItems = newOrderItems.filter(
          (item) => item?.status === "Cancelled"
        ).length;*/
    /*
        const orderStatus =
          orderItemCounts === acceptedOrderItems
            ? "Delivered"
            : orderItemCounts === cancelledOrderItems
            ? "Cancelled"
            : "Pending";*/

    await updateOrderItems({
      id: order.id,
      orderItems: newOrderItems,
    });
  };
  const dateDiff = (startDate, endDate = new Date()) => {
    const diffInMs = endDate.getTime() - startDate.getTime();
    return Math.floor(diffInMs / (1000 * 60));
  };
  const handleServeOrder = async (id) => {
    const newOrderItems = order.orderItems.map((item) => {
      console.log(item, "item");
      if (item.orderId === id) {
        return {
          ...item,
          status: "Served",
          waitingTime: dateDiff(new Date(item.orderTime)),
        };
      } else {
        return item;
      }
    });

    await updateOrderItems({
      id: order.id,
      orderItems: newOrderItems,
    });
  };

  return (
    <Table bordered hover className="data-table">
      <thead className="data-table--header">
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

            return (
              <tr key={meal.orderId}>
                <td className="fw-bold ps-4">{meal.orderId}</td>
                <td>{meal.name}</td>
                <td>{meal.quantity}</td>
                <td>${meal.amount}</td>
                <td>{orderTime}</td>
                <td>{meal.waitingTime}</td>
                <td>{meal.status}</td>
                <td>
                  <div className="d-flex gap-3 align-items-center">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="border-0 status-btn"
                      onClick={() => handleDeleteOrder(meal.orderId)}
                    >
                      Cancel
                    </Button>
                    <Button
                      size="sm"
                      variant="success"
                      className="border-0 status-btn"
                      onClick={() => handleServeOrder(meal.orderId)}
                    >
                      Serve
                    </Button>
                  </div>
                </td>
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
}
