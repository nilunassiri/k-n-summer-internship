import { useState, useContext } from "react";
import DataContext from "../context/DataContext";
import { useNavigate } from "react-router-dom";

const NewOrder = () => {
  const [orderNo, setOrderNo] = useState("");
  const [orderDate, setOrderDate] = useState("");
  const [orderCustomer, setOrderCustomer] = useState("");
  const [trackingNo, setTrackingNo] = useState("");
  const [orderStatus, setOrderStatus] = useState("");
  const [orderConsignee, setOrderConsignee] = useState("");
  const { orders, setOrders } = useContext(DataContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // const newDate = new Date(orderDate);
    // const correctDate = `${newDate.getDate()}/${newDate.getMonth()}/${newDate.getFullYear()}`;
    const newOrder = {
      orderNo: orderNo,
      // date: correctDate,
      date: orderDate,
      customer: orderCustomer,
      trackingNo: trackingNo,
      status: orderStatus,
      consignee: orderConsignee,
    };
    const allOrders = [...orders, newOrder];
    setOrders(allOrders);
    setOrderNo("");
    setOrderDate("");
    setOrderCustomer("");
    setTrackingNo("");
    setOrderStatus("");
    setOrderConsignee("");
    navigate("/");
  };
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
            type="text"
            required
            placeholder="mm/dd/yyyy"
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
