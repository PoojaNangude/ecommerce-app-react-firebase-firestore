import React from "react";
import Image from "react-bootstrap/Image";
import { Container, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import products from "../Constants/products";
import users from "../Constants/users";
import { useHistory } from "react-router-dom";

const Products = (props) => {
  const history = useHistory();

  let id = props.match.params.id;

  let m = products.find((x) => x.id.toString() === id);

  let userid = props.match.params.userid;

  return (
    <div className="App">
      <Container>
        <Row>
          <Col md={6}>
            <Row>
              <Image src={m.image} height="450px" width="450px" rounded />
            </Row>
            <Row>
              <Button
                variant="primary"
                onClick={() => {
                  if (userid.toString() === "0") {
                    history.push({
                      pathname: "/login",
                      redirect: "products",
                      pid: id,
                    });
                  } else {
                    let user = users.find(
                      (x) => x.id.toString() === userid.toString()
                    );
                    if (user.wishlist.includes(id)) {
                      alert("Item already exists in wishlist.");
                    } else {
                      user.wishlist.push(id);

                      alert("Product added to wishlist.");
                    }
                  }
                }}
              >
                Add to Wishlist
              </Button>
            </Row>
          </Col>

          <Col md={6}>
            <Row>
              <h1>{m.name}</h1>
            </Row>
            <Row>
              <h3>${m.price}</h3>
            </Row>
            <Row>
              <Card style={{ height: "23rem", width: "35rem" }}>
                <Card.Body>
                  <Card.Title>Description</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {m.category}/{m.subcategory}
                  </Card.Subtitle>
                  <Card.Text>{m.description}</Card.Text>
                </Card.Body>
              </Card>
            </Row>

            <Row>
              <Col md={3}>
                <Button
                  variant="primary"
                  onClick={() => {
                    if (userid.toString() === "0") {
                      history.push({
                        pathname: "/login",
                        redirect: "products",
                        pid: id,
                      });
                    } else {
                      let user = users.find(
                        (x) => x.id.toString() === userid.toString()
                      );
                      if (user.cart.includes(id)) {
                        alert("Item already exists in cart.");
                      } else {
                        user.cart.push(id);
                        console.log(user.cart);
                        alert("Product added to cart.");
                      }
                    }
                  }}
                >
                  Add to Cart
                </Button>
              </Col>
              <Col md={5}>
                <Button
                  variant="primary"
                  onClick={() => {
                    if (userid.toString() === "0") {
                      history.push({
                        pathname: "/login",
                        redirect: "products",
                        pid: id,
                      });
                    } else {
                      history.push(`/purchase/` + id);
                    }
                  }}
                >
                  Proceed to Buy
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Products;
