import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import DataContext from "../context/DataContext";
import { useSelector } from "react-redux";


import React from "react";

const EditOrder = () => {
  const {
    handleEdit,
    editOrderNo,
    setEditOrderNo,
    editDate,
    setEditDate,
    editCustomer,
    setEditCustomer,
    editTrackingNo,
    setEditTrackingNo,
    editStatus,
    setEditStatus,
    editConsignee,
    setEditConsignee,
  } = useContext(DataContext);
  const orderSlicer = useSelector((state) => state.order);
  const { id } = useParams();
  const order = orderSlicer.value.find((item) => item.orderNo === id);
  useEffect(() => {
    if (order) {
      setEditOrderNo(order.orderNo);
      setEditDate(order.date);
      setEditCustomer(order.customer);
      setEditTrackingNo(order.trackingNo);
      setEditStatus(order.status);
      setEditConsignee(order.consignee);
    }
  }, [
    order,
    setEditOrderNo,
    setEditDate,
    setEditCustomer,
    setEditTrackingNo,
    setEditStatus,
    setEditConsignee,
  ]);

  return (
    <main className="EditOrder">
      {editOrderNo && (
        <>
          <form className="EditOrderForm" onSubmit={(e) => e.preventDefault()}>
            <div className="card">
              <label htmlFor="orderNo">Order No:</label>
              <input
                id="orderNo"
                type="text"
                required
                value={editOrderNo}
                onChange={(e) => setEditOrderNo(e.target.value)}
              />
              <label htmlFor="orderDate">Date:</label>
              <input
                id="orderDate"
                type="text"
                required
                value={editDate}
                onChange={(e) => setEditDate(e.target.value)}
              />
              <label htmlFor="editCustomer">Customer:</label>
              <input
                id="editCustomer"
                type="text"
                required
                value={editCustomer}
                onChange={(e) => setEditCustomer(e.target.value)}
              />
              <label htmlFor="editTrackingNo">Tracking No:</label>
              <input
                id="editTrackingNo"
                type="text"
                required
                value={editTrackingNo}
                onChange={(e) => setEditTrackingNo(e.target.value)}
              />
              <label htmlFor="editStatus">Status:</label>
              <input
                id="editStatus"
                type="text"
                required
                value={editStatus}
                onChange={(e) => setEditStatus(e.target.value)}
              />
              <label htmlFor="editConsignee">Consignee:</label>
              <input
                id="editConsignee"
                type="text"
                required
                value={editConsignee}
                onChange={(e) => setEditConsignee(e.target.value)}
              />
              <button
                className="btn btnPrimary"
                onClick={() => handleEdit(order.orderNo)}
                type="button"
              >
                Submit
              </button>
            </div>
          </form>
        </>
      )}
    </main>
  );
};

export default EditOrder;
