import React from "react";
import products from "../Constants/products";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const Purchase = (props) => {
  const id = props.match.params.id;

  const item = products.filter((prod) => prod.id.toString() === id);

  return (
    <div>
      <h1>Order Summary</h1>
      <Image src={item[0].image} height="250px" width="220px"></Image>
      <h3>{item[0].name}</h3>
      <h4>Price : ${item[0].price}</h4>
      <Button>Proceed to Purchase</Button>
    </div>
  );
};

export default Purchase;
