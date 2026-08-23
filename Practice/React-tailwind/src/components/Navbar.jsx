import React from "react";

const Navbar = () => {
  return (
    <nav className= "flex justify-between items-center p-5 font-sans">
    <div className="flex justify-center items-center gap-1">
        <i className="ri-flower-line"></i>
        <h1>BloomFi</h1>
        </div> 
      <div className="flex gap-7">
        <a href="#">USD bloom</a>
        <a href="#">Business</a>
        <a href="#">Treasury</a>
        <a href="#">Developers</a>
        <a href="#">Join Us</a>
      </div>    
      <div className="">
        <button className="bg-purple-950 rounded-2xl text-white px-5 py-1 items-center">Launch Beta</button>
      </div>
    </nav>
  );
};

export default Navbar;
