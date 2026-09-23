import React from "react";
import Navbar from "./components/Navbar";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Products from "../src/pages/Products";
import Men from "../src/pages/Men";
import Women from "../src/pages/Women";
import { Route, Routes } from "react-router-dom";
import User from "./pages/User";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />}>
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
        </Route>
        <Route path="//:id" element={<User />} />
      </Routes>
    </div>
  );
};

export default App;
