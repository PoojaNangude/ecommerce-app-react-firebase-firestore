import React, { useEffect, useState, useContext } from "react";
import Image from "react-bootstrap/Image";
import { Container, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import { fetchProducts, updateList } from "../Services/Service.firebase";
import { AuthContext } from "../Components/AuthProvider";

const Products = (props) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setfilteredProducts] = useState([]);
  const history = useHistory();
  let id = props.match.params.id;

  const { userId } = useContext(AuthContext);
  useEffect(async () => {
    let myPromise = new Promise(function (myResolve, myReject) {
      myResolve(fetchProducts());
    });
    let prod = await myPromise;
    setProducts(prod);
    prod = prod.find((x) => x.id.toString() === id.toString());
    setfilteredProducts(prod);
  }, []);

  const AddToCart = () => {
    if (userId.toString() === 0) {
      history.push({
        pathname: "/login",
        redirect: "products",
        pid: id,
      });
    } else {
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
      {filteredProducts && (
        <Container>
          <Row>
            <Col md={6}>
              <Row>
                <Image
                  src={filteredProducts.image}
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
                <h1>{filteredProducts.name}</h1>
              </Row>
              <Row>
                <h3>${filteredProducts.price}</h3>
              </Row>
              <Row>
                <Card style={{ height: "23rem", width: "35rem" }}>
                  <Card.Body>
                    <Card.Title>Description</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {filteredProducts.category}/{filteredProducts.subcategory}
                    </Card.Subtitle>
                    <Card.Text>{filteredProducts.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Row>

              <Row>
                <Col md={3}>
                  <Button variant="primary" onClick={() => AddToCart()}>
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
