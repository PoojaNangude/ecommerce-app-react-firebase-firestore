import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import ProductCards from "./ProductCards";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

const Category = (props) => {
  const typea = props.list[0].filter(
    (item) => item.subcategory === props.list[0][0].subcategory
  );
  const typeb = props.list[0].filter(
    (item) => item.subcategory !== props.list[0][0].subcategory
  );
  console.log(typeb[0].subcategory);

  return (
    <ListGroup>
      <ListGroupItem>
        <h1>{typea[0].subcategory}</h1>
      </ListGroupItem>
      <ListGroupItem>
        <CardDeck>
          {typea.map((e) => {
            return <ProductCards key={e.id} {...e}></ProductCards>;
          })}
        </CardDeck>
      </ListGroupItem>

      <ListGroupItem>
        <h1>{typeb[0].subcategory}</h1>
      </ListGroupItem>
      <ListGroupItem>
        <CardDeck>
          {typeb.map((e) => {
            return <ProductCards key={e.id} {...e}></ProductCards>;
          })}
        </CardDeck>
      </ListGroupItem>
    </ListGroup>
  );
};

export default Category;
