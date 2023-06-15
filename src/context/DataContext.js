import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAxiosFetch from "../hooks/useAxiosFetch";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const [orderNo, setOrderNo] = useState("");

  const [editOrderNo, setEditOrderNo] = useState("");
  const [editDate, setEditDate] = useState("");
  const [editCustomer, setEditCustomer] = useState("");
  const [editTrackingNo, setEditTrackingNo] = useState("");
  const [editStatus, setEditStatus] = useState("");
  const [editConsignee, setEditConsignee] = useState("");

  const navigate = useNavigate();

  const { data, fetchError, isLoading } = useAxiosFetch(
    "http://localhost:3500/orders/"
  );

  useEffect(() => {
    setOrders(data);
  }, [data]);

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
    setSearchResults(filteredResults.reverse());
  }, [orders, search]);

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
    <DataContext.Provider
      value={{
        search,
        setSearch,
        searchResults,
        fetchError,
        isLoading,
        handleDelete,
        handleEdit,
        orderNo,
        setOrderNo,
        orders,
        setOrders,
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
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
