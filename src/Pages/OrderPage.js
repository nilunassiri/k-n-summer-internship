import { useContext } from "react";
import DataContext from "../context/DataContext";
import { useParams } from "react-router-dom";

const OrderPage = () => {
  const { orders, handleDelete } = useContext(DataContext);
  const { id } = useParams();
  const order = orders.find((item) => item.orderNo === id);
  // const navigate = useNavigate();
  return (
    <main className="OrderPage">
      <div className="card">
        <div className="cardContainer">
          {order && (
            <>
              <h2 className="cardHeader">Order No : {order.orderNo} </h2>
              <hr />
              <div className="cardBody">
                <p>Order No: {order.trackingNo}</p>
                <p>Date: {order.date}</p>
                <p>Customer: {order.customer}</p>
                <p>Tracking No: {order.trackingNo}</p>
                <p>Status: {order.status}</p>
                <p>Consignee: {order.consignee}</p>
                <button
                  className="btn btnDanger"
                  onClick={() => handleDelete(order.orderNo)}
                >
                  Delete Item
                </button>
              </div>
            </>
          )}
          {/* {!order && <>{navigate("/missing")}</>} */}
        </div>
      </div>
    </main>
  );
};

export default OrderPage;
