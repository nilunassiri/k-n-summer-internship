import React from "react";
import { Link } from "react-router-dom";
import { FaTrashAlt, FaEdit, FaEye } from "react-icons/fa";

const OrderItem = ({ item, handleDelete }) => {
  return (
    <tr key={item.orderNo}>
      <td>{item.orderNo}</td>
      <td>{item.date}</td>
      <td>{item.customer}</td>
      <td>{item.trackingNo}</td>
      <td>{item.status}</td>
      <td>{item.consignee}</td>
      <td>
        <section className="btnGroup">
          <Link className="btn btnPrimary" to={`/order/${item.orderNo}`}>
            <FaEye />
          </Link>
          <Link className="btn btnWarning">
            <FaEdit />
          </Link>
          <button
            className="btn btnDanger"
            onClick={() => handleDelete(item.orderNo)}
          >
            <FaTrashAlt />
          </button>
        </section>
      </td>
    </tr>
  );
};

export default OrderItem;
