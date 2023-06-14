import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import NewOrder from "./Pages/NewOrder";
import OrderPage from "./Pages/OrderPage";
import EditOrder from "./Pages/EditOrder";
import About from "./Pages/About";
import Missing from "./Pages/Missing";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const API_URL = "https://my.api.mockaroo.com/shipments.json?key=5e0b62d0";
  // const API_URL = "http://localhost:3500/orders/";

  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState("");
  const [seachResult, setSearchResult] = useState([]);

  const [orderNo, setOrderNo] = useState("");
  const [orderDate, setOrderDate] = useState("");
  const [orderCustomer, setOrderCustomer] = useState("");
  const [trackingNo, setTrackingNo] = useState("");
  const [orderStatus, setOrderStatus] = useState("");
  const [orderConsignee, setOrderConsignee] = useState("");

  const [editOrderNo, setEditOrderNo] = useState("");
  const [editDate, setEditDate] = useState("");
  const [editCustomer, setEditCustomer] = useState("");
  const [editTrackingNo, setEditTrackingNo] = useState("");
  const [editStatus, setEditStatus] = useState("");
  const [editConsignee, setEditConsignee] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(API_URL);
        setOrders(response.data);
      } catch (err) {
        if (err.response) {
          console.log(err.response.date);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    };

    setTimeout(() => {
      fetchOrders();
    }, 2000);
  }, []);

  useEffect(() => {
    const filteredResults = orders.filter(
      (item) =>
        item.orderNo.includes(search) ||
        item.date.includes(search) ||
        item.customer.toLowerCase().includes(search.toLowerCase()) ||
        item.trackingNo.includes(search) ||
        item.status.toLowerCase().includes(search.toLowerCase()) ||
        item.consignee.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResult(filteredResults.reverse());
  }, [orders, search]);

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

  const handleEdit = (id) => {
    // const newDate = new Date(editDate);
    // const correctDate = `${newDate.getDate()}/${newDate.getMonth()}/${newDate.getFullYear()}`;
    const updatedOrder = {
      orderNo: editOrderNo,
      // date: correctDate,
      date: editDate,
      customer: editCustomer,
      trackingNo: editTrackingNo,
      status: editStatus,
      consignee: editConsignee,
    };
    const allOrders = orders.map((item) =>
      item.orderNo === id ? updatedOrder : item
    );
    setOrders(allOrders);
    setEditOrderNo("");
    setEditDate("");
    setEditCustomer("");
    setEditTrackingNo("");
    setEditStatus("");
    setEditConsignee("");
    navigate("/");
  };

  const handleDelete = (id) => {
    const orderList = orders.filter((item) => item.orderNo !== id);
    setOrders(orderList);
    navigate("/");
  };
  return (
    <div className="App">
      <Header title="Kuehne-Nagel Shipment" />
      <Nav search={search} setSearch={setSearch} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              orders={seachResult}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          }
        />
        <Route
          path="/order"
          element={
            <NewOrder
              handleSubmit={handleSubmit}
              orderNo={orderNo}
              setOrderNo={setOrderNo}
              orderDate={orderDate}
              setOrderDate={setOrderDate}
              orderCustomer={orderCustomer}
              setOrderCustomer={setOrderCustomer}
              trackingNo={trackingNo}
              setTrackingNo={setTrackingNo}
              orderStatus={orderStatus}
              setOrderStatus={setOrderStatus}
              orderConsignee={orderConsignee}
              setOrderConsignee={setOrderConsignee}
            />
          }
        />
        <Route
          path="/edit/:id"
          element={
            <EditOrder
              orders={orders}
              handleEdit={handleEdit}
              editOrderNo={editOrderNo}
              setEditOrderNo={setEditOrderNo}
              editDate={editDate}
              setEditDate={setEditDate}
              editCustomer={editCustomer}
              setEditCustomer={setEditCustomer}
              editTrackingNo={editTrackingNo}
              setEditTrackingNo={setEditTrackingNo}
              editStatus={editStatus}
              setEditStatus={setEditStatus}
              editConsignee={editConsignee}
              setEditConsignee={setEditConsignee}
            />
          }
        />
        <Route
          path="/order/:id"
          element={<OrderPage orders={orders} handleDelete={handleDelete} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
