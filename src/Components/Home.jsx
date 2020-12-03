import React from "react";
import Carousel from "./Carousel";
import "./App.css";
import products from "../Constants/products";
import ProductCards from "./ProductCards";

const RandomProducts = (props) => {
  return (
    <div>
      <h1 className="App">Some of our Products</h1>
      <div className="productlist">
        {products.slice(0, 6).map((product) => {
          return (
            <ProductCards
              key={product.id}
              loggedIn={props.loggedIn}
              {...product}
            ></ProductCards>
          );
        })}
      </div>
    </div>
  );
};

export const Home = (props) => {
  return (
    <div>
      <Carousel />
      <RandomProducts loggedIn={props.loggedIn} />
    </div>
  );
};

export default Home;
