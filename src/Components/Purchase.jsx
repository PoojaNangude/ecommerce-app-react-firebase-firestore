import React, { useState, useEffect } from "react";

import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { fetchProductFromId } from "../Services/Service.firebase";

const Purchase = (props) => {
  const id = props.match.params.id;
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const data = await fetchProductFromId(id);

    setProducts(data);
  }, []);

  return (
    <div>
      <center>
        <h1>Order Summary</h1>
        <Image src={products.image} height="250px" width="220px"></Image>
        <h3>{products.name}</h3>
        <h4>Price : ${products.price}</h4>
        <Button>Proceed to Purchase</Button>
      </center>
    </div>
  );
};

export default Purchase;
