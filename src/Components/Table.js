import React from "react";
import OrderItem from "./OrderItem";

const Table = ({ orders, handleDelete, handleEdit }) => {
  return (
    <table className="Table">
      <thead>
        <tr>
          <th scope="col">Order No</th>
          <th scope="col">Date</th>
          <th scope="col">Customer</th>
          <th scope="col">Tracking No</th>
          <th scope="col">Status</th>
          <th scope="col">Consignee</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((item) => (
          <OrderItem
            key={item.orderNo}
            item={item}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
