import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import Wishlist from "./WishList";
import Login from "../Common/Login";

const Navbar = () => {
  return (
    <>
      <div>
        <Router>
          <ul id="nav">
            <li>
              <Link to="/">E-Commerce Site</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li></li>

            <div className="top-right">
              <li id="signin">
                <Link to="/login">Sign-in</Link>
              </li>
            </div>
          </ul>
          <Switch>
            <Route path="/wishlist" component={Wishlist}></Route>
            <Route path="/cart" component={Cart}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/" component={Home}></Route>
          </Switch>
        </Router>
      </div>
    </>
  );
};

export default Navbar;
