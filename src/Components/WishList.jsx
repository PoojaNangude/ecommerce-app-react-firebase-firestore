import React, { useEffect } from "react";
import users from "../Constants/users";
import products from "../Constants/products";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Image from "react-bootstrap/Image";
import { useHistory } from "react-router-dom";

const Wishlist = (props) => {
  let id = props.loggedIn.userid;
  let items = [];
  const history = useHistory();

  useEffect(() =>
    setTimeout(() => {
      if (id === 0) {
        history.push("/login");
      }
    }, 2000)
  );

  if (id === 0) {
    return <h1>You are not logged in. Redirecting to Login ...</h1>;
  } else {
    let user = users.filter((user) => user.id === id);

    if (user[0].wishlist.length === 0) {
      return <h1>Your Wishlist is empty.</h1>;
    } else {
      for (let item of user[0].wishlist) {
        items.push(
          products.filter((prod) => prod.id.toString() === item.toString())
        );
      }
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
