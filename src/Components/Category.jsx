import React, { useState, useEffect } from "react";
import CardDeck from "react-bootstrap/CardDeck";
import ProductCards from "./ProductCards";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import { fetchData } from "../Services/Service.firebase";
import Spinner from "react-bootstrap/Spinner";

const Category = (props) => {
  const [products, setProducts] = useState([]);
  const [isavl, setIsavl] = useState(false);

  const [sub_type_a, setSub_type_a] = useState([]);
  const [sub_type_b, setSub_type_b] = useState([]);

  useEffect(() => {
    fetchData()
      .then((prod) => setProducts(prod))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const main_type = products.filter(
      (item) => item.category === props.category
    );

    setSub_type_a(
      main_type.filter((item) => item.subcategory !== main_type[0].subcategory)
    );
    setSub_type_b(
      main_type.filter((item) => item.subcategory === main_type[0].subcategory)
    );
  }, [products, props]);

  useEffect(() => {
    if (products && products.length !== 0) {
      setIsavl(true);
    }
  });

  return (
    <div>
      {!isavl && (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )}
      {isavl && (
        <ListGroup>
          <ListGroupItem>
            <h1>{sub_type_a[0].subcategory}</h1>
          </ListGroupItem>
          <ListGroupItem>
            <CardDeck>
              {sub_type_a.map((e) => {
                return (
                  <ProductCards
                    key={e.id}
                    loggedIn={props.loggedIn}
                    {...e}
                  ></ProductCards>
                );
              })}
            </CardDeck>
          </ListGroupItem>

          <ListGroupItem>
            <h1>{sub_type_b[0].subcategory}</h1>
          </ListGroupItem>
          <ListGroupItem>
            <CardDeck>
              {sub_type_b.map((e) => {
                return (
                  <ProductCards
                    key={e.id}
                    loggedIn={props.loggedIn}
                    {...e}
                  ></ProductCards>
                );
              })}
            </CardDeck>
          </ListGroupItem>
        </ListGroup>
      )}
    </div>
  );
};

export default Category;
