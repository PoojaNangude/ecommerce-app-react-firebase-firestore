import React, { useEffect, useContext, useState } from "react";

import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

import { AuthContext } from "../Components/AuthProvider";
import {
  fetchUserWishlist,
  removeItemFromWishlist,
} from "../Services/Service.firebase";
import { Card } from "react-bootstrap";

const Wishlist = () => {
  const { userId, updateUserId, username, updateUserName } = useContext(
    AuthContext
  );
  const [isavl, setIsavl] = useState("loading");

  let uid = 0,
    uname = "";

  const [wishlist, setWishlist] = useState([]);
  const history = useHistory();

  useEffect(() => {
    uid = localStorage.getItem("userId");
    uname = localStorage.getItem("username");
    if (uname === "") {
      setTimeout(() => {
        if (userId === 0) {
          history.push("/login");
        }
      }, 2000);
    }
  });

  useEffect(() => {
    uid = localStorage.getItem("userId");
    uname = localStorage.getItem("username");
    if (uname !== "") {
      updateUserId(uid);
      updateUserName(uname);

      fetchUserWishlist(userId)
        .then((data) => {
          if (!data[0]) {
            setIsavl("empty");
          } else {
            setWishlist([...data[0]]);
            setIsavl("full");
          }
        })
        .catch((err) => console.log(err));
    }
  }, [username, userId]);

  const removeFromWishlist = async (id) => {
    await removeItemFromWishlist(userId, id);

    const data = await fetchUserWishlist(userId);

    if (data[0] === null) {
      setIsavl("empty");
    } else {
      setWishlist([...data[0]]);
      setIsavl("full");
    }
  };

  return (
    <div className="container">
      <center>
        <h3>Your Wishlist</h3>
      </center>
      {isavl === "loading" && (
        <center>
          <Spinner
            style={{
              marginTop: "20rem",
            }}
            animation="border"
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </Spinner>
        </center>
      )}
      {isavl === "empty" && (
        <center>
          <h3>Your Wishlist is empty...!</h3>
        </center>
      )}
      {uname !== "" && (
        <center>
          <h3>You are not logged in! Redirecting to Login...</h3>
        </center>
      )}

      {userId !== 0 &&
        isavl === "full" &&
        wishlist.map((item) => {
          return (
            <div className="container" key={item.id}>
              <div className="row justify-content-center">
                <div className="col-md-4">
                  <div className="p-3">
                    <Card key={item.id}>
                      <Card.Header>{item.name} </Card.Header>

                      <Card.Img
                        src={item.image}
                        height="250px"
                        width="220px"
                      ></Card.Img>

                      <Card.Body>
                        <Card.Text>
                          Price : ${item.price}
                          <Button
                            variant="outline-primary"
                            style={{ marginLeft: "10rem" }}
                            onClick={() => removeFromWishlist(item.id)}
                          >
                            Remove
                          </Button>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Wishlist;
