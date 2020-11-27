import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import ProductCards from "./ProductCards";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import products from "../Constants/products";

const Category = (props) => {
  const main_type = products.filter((item) => item.category === props.category);

  const sub_type_a = main_type.filter(
    (item) => item.subcategory !== main_type[0].subcategory
  );
  const sub_type_b = main_type.filter(
    (item) => item.subcategory === main_type[0].subcategory
  );

  return (
    <ListGroup>
      <ListGroupItem>
        <h1>{sub_type_a[0].subcategory}</h1>
      </ListGroupItem>
      <ListGroupItem>
        <CardDeck>
          {sub_type_a.map((e) => {
            return <ProductCards key={e.id} {...e}></ProductCards>;
          })}
        </CardDeck>
      </ListGroupItem>

      <ListGroupItem>
        <h1>{sub_type_b[0].subcategory}</h1>
      </ListGroupItem>
      <ListGroupItem>
        <CardDeck>
          {sub_type_b.map((e) => {
            return <ProductCards key={e.id} {...e}></ProductCards>;
          })}
        </CardDeck>
      </ListGroupItem>
    </ListGroup>
  );
};

export default Category;
