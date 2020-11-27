import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, useHistory } from "react-router-dom";
import users from "../Constants/users";

const Login = (props) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const submitForm = (e) => {
    e.preventDefault();

    for (let user of users) {
      if (username === user.username && password === user.password) {
        props.setLoggedIn({ status: true, userid: user.id });
        history.push("/");
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
