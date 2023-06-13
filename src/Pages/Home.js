import React from "react";
import Table from "../Components/Table";

const Home = ({ orders, handleDelete }) => {
  return (
    <main className="Home">
      {orders.length ? (
        <Table orders={orders} handleDelete={handleDelete} />
      ) : (
        <p style={{ marginTop: "2rem" }}>No orders to display!</p>
      )}
    </main>
  );
};

export default Home;
