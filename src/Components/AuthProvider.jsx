import React from "react";

export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [userId, setUsers] = React.useState(0);
  const [username, setUserName]= React.useState(null);

  const updateUserId = (user) => {
    setUsers(user);
  };

  const updateUserName = (username) => {
    setUserName(username);
  }
  return (
    <AuthContext.Provider value={{ userId, updateUserId, username, updateUserName }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
