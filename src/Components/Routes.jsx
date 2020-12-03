import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import Wishlist from "./WishList";
import Login from "../Common/Login";
import Category from "./Category";
import Products from "./Products";
import Logout from "../Common/Logout";
import Purchase from "./Purchase";

const Routes = (props) => {
  return (
    <Switch>
      <Route exact path="/category/books">
        <Category category="books" loggedIn={props.loggedIn}></Category>
      </Route>
      <Route exact path="/category/mobiles">
        <Category category="phone" loggedIn={props.loggedIn}></Category>
      </Route>
      <Route exact path="/wishlist">
        <Wishlist loggedIn={props.loggedIn}></Wishlist>
      </Route>
      <Route exact path="/cart">
        <Cart loggedIn={props.loggedIn}></Cart>
      </Route>
      <Route exact path="/login">
        <Login
          loggedIn={props.loggedIn}
          setLoggedIn={props.setLoggedIn}
        ></Login>
      </Route>
      <Route exact path="/logout">
        <Logout
          loggedIn={props.loggedIn}
          setLoggedIn={props.setLoggedIn}
        ></Logout>
      </Route>
      <Route exact path="/products/:id/:userid" component={Products} /> ;
      <Route exact path="/purchase/:id" component={Purchase} /> ;
      <Route exact path="/">
        <Home loggedIn={props.loggedIn}></Home>
      </Route>
    </Switch>
  );
};

export default Routes;
