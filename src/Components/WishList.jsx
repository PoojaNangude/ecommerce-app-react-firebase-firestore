import React from "react";
import users from "../Constants/users";
import products from "../Constants/products";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Image from "react-bootstrap/Image";
import { Redirect } from "react-router-dom";

const Wishlist = (props) => {
  let id = props.loggedIn.userid;

  if (id === 0) {
    return <Redirect to="/login"></Redirect>;
  } else {
    let user = users.filter((user) => user.id === id);

    let items = [];
    for (let item of user[0].wishlist) {
      items.push(
        products.filter((prod) => prod.id.toString() === item.toString())
      );
    }
    return (
      <div className="container">
        <h1>Your Wishlist</h1>
        {items.map((item) => {
          return (
            <div className="container" key={item[0].id}>
              <div className="row">
                <div className="col-md-4">
                  <ListGroup>
                    <ListGroupItem>{item[0].name} </ListGroupItem>
                    <ListGroupItem>
                      <Image
                        src={item[0].image}
                        height="250px"
                        width="220px"
                      ></Image>
                    </ListGroupItem>
                    <ListGroupItem>Price : {item[0].price}</ListGroupItem>
                  </ListGroup>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
};

export default Wishlist;