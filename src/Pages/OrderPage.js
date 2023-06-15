import { useContext } from "react";
import DataContext from "../context/DataContext";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const OrderPage = () => {
  const { handleDelete } = useContext(DataContext);
  const { id } = useParams();
  const orderSlicer = useSelector((state) => state.order);
  const order = orderSlicer.value.find((item) => item.orderNo === id);
  return (
    <main className="OrderPage">
      <div className="card">
        <div className="cardContainer">
          {order && (
            <>
              <h2 className="cardHeader">Order No : {order.orderNo} </h2>
              <hr />
              <div className="cardBody">
                <section style={{paddingBottom : "1rem"}}>
                  <p>Order No: {order.orderNo}</p>
                  <p>Date: {order.date}</p>
                  <p>Customer: {order.customer}</p>
                  <p>Tracking No: {order.trackingNo}</p>
                  <p>Status: {order.status}</p>
                  <p>Consignee: {order.consignee}</p>
                </section>
                <section className="btnGroup">
                  <button
                    className="btn btnDanger"
                    onClick={() => handleDelete(order.orderNo)}
                  >
                    Delete Order
                  </button>
                  <Link to={`/edit/${id}`}>
                    <button className="btn btnWarning">Edit Order</button>
                  </Link>
                </section>
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default OrderPage;
