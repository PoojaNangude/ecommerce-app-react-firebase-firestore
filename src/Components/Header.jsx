import React, { useState,useContext,useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Routes from "./Routes";
import { AuthContext } from "../Components/AuthProvider";


const Header = () => {
  const {  userId, updateUserId, username, updateUserName } = useContext(AuthContext);
  let uid,uname;
  useEffect(()=>{
  uid = localStorage.getItem("userId");
  uname= localStorage.getItem("username");
    if(uname !== ""){
      updateUserId(uid);
      updateUserName(uname);
    }
  },[username,userId]);


  return (
    <>
      <Router>
        {console.log("rendered", userId)}
        <Navbar bg="light" variant="light">
          <Navbar.Brand as={Link} to="/">
            eCommerce App
          </Navbar.Brand>

          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">
              Cart
            </Nav.Link>
            <Nav.Link as={Link} to="/wishlist">
              Wishlist
            </Nav.Link>

            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/category/books">
                Books
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/mobiles">
                Mobiles
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            { (userId === 0 || uname==="" ) && (
              <Button variant="outline-primary" as={Link} to="/login">
                Login
              </Button>
            )}
            {username && (
              <h3>Hello {username}</h3>
            )}
            {(userId !== 0 ) &&  (
              <Button variant="outline-primary" as={Link} to="/logout">
                Logout
              </Button>
            )}
          </Form>
        </Navbar>
        <Routes />
      </Router>
    </>
  );
};

export default Header;
