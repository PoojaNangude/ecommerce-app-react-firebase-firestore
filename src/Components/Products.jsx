import React, { useEffect, useState,useContext } from "react";
import Image from "react-bootstrap/Image";
import { Container, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import { AddItemToCart } from "../Services/Service.firebase";
import { updateList, GetProductInformation } from "../Services/Service.firebase";
import { AuthContext } from "../Components/AuthProvider";

const Products = (props) => {
  let id=props.match.params.id;
  const [products, setProducts] = useState([]);
  const history = useHistory();
  const { userId, updateUserId } = useContext(AuthContext)
  useEffect(async () => {
    let myPromise = new Promise(function (myResolve, myReject) {
      myResolve(GetProductInformation(id));
    });
    let prod = await myPromise;
    setProducts(prod);
  }, []);

  const AddToCart = (e) => {
    if (userId===0) {
      history.push({
        pathname: "/login",
        redirect: "products",
        pid: id,
      });
    } else {
      AddItemToCart(id,userId)
        .then((msg) => alert(msg))
        .catch((err) => console.log(err));
    }
  };

  const AddToWishlist = () => {
    if (userId === 0) {
      history.push({
        pathname: "/login",
        redirect: "products",
        pid: id,
      });
    } else {
      updateList(userId, id)
        .then((msg) => alert(msg))
        .catch((err) => console.log(err));
    }
  };

  const Buy = () => {
    if (userId === 0) {
      history.push({
        pathname: "/login",
        redirect: "buy",
        pid: id,
      });
    } else {
      history.push(`/purchase/` + id);
    }
  };

  return (
    <div className="App">
      {products[0] && (
        <Container>
          <Row>
            <Col md={6}>
              <Row>
                <Image
                  src={products[0].image}
                  height="450px"
                  width="450px"
                  rounded
                />
              </Row>
              <Row>
                <Button variant="primary" onClick={() => AddToWishlist()}>
                  Add to Wishlist
                </Button>
              </Row>
            </Col>

            <Col md={6}>
              <Row>
                <h1>{products[0].name}</h1>
              </Row>
              <Row>
                <h3>${products[0].price}</h3>
              </Row>
              <Row>
                <Card style={{ height: "23rem", width: "35rem" }}>
                  <Card.Body>
                    <Card.Title>Description</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {products[0].category}/{products[0].subcategory}
                    </Card.Subtitle>
                    <Card.Text>{products[0].description}</Card.Text>
                  </Card.Body>
                </Card>
              </Row>

              <Row>
                <Col md={3}>
                  <Button variant="primary" onClick={(e) => AddToCart(e)}>
                    Add to Cart
                  </Button>
                </Col>
                <Col md={5}>
                  <Button variant="primary" onClick={() => Buy()}>
                    Proceed to Buy
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default Products;