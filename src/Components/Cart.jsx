import React,{useState,useEffect} from 'react'
import users from '../Constants/users';
import products from '../Constants/products';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container, Col, Row, Button } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import { Redirect } from "react-router-dom";
import { Link, useHistory } from "react-router-dom";

const Cart = (props) => {
  const [total,setTotal]=useState(0);
  const history = useHistory();
  let id = props.loggedIn.userid;
  let sum=0;

  if (id === 0) {
    return <Redirect to="/login"></Redirect>;
  } else {
    let user = users.filter((user) => user.id === id);

    let items = [];
    for (let item of user[0].cart) {
      items.push(
        products.filter((prod) => prod.id.toString() === item.toString())
      );
    }

    for(let rec of items){
      sum=sum+rec[0].price;
      console.log(sum);
    }


    return (
      <div>
        <h1>Your Cart</h1>
        <ListGroup>
        {items.map((item) => {
          return (
            <div  key={item[0].id}>
                <ListGroup.Item>
                  <Container>
                    <Row>
                      <Col md={3}>
                        <Row>
                          <Image src={item[0].image} height="150px" width="150px" rounded />
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
        })}
        </ListGroup>
        <Row>
          <Col md={6}>
            <h1>
              Total : {sum}
            </h1>
          </Col>
          <Col md={6}>
            <Button>Proceed to Buy All</Button>
          </Col>
        </Row>

      </div>
    );
  }
}

export default Cart