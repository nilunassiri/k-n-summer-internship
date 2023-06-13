import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import NewOrder from "./Pages/NewOrder";
import OrderPage from "./Pages/OrderPage";
import About from "./Pages/About";
import Missing from "./Pages/Missing";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [orders, setOrders] = useState([
    {
      orderNo: "zz-450581-11385595-4210084",
      date: "10/16/2019",
      customer: "NXP Semiconductors N.V.",
      trackingNo: "TP-724057-72553473-5647860",
      status: "'In Transit'",
      consignee: "Koppers Holdings Inc.",
    },
    {
      orderNo: "kk-275651-64476049-3346442",
      date: "8/20/2019",
      customer: "Triumph Bancorp, Inc.",
      trackingNo: "TP-011637-13598236-2700556",
      status: "'Delivered'",
      consignee: "Celsius Holdings, Inc.",
    },
    {
      orderNo: "nz-906145-26850629-1813784",
      date: "7/10/2019",
      customer: "Inter Parfums, Inc.",
      trackingNo: "TP-065338-70937481-7664135",
      status: "'Delivered'",
      consignee: "Hovnanian Enterprises Inc",
    },
    {
      orderNo: "aa-450581-11385595-4210084",
      date: "10/16/2019",
      customer: "NXP Semiconductors N.V.",
      trackingNo: "TP-724057-72553473-5647860",
      status: "'In Transit'",
      consignee: "Koppers Holdings Inc.",
    },
    {
      orderNo: "vv-275651-64476049-3346442",
      date: "8/20/2019",
      customer: "Triumph Bancorp, Inc.",
      trackingNo: "TP-011637-13598236-2700556",
      status: "'Delivered'",
      consignee: "Celsius Holdings, Inc.",
    },
    {
      orderNo: "tr-906145-26850629-1813784",
      date: "7/10/2019",
      customer: "Inter Parfums, Inc.",
      trackingNo: "TP-065338-70937481-7664135",
      status: "'Delivered'",
      consignee: "Hovnanian Enterprises Inc",
    },
    {
      orderNo: "lh-450581-11385595-4210084",
      date: "10/16/2019",
      customer: "NXP Semiconductors N.V.",
      trackingNo: "TP-724057-72553473-5647860",
      status: "'In Transit'",
      consignee: "Koppers Holdings Inc.",
    },
    {
      orderNo: "er-275651-64476049-3346442",
      date: "8/20/2019",
      customer: "Triumph Bancorp, Inc.",
      trackingNo: "TP-011637-13598236-2700556",
      status: "'Delivered'",
      consignee: "Celsius Holdings, Inc.",
    },
    {
      orderNo: "bc-906145-26850629-1813784",
      date: "7/10/2019",
      customer: "Inter Parfums, Inc.",
      trackingNo: "TP-065338-70937481-7664135",
      status: "'Delivered'",
      consignee: "Hovnanian Enterprises Inc",
    },
  ]);
  const [search, setSearch] = useState("");
  const [seachResult, setSearchResult] = useState([]);
  const [orderNo, setOrderNo] = useState("");
  const [orderDate, setOrderDate] = useState("");
  const [orderCustomer, setOrderCustomer] = useState("");
  const [trackingNo, setTrackingNo] = useState("");
  const [orderStatus, setOrderStatus] = useState("");
  const [orderConsignee, setOrderConsignee] = useState("");

  const navigate = useNavigate();

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
    const newDate = new Date(orderDate);
    const correctDate = `${newDate.getDate()}/${newDate.getMonth()}/${newDate.getFullYear()}`;
    const newOrder = {
      orderNo: orderNo,
      date: correctDate,
      customer: orderCustomer,
      trackingNo: trackingNo,
      status: orderStatus,
      consignee: orderConsignee,
    };
    const allOrders = [...orders, newOrder];
    console.log(
      
    );
    setOrders(allOrders);
    setOrderNo("");
    setOrderDate("");
    setOrderCustomer("");
    setTrackingNo("");
    setOrderStatus("");
    setOrderConsignee("");
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
          element={<Home orders={seachResult} handleDelete={handleDelete} />}
        />
        <Route
          path="/Order"
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
