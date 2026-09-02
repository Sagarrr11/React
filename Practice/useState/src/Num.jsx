import React, { useState } from "react";

const Num = () => {
  const [num, setNum] = useState(0);
  const btnClicked = () => {
    console.log(num);
    setNum(num + 1);
  };
  const btnDec = () => {
    console.log(num);
    setNum(num - 1);
  };
  return (
    <div className="p-2 text-center">
      <h1 className="text-3xl mb-2">{num}</h1>
      <button
        className="rounded-2xl px-3 py-1 bg-red-950 text-white mr-1"
        onClick={btnClicked}
      >
        Increase
      </button>
      <button
        className="rounded-2xl px-3 py-1 bg-red-950 text-white"
        onClick={btnDec}
      >
        Decrease
      </button>
    </div>
  );
};

export default Num;
