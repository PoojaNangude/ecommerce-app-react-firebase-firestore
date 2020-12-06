import React, { useEffect,useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../Components/AuthProvider";

const Logout = (props) => {
  const { userId, updateUserId,updateUserName } = useContext(AuthContext)
  useEffect(() => {
    updateUserId(0);
    updateUserName(null);
  });

  return <Redirect to="/"></Redirect>;
};

export default Logout;