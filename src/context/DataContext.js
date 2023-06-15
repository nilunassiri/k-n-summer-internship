import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAxiosFetch from "../hooks/useAxiosFetch";
import { useSelector, useDispatch } from "react-redux";
import { updateOrder, deleteOrder } from "../redux/orderSlice";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const [orderNo, setOrderNo] = useState("");

  const [editOrderNo, setEditOrderNo] = useState("");
  const [editDate, setEditDate] = useState("");
  const [editCustomer, setEditCustomer] = useState("");
  const [editTrackingNo, setEditTrackingNo] = useState("");
  const [editStatus, setEditStatus] = useState("");
  const [editConsignee, setEditConsignee] = useState("");
  const orderSlicer = useSelector((state) => state.order);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { fetchError, isLoading } = useAxiosFetch(
    "http://localhost:3500/orders/"
  );


  useEffect(() => {
    const filteredResults = orderSlicer.value.filter(
      (item) =>
        item.orderNo.includes(search) ||
        item.date.includes(search) ||
        item.customer.toLowerCase().includes(search.toLowerCase()) ||
        item.trackingNo.includes(search) ||
        item.status.toLowerCase().includes(search.toLowerCase()) ||
        item.consignee.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(filteredResults.reverse());
  }, [orderSlicer.value, search]);

  const handleEdit = (id) => {
    const updatedOrder = {
      orderNo: editOrderNo,
      date: editDate,
      customer: editCustomer,
      trackingNo: editTrackingNo,
      status: editStatus,
      consignee: editConsignee,
    };
    dispatch(updateOrder([updatedOrder, id]));
    setEditOrderNo("");
    setEditDate("");
    setEditCustomer("");
    setEditTrackingNo("");
    setEditStatus("");
    setEditConsignee("");
    navigate("/");
  };

  const handleDelete = (id) => {
    dispatch(deleteOrder(id));
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
