import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [Users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();

    const newUsers = [...Users];

    setUsers([...newUsers, { name, email }]);

    console.log(newUsers);

    setName("");
    setEmail("");
  };

  return (
    <div className="p-10 bg-black flex flex-col text-white min-h-screen">
      <form
        className="flex gap-5"
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          className="bg-gray-500 w-40 h-10 p-2.5 rounded-xl"
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
        />
        <input
          className="bg-gray-500 w-40 h-10 p-2.5 rounded-xl"
          type="text"
          placeholder="Enter Your Name"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />

        <button className="bg-green-900 h-10 px-5 rounded-xl">Submit</button>
      </form>

      <div className="mt-5 flex flex-col gap-2">
        {Users.map(function (elem, idx) {
          return (
            <div
              key={idx}
              className="flex items-center justify-between w-80 h-16 px-4 rounded-xl bg-white text-red-950"
            >
              <div>
                <h1 className="font-bold">{elem.name}</h1>
                <p className="text-sm text-gray-500">{elem.email}</p>
              </div>

              <span className="text-green-700">↗</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
