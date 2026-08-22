import React from "react";

const Navbar = () => {
  return (
    <nav className="nav">
        <div className="productName">
            <h1 id="brand">Horizon Courts</h1>
        </div>
      <div className="navlinks">
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Coaches</a>
        <a href="#">Events</a>
        <a href="#">Contacts</a>
      </div>
      <div className="book-call">
        <a href="#">Book A Call↗</a>
      </div>
    </nav>
  );
};

export default Navbar;
