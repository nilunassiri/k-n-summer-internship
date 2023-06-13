import React from "react";

const NewOrder = ({
  handleSubmit,
  orderNo,
  setOrderNo,
  orderDate,
  setOrderDate,
  orderCustomer,
  setOrderCustomer,
  trackingNo,
  setTrackingNo,
  orderStatus,
  setOrderStatus,
  orderConsignee,
  setOrderConsignee,
}) => {
  return (
    <main className="NewOrder">
      <form className="NewOrderForm" onSubmit={handleSubmit}>
        <div className="card">
          <label htmlFor="orderNo">Order No:</label>
          <input
            id="orderNo"
            type="text"
            required
            value={orderNo}
            onChange={(e) => setOrderNo(e.target.value)}
          />
          <label htmlFor="orderDate">Date:</label>
          <input
            id="orderDate"
            type="date"
            required
            value={orderDate}
            onChange={(e) => setOrderDate(e.target.value)}
          />
          <label htmlFor="orderCustomer">Customer:</label>
          <input
            id="orderCustomer"
            type="text"
            required
            value={orderCustomer}
            onChange={(e) => setOrderCustomer(e.target.value)}
          />
          <label htmlFor="trackingNo">Tracking No:</label>
          <input
            id="trackingNo"
            type="text"
            required
            value={trackingNo}
            onChange={(e) => setTrackingNo(e.target.value)}
          />
          <label htmlFor="orderStatus">Status:</label>
          <input
            id="orderStatus"
            type="text"
            required
            value={orderStatus}
            onChange={(e) => setOrderStatus(e.target.value)}
          />
          <label htmlFor="orderConsignee">Consignee:</label>
          <input
            id="orderConsignee"
            type="text"
            required
            value={orderConsignee}
            onChange={(e) => setOrderConsignee(e.target.value)}
          />
          <button className="btn btnPrimary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </main>
  );
};

export default NewOrder;
