import React, { useState,useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Routes from "./Routes";
import { AuthContext } from "../Components/AuthProvider";

const Header = () => {
  const [loggedIn, setLoggedIn] = useState({ status: false, userid: 0 });
  const {  userId, updateUserId } = useContext(AuthContext);
  return (
    <>
      <Router>
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
            { userId === 0 && (
              <Button variant="outline-primary" as={Link} to="/login">
                Login
              </Button>
            )}

            {userId !== 0 &&  (
              <Button variant="outline-primary" as={Link} to="/logout">
                Logout
              </Button>
            )}
          </Form>
        </Navbar>
        <Routes loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      </Router>
    </>
  );
};

export default Header;
