import React, { useState, useEffect,useContext } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Container, Col, Row, Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../Components/AuthProvider";
import { FetchUserCart, RemoveItemFromCart } from "../Services/Service.firebase";

const Cart = () => {
  const [cart,setCart]= useState([]);
  const { userId, updateUserId } = useContext(AuthContext)
  const history = useHistory();
  let sum = 0;

  useEffect(() =>
    setTimeout(() => {
      if (userId === 0) {
        history.push("/login");
      }
    }, 2000)
  );

  useEffect(() => {
      if (userId !==0){
      FetchUserCart(userId)
        .then((data) => {
          console.log(data[0]);
          if (!data[0]) {
            alert("Cart is empty!");
          } else {
            setCart(data[0]);
          }
        })
        .catch((err) => console.log(err));}

  }, [cart]);

  cart.map((item)=>{
    sum=sum+parseFloat(item.price)
  })

  const RemoveFromCart = (productid,userId) =>{
    RemoveItemFromCart(productid,userId)
    .then((msg) => alert(msg))
    .catch((err) => console.log(err));
  }

    return (
      <div>
        {userId!==0 && (
        <h1>Your Cart</h1>
        )}
        {userId===0 && (
        <h1>You need to login to your account</h1>
        )}
        <ListGroup>
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
                          <Button onClick={()=>RemoveFromCart(item.id,userId)}>Remove from Cart</Button>
                        </Row>
                      </Col>
                    </Row>
                  </Container>
                </ListGroup.Item>
              </div>
            );
          }
))}
        </ListGroup>
        {sum!==0 && (
        <Row>
          
          <Col md={6}>
            <h1>Total : {sum}</h1>
          </Col>
          <Col md={6}>
            <Button>Proceed to Buy All</Button>
          </Col>
          
        </Row>
        )}
       </div>
    );
  
};

export default Cart;
