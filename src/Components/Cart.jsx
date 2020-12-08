import React, { useState, useEffect, useContext } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Container, Col, Row, Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../Components/AuthProvider";
import { FetchUserCart, RemoveItemFromCart,AddItemToWishlist } from "../Services/Service.firebase";
import Spinner from "react-bootstrap/Spinner";

const Cart = () => {
  const {  userId, updateUserId, username, updateUserName } = useContext(AuthContext);
  const [available, setAvailable]=useState(false);
  let uid,uname;
  useEffect(()=>{
  uid = localStorage.getItem("userId");
  uname= localStorage.getItem("username");
    if(uname !== ""){
      updateUserId(uid);
      updateUserName(uname);
    }
  }, [username, userId]);

  const [cart,setCart]= useState([]);
  const history = useHistory();
  let sum = 0;

  useEffect(() => {
    if (uname === "") {
      setTimeout(() => {
        if (userId === 0) {
          history.push("/login");
        }
      }, 2000);
    }
  });

  useEffect(() => {
    if (userId !== 0) {
      FetchUserCart(userId)
        .then((data) => {
          console.log(data[0]);
          if (!data[0]) {
            setCart([]);
            setAvailable(true);
          } else {
            setCart(data[0]);
            setAvailable(true);
          }
        })
        .catch((err) => console.log(err));
    }
  }, [username, userId]);

  cart.map((item) => {
    sum = sum + parseFloat(item.price);
  });

  const RemoveFromCart = async (productid,userId) =>{
    await RemoveItemFromCart(productid,userId)
         await FetchUserCart(userId)
        .then((data) => {
          console.log(data[0]);
          if (!data[0]) {
            setCart([]);
            setAvailable(true);
          } else {
            setCart([...data[0]]);
            setAvailable(true);
          }
        })
        .catch((err) => console.log(err));
  }

    return (
      <div>
        {available===false && (
          <div>
        <center>
          <h1>Loading....</h1>
          <Spinner
            style={{
              marginTop: "10rem",
            }}
            animation="border"
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </Spinner>
        </center>
          </div>
        )
        }
        {cart.length===0 && available==true && (
          <div>
            <h1>Your cart is empty!!!</h1>
          </div>
        )
        }
        {available===true && cart.length!==0 && (
          <div>
              <ListGroup>
              <h1>Your Cart</h1>
              {cart && (
              cart.map((item) => {
                return (
                  <div key={item.id}>
                    <ListGroup.Item>
                      <Container>
                        <Row>
                          <Col md={3}>
                            <Row>
                              <Image
                                src={item.image}
                                height="150px"
                                width="150px"
                                rounded
                              />
                            </Row>
                          </Col>

                          <Col md={5}>
                            <Row>
                              <h5>{item.name}</h5>
                            </Row>
                          </Col>

                          <Col>
                            <Row>
                              <h6>${item.price}</h6>
                            </Row>
                            <Row>
                              <Button
                                onClick={() => RemoveFromCart(item.id, userId)}
                              >
                                Remove from Cart
                              </Button>
                            </Row>
                          </Col>
                        </Row>
                      </Container>
                    </ListGroup.Item>
                  </div>
                );
              }))}
          </ListGroup>
          {sum !== 0 && (
            <Row>
              
              <Col md={6}>
                <h1>Total : ${sum.toFixed(2)}</h1>
              </Col>
              <Col md={6} className="p-2">
                <Button>Proceed to Buy All</Button>
              </Col>
            </Row>
          )}
        </div>
      )}

      {(userId === 0 || uname === "") && (
        <h1>You need to login to your account</h1>
      )}
    </div>
  );
};

export default Cart;
