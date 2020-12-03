import React, { useEffect } from "react";

export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [users, setUsers] = React.useState([]);
  const [products, setProducts] = React.useState([]);

  useEffect(() => setUsers(null));

  return (
    <AuthContext.Provider value={{ users, setUsers }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
