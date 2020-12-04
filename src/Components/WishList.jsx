import React, { useEffect, useContext, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Image from "react-bootstrap/Image";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../Components/AuthProvider";
import { fetchUserId } from "../Services/Service.firebase";

const Wishlist = (props) => {
  const { userId } = useContext(AuthContext);
  const [wishlist, setWishlist] = useState([]);

  const history = useHistory();

  useEffect(() =>
    setTimeout(() => {
      if (userId === 0) {
        history.push("/login");
      }
    }, 2000)
  );

  useEffect(() => {
    if (userId === 0) {
      return <h1>You are not logged in. Redirecting to Login ...</h1>;
    } else {
      fetchUserId(userId)
        .then((data) => {
          console.log(data[0]);
          if (!data[0]) {
            alert("Wishlist is empty!");
          } else {
            setWishlist(data[0]);
          }
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <div className="container">
      {wishlist &&
        wishlist.map((item) => {
          return (
            <div className="container" key={item.id}>
              <div className="row">
                <div className="col-md-4">
                  <ListGroup>
                    <ListGroupItem>{item.name} </ListGroupItem>
                    <ListGroupItem>
                      <Image
                        src={item.image}
                        height="250px"
                        width="220px"
                      ></Image>
                    </ListGroupItem>
                    <ListGroupItem>Price : {item.price}</ListGroupItem>
                  </ListGroup>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Wishlist;
