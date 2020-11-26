import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import Wishlist from "./WishList";
import Login from "../Common/Login";
import Category from "./Category";
import products from "../Constants/products";

const Header = () => {
  const [productList, setProductList] = useState([]);

  return (
    <>
      <Router>
        <Navbar bg="light" variant="light">
          <Navbar.Brand>eCommerce App</Navbar.Brand>

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
              <Dropdown.Item
                as={Link}
                to="/category"
                onClick={() => {
                  let arr = [];
                  arr.push(
                    products.filter((book) => book.category === "books")
                  );
                  setProductList(arr);
                }}
              >
                Books
              </Dropdown.Item>
              <Dropdown.Item
                as={Link}
                to="/category"
                onClick={() => {
                  let arr = [];
                  arr.push(
                    products.filter((phone) => phone.category === "phone")
                  );

                  setProductList(arr);
                }}
              >
                Mobile
              </Dropdown.Item>
            </DropdownButton>
          </Nav>
          <Form inline>
            <Button variant="outline-primary" onClick={Login}>
              Login
            </Button>
          </Form>
        </Navbar>
        <Switch>
          <Route path="/category" exact>
            <Category list={productList}></Category>
          </Route>
          <Route path="/wishlist" component={Wishlist}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </Router>
    </>
  );
};

export default Header;
