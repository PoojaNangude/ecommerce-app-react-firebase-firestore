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

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/category/books">
        <Category category="books"></Category>
      </Route>
      <Route exact path="/category/mobiles">
        <Category category="phone"></Category>
      </Route>
      <Route exact path="/wishlist" component={Wishlist}></Route>
      <Route exact path="/cart" component={Cart}></Route>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/logout" component={Logout}></Route>
      <Route exact path="/products/:id/:userid" component={Products} /> ;
      <Route exact path="/purchase/:id" component={Purchase} /> ;
      <Route exact path="/">
        <Home></Home>
      </Route>
    </Switch>
  );
};

export default Routes;
