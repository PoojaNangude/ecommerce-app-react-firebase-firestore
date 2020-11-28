import React from "react";
import Card from "react-bootstrap/Card";
import { Link, useHistory } from "react-router-dom";

const ProductCards = ({ id, image, name, price, loggedIn }) => {
  let history = useHistory();

  return (
    <div className="col-lg-3 col-md-2 col-sm-12">
      <Card border="primary" style={{ width: "15rem"}}>
        <Card.Header>{name}</Card.Header>
        <Card.Img variant="top" src={image} height="200" width="200" />
        <Card.Body>
          <Card.Text>Price : {price}</Card.Text>
          <Card.Link
            onClick={() => {
              if (loggedIn.userid === 0) {
                history.push("/login");
              } else {
                history.push(`/purchase/` + id);
              }
            }}
          >
            Buy
          </Card.Link>
          <Card.Link as={Link} to={`/products/` + id + `/` + loggedIn.userid}>
            Details
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCards;