import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import { FaBars } from "react-icons/fa";
import Wishlist from "./WishList";
import Login from "../Common/Login";
import products from "../Constants/products.jsx";

const Nice_Header = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <Router>
        <Navbar bg="light" variant="light">
          <Navbar.Brand>
            <div className="sidebar">
              <Link to="#" className="menu-bars">
                <FaBars onClick={showSidebar} />
              </Link>
              <Route path="/" />
            </div>
          </Navbar.Brand>
          <Nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" onClick={showSidebar}>
              <li className="navbar-toggle"></li>
              {products.map((item, id) => {
                return (
                  <li className="menu-bars" key={id}>
                    {item.category}
                  </li>
                );
              })}
            </ul>
          </Nav>
          <Nav className="mr-auto">
            
              <Link to="/">Home</Link>
            
            
              <Link to="/cart">Cart</Link>
            
            
              <Link to="/wishlist">Wishlist</Link>
            
          </Nav>
          <Form inline>
            <Button variant="outline-primary" onClick={Login}>
              Login
            </Button>
          </Form>
        </Navbar>
        <Switch>
          <Route path="/wishlist" component={Wishlist}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </Router>
    </>
  );
};

export default Nice_Header;
