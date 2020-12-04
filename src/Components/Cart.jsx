import React, { useState, useEffect,useContext } from "react";
import users from "../Constants/users";
import products from "../Constants/products";
import ListGroup from "react-bootstrap/ListGroup";
import { Container, Col, Row, Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../Components/AuthProvider";
import { FetchCart,FetchCartItems } from "../Services/Service.firebase";

const Cart = (props) => {
  let items = [];
  const { userId, updateUserId } = useContext(AuthContext)
  const history = useHistory();
  let id = props.loggedIn.userid;
  let sum = 0;

  useEffect(() =>
    setTimeout(() => {
      if (userId === 0) {
        history.push("/login");
      }
    }, 2000)
  );

  if (userId === 0) {
    return <h1>You are not logged in. Redirecting to Login ...</h1>;
  } else {
      FetchCart(userId)
      .then((data)=>{
        for(let cartid of data[0]["cart"]){
          FetchCartItems(cartid)
          .then((prd)=>{
            items.push(prd[0]);
          })
        }
      })
      .catch((err)=> console.log(err));
      console.log(items);
    return (
      <div>
        
        <h1>Your Cart</h1>
        <ListGroup>
          {items !==[] && (
          items.map((item) => {
            return (
              <div key={item[0].id}>
                <ListGroup.Item>
                  <Container>
                    <Row>
                      <Col md={3}>
                        <Row>
                          <Image
                            src={item[0].image}
                            height="150px"
                            width="150px"
                            rounded
                          />
                        </Row>
                      </Col>

                      <Col md={5}>
                        <Row>
                          <h5>{item[0].name}</h5>
                        </Row>
                      </Col>

                      <Col>
                        <Row>
                          <h6>${item[0].price}</h6>
                        </Row>
                      </Col>
                    </Row>
                  </Container>
                </ListGroup.Item>
              </div>
            );
          }))}
        </ListGroup>
        <Row>
          <Col md={6}>
            <h1>Total : {sum}</h1>
          </Col>
          <Col md={6}>
            <Button>Proceed to Buy All</Button>
          </Col>
        </Row>
      </div>
    );
  }
};

export default Cart;
