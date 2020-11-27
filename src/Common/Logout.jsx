import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";

const Logout = (props) => {
  console.log(props.loggedIn);
  useEffect(() => {
    props.setLoggedIn({ status: false, userid: 0 });
  });

  return <Redirect to="/"></Redirect>;
};

export default Logout;
