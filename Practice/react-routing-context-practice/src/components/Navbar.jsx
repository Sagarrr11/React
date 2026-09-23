import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" flex gap-10 justify-between p-8">
      <div className="text-2xl">
        <h1>Navbar</h1>
      </div>

      <div className="text-xl flex gap-8">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/user">User</Link>
      </div>
    </div>
  );
};

export default Navbar;
