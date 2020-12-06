import React, { useState, useContext   } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, useHistory, useLocation } from "react-router-dom";
import { AuthContext } from "../Components/AuthProvider";
import { fetchUsers } from "../Services/Service.firebase";

const Login = (props) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
  const location = useLocation();

  const { userId, updateUserId, updateUserName } = useContext(AuthContext)

const submitForm =(e)=> {
    e.preventDefault();
    fetchUsers(username, password)
    .then((data)=>{
    updateUserId(data[0]["id"])
    updateUserName(data[0]["username"]);
        if (location.redirect === "products") {
          history.push(`/products/` + location.pid + `/` + data[0]["id"]);
        } else if (location.redirect === "buy") {
          history.push(`/purchase/` + location.pid);
        } else {
          history.goBack();
        }
    })
    .catch((err)=> console.log(err));
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
