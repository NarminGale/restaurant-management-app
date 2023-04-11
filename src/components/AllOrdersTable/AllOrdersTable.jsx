import "./AllOrdersTable.scss";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

import {
  formattedDate,
  getStatusButtonVariant,
} from "../../common/utils/helpers";
import { useGetOrdersQuery } from "../../services/ordersSlice/ordersSlice";
import { totalOrdersSlice } from "../../features/totalOrders/totalOrdersSlice";

export default function AllOrdersTable() {
  const dispatch = useDispatch();

  const { data: orders } = useGetOrdersQuery();

  useEffect(() => {
    console.log(orders, "orders");
    dispatch(totalOrdersSlice.actions.setQuantity(orders?.length));

    const ordersAmount = orders?.reduce((acc, order) => acc + order.amount, 0);
    dispatch(totalOrdersSlice.actions.setAmount(ordersAmount));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orders]);

  return (
    <Table bordered hover className="data-table">
      <thead className="data-table--header">
        <tr>
          <th className="py-3 ps-4">Order ID</th>
          <th className="py-3">Table Number</th>
          <th className="py-3">Waiter Name</th>
          <th className="py-3">Status</th>
          <th className="py-3">Amount</th>
          <th className="py-3">Completed Date</th>
          <th className="py-3 pe-4">Info</th>
        </tr>
      </thead>
      <tbody>
        {orders?.map((order, index) => {
          return (
            <tr key={order.id}>
              <td className="fw-bold ps-4">{++index}</td>
              <td>{order.tableNumber}</td>
              <td>{order.waiter}</td>
              <td>
                <Button
                  size="sm"
                  variant={getStatusButtonVariant(order.status)}
                  className="border-0 status-btn"
                >
                  {order.status}
                </Button>
              </td>
              <td>${order.amount}</td>
              <td>
                {order.deliveredDate === null
                  ? "-------------"
                  : formattedDate(order.deliveredDate)}
              </td>
              <td className="fw-bold pe-4">
                <Link
                  to={`/orders/${order.id}`}
                  className="text-decoration-none"
                >
                  <Button className="w-100 info-btn border-0">More</Button>
                </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
