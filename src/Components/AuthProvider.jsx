import React from "react";

export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [userId, setUsers] = React.useState(0);

  const updateUserId = (user) => {
    setUsers(user);
  };

  return (
    <AuthContext.Provider value={{ userId, updateUserId }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
