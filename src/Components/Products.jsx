import React, {useEffect,useState} from "react";
import Image from "react-bootstrap/Image";
import { Container, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import products from "../Constants/products.jsx";
import users from "../Constants/users";
import { useHistory } from "react-router-dom";
import { fetchProducts } from "../Services/Service.firebase";
import GetProducts from './GetProducts';
import ProductCards from './ProductCards';

const Products = (props) => {
  const [products,setProducts] = useState([]);
  // let k =GetProducts()
  // console.log(k)

  useEffect( async ()=>{
    let myPromise = new Promise(function(myResolve, myReject){
      myResolve(fetchProducts())
    })
    let products = await myPromise;
    setProducts(products);
  },[])

  const history = useHistory();
  let id = props.match.params.id;
  console.log(id);
  let m = products.find((x) => x.id.toString() === id.toString());
  console.log(m);

  let userid = props.match.params.userid;
  console.log(userid);
  const AddToCart = () => {
    if (userid.toString() === "0") {
      history.push({
        pathname: "/login",
        redirect: "products",
        pid: id,
      });
    } else {
      let user = users.find((x) => x.id.toString() === userid.toString());
      if (user.cart.includes(id)) {
        alert("Item already exists in cart.");
      } else {
        user.cart.push(id);
        console.log(user.cart);
        alert("Product added to cart.");
      }
    }
  };

  const AddToWishlist = () => {
    if (userid.toString() === "0") {
      history.push({
        pathname: "/login",
        redirect: "products",
        pid: id,
      });
    } else {
      let user = users.find((x) => x.id.toString() === userid.toString());
      if (user.wishlist.includes(id)) {
        alert("Item already exists in wishlist.");
      } else {
        user.wishlist.push(id);
        alert("Product added to wishlist.");
      }
    }
  };

  const Buy = () => {
    if (userid.toString() === "0") {
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
      {/* <Container>
        <Row>
          <Col md={6}>
            <Row>
              <Image src={m.image} height="450px" width="450px" rounded />
            </Row>
            <Row>
              <Button variant="primary" onClick={() => AddToWishlist()}>
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
      </Container> */}
    </div>
  );
};

export default Products;
