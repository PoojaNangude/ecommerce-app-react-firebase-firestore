import React, { useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../Components/AuthProvider";

const Logout = (props) => {
  const { userId, updateUserId,updateUserName } = useContext(AuthContext)
  useEffect(() => {
      localStorage.setItem("userId","");
      localStorage.setItem("username","");
      console.log("userId",localStorage.getItem("userId"));
      console.log("username",localStorage.getItem("username"));
    updateUserId(0);
    updateUserName(null);
  });

  return <Redirect to="/"></Redirect>;
};

export default Logout;
