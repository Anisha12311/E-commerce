import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import Cart from "./Components/Cart";
import Header from "./Components/Header";
import AdminUser from "./Components/Admin/AdminUsers";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin" element={<AdminUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
