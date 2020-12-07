import React, { useEffect, useContext, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../Components/AuthProvider";
import { fetchUserId, removeItem } from "../Services/Service.firebase";

const Wishlist = (props) => {
  const {  userId, updateUserId, username, updateUserName } = useContext(AuthContext);
  let uid,uname;
  useEffect(()=>{
  uid = localStorage.getItem("userId");
  uname= localStorage.getItem("username");
    if(uname !== ""){
      updateUserId(uid);
      updateUserName(uname);
    }
  },[username,userId]);


  // const { userId } = useContext(AuthContext);
  const [wishlist, setWishlist] = useState([]);
  const history = useHistory();

  useEffect(() =>{
    if(uname===""){
    setTimeout(() => {
      if (userId === 0) {
        history.push("/login");
      }
    }, 2000)
  }
  });

  useEffect(() => {
    if (userId === 0) {
      return <h1>You are not logged in. Redirecting to Login ...</h1>;
    } else {
      fetchUserId(userId)
        .then((data) => {
          if (!data[0]) {
            alert("Wishlist is empty!");
          } else {
            setWishlist(data[0]);
          }
        })
        .catch((err) => console.log(err));
    }
  }, [username,userId]);

  const removeFromList = async (id) => {
    await removeItem(userId, id);

    await fetchUserId(userId)
      .then((data) => {
        setWishlist(data[0]);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      {userId!==0 && wishlist &&
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
                    <ListGroupItem>
                      Price : {item.price}
                      <Button
                        variant="outline-primary"
                        style={{ marginLeft: "7rem" }}
                        onClick={() => removeFromList(item.id)}
                      >
                        Remove
                      </Button>
                    </ListGroupItem>
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
