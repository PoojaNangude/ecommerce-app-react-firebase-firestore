import React, { useEffect,useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../Components/AuthProvider";

const Logout = (props) => {
  const { userId, updateUserId } = useContext(AuthContext)
  useEffect(() => {
    props.setLoggedIn({ status: false, userid: 0 });
    updateUserId(0);
  });

  return <Redirect to="/"></Redirect>;
};

export default Logout;