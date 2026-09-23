import React, { createContext } from "react";
// eslint-disable-next-line react-refresh/only-export-components
export const UserDataContext = createContext();

const UserContext = ({children}) => {
  const user = {
    name: "Sagar",
    age: 20,
  };
  return (
    <div>
      <UserDataContext.Provider value={user}>
        {children}
      </UserDataContext.Provider>
    </div>
  );
};

export default UserContext;
