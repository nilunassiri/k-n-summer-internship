import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import NewOrder from "./Pages/NewOrder";
import OrderPage from "./Pages/OrderPage";
import EditOrder from "./Pages/EditOrder";
import About from "./Pages/About";
import Missing from "./Pages/Missing";
import { Route, Routes } from "react-router-dom";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <div className="App">
      <Header title="Kühne + Nagel Shipment" />
      <DataProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<NewOrder />} />
          <Route path="/edit/:id" element={<EditOrder />} />
          <Route path="/order/:id" element={<OrderPage />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Routes>
      </DataProvider>
      <Footer />
    </div>
  );
}

export default App;
