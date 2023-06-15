import { Link } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const Nav = () => {
  const { search, setSearch } = useContext(DataContext);
  return (
    <nav className="Nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link style={{ borderStyle: "groove", padding:10 }} to="/order">
            Add Order +
          </Link>
        </li>
      </ul>
      <form
        className="searchForm"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="search">search orders</label>
        <input
          type="text"
          id="search"
          placeholder="search orders"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </nav>
  );
};

export default Nav;
