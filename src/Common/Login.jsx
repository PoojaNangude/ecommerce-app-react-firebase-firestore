import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Login = () => {
  const [username,setUserName]=useState('');
  const [password,setPassword]=useState('');
  return(
<Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Enter username</Form.Label>
    <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e) => setUserName(e.target.value)}/>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}  />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
  );
};

export default Login;
