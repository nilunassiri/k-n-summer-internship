import Table from "../Components/Table";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const Home = () => {
  const { searchResults, handleDelete, handleEdit, fetchError, isLoading } =
    useContext(DataContext);
  return (
    <main className="Home">
      {isLoading && <p className="statusMsg">Loading Orders...</p>}
      {!isLoading && fetchError && (
        <p className="statusMsg" style={{ color: "red" }}>
          {fetchError}
        </p>
      )}
      {!isLoading &&
        !fetchError &&
        (searchResults.length ? (
          <Table
            orders={searchResults}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ) : (
          <p style={{ marginTop: "2rem" }}>No orders to display!</p>
        ))}
    </main>
  );
};

export default Home;
