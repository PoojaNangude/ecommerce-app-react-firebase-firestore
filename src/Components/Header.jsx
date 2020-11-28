import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Routes from "./Routes";

const Header = () => {
  const [loggedIn, setLoggedIn] = useState({ status: false, userid: 0 });

  return (
    <>
      <Router>
        <Navbar bg="light" variant="light">
          <Navbar.Brand as={Link} to='/'>eCommerce App</Navbar.Brand>

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

            <DropdownButton id="dropdown-basic-button" title="Categories">
              <Dropdown.Item as={Link} to="/category/books">
                Books
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/category/mobiles">
                Mobile
              </Dropdown.Item>
            </DropdownButton>
          </Nav>
          <Form inline>
            {/* <Nav.Link as={Link} to="/login">
              <Button variant="outline-primary">Login</Button>
            </Nav.Link> */}

            {!loggedIn.status && (
              <Button variant="outline-primary" as={Link} to="/login">
                Login
              </Button>
            )}

            {loggedIn.status && (
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
