import React from "react";
import Card from "react-bootstrap/Card";

const ProductCards = ({ image, name, price }) => {
  return (
    <div className="col-lg-3 col-md-2 col-sm-12">
      <Card border="primary" style={{ width: "15rem" }}>
        <Card.Header>{name}</Card.Header>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Text>Price : {price}</Card.Text>
          <Card.Link href="#">Buy</Card.Link>
          <Card.Link href="#">Details</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCards;
