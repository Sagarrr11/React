import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const Params = useParams();
  return (
    <div className="Head">
      <h1>User {Params.id}</h1>
    </div>
  );
};

export default User;
