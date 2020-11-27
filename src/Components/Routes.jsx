import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import Wishlist from "./WishList";
import Login from "../Common/Login";
import Category from "./Category";
import Products from "./Products";
import Logout from "../Common/Logout";
import AddToCart from './AddToCart';

const Routes = (props) => {
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
      <Route exact path="/login">
        <Login
          loggedIn={props.loggedIn}
          setLoggedIn={props.setLoggedIn}
        ></Login>
      </Route>
      <Route exact path="/logout">
        <Logout loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn}
        ></Logout>
      </Route>

      <Route exact path="/addtocart">
        <AddToCart
          loggedIn={props.loggedIn}
          setLoggedIn={props.setLoggedIn}>
        </AddToCart>
      </Route>

      {/* <Route path="/products" component={Products}></Route> */}
      <Route exact path="/products/:id" component={Products} /> 
      <Route exact path="/" component={Home}></Route>
    </Switch>
  );
};

export default Routes;
