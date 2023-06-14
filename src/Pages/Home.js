import React from "react";
import Table from "../Components/Table";

const Home = ({ orders, handleDelete, handleEdit }) => {
  return (
    <main className="Home">
      {orders.length ? (
        <Table
          orders={orders}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ) : (
        <p style={{ marginTop: "2rem" }}>No orders to display!</p>
      )}
    </main>
  );
};

export default Home;
