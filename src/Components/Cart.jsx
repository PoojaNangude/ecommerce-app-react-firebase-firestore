import React,{useState,useEffect} from 'react'
import users from '../Constants/users';
import products from '../Constants/products';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container, Col, Row, Button } from "react-bootstrap";
import Image from 'react-bootstrap/Image';

const Cart = (props) => {
  const [total,setTotal]=useState(0);
  let id=1;
  let sum=0;
  let m = users.find((x) => x.id === id);
  console.log(m.cart);
  let arr=m.cart;

  {products.map((product) => {
       if(arr.includes(product.id)){
         sum=sum+product.price;
       }
  })}

  return (
    <div>
            <div>
        <ListGroup>
        {products.map((product) => {
          if(arr.includes(product.id)){
            return (
              <div key={product.id}>
                <ListGroup.Item>
                  <Container>
                    <Row>
                      <Col md={3}>
                        <Row>
                          <Image src={product.image} height="150px" width="150px" rounded />
                        </Row>
                      </Col>

                      <Col md={5}>
                        <Row>
                          <h5>{product.name}</h5>
                        </Row>
                      </Col>

                      <Col>
                        <Row>
                          <h6>${product.price}</h6>
                        </Row>
                      </Col>

                    </Row>
                  </Container>
                </ListGroup.Item>
              </div>
            );
          } 
        })}
        </ListGroup>
        <Row>
          <Col md={6}>
            <h2>Total : {sum}</h2>
          </Col>
        <Col>
        <Button>Proceed to Purchase All</Button>
        </Col>
        </Row>
      </div>
    </div>
  )
}

export default Cart

