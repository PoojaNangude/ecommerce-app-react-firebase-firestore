import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, useHistory, useLocation } from "react-router-dom";
import users from "../Constants/users";

const Login = (props) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const location = useLocation();

  const submitForm = (e) => {
    e.preventDefault();
    console.log(location.pathname);
    console.log(location.redirect);
    console.log(location.pid);

    for (let user of users) {
      if (username === user.username && password === user.password) {
        props.setLoggedIn({ status: true, userid: user.id });
        if (location.redirect === "products") {
          console.log("in if");
          history.push(`/products/` + location.pid + `/` + user.id);
        } else {
          history.goBack();
        }
      }
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Enter username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              as={Link}
              to="/"
              onClick={(e) => submitForm(e)}
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
