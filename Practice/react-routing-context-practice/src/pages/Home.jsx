import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();
  const contextData = useContext(UserDataContext);
  const [user, setUser] = useState("");
  const [count, setCount] = useState(0);
  const getData = async () => {
    const response = await axios("https://randomuser.me/api/");
    setUser(
      response.data.results[0].name.first +
        " " +
        response.data.results[0].name.last,
    );
  };
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getData();
  }, [count]);
  return (
    <div className="Head">
      <h1>Home Page</h1>
      <p className="text-lg absolute top-50 left-10">
        Name fetched through the use of context = {contextData.name}
      </p>
      <p className="text-lg absolute top-60 left-12">
        UseEffect with axios data = {user}
      </p>
      <button
        className="whitespace-nowrap rounded-xl text-sm px-2 py-1 absolute top-70 left-50 border-2 border-white hover:bg-white hover:text-black transition duration-200 cursor-pointer"
        onClick={() => setCount(count + 1)}
      >
        New User
      </button>

      <button
        className="whitespace-nowrap rounded-lg text-sm px-3 py-2 absolute top-100 left-170 border-2 border-white hover:bg-white hover:text-black transition duration-100"
        onClick={() => {
          navigate("/products");
        }}
      >
        Explore Products
      </button>
    </div>
  );
};

export default Home;
