import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import NewOrder from "./Pages/NewOrder";
import OrderPage from "./Pages/OrderPage";
import About from "./Pages/About";
import Missing from "./Pages/Missing";
import { Route, Routes, BrowserRouter, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Order" element={<NewOrder/>}/>
          <Route path="/order/:id" element={<OrderPage/>}/>
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
