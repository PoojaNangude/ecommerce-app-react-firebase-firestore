import React, { useState, useEffect } from "react";
import Carousel from "./Carousel";
import "./App.css";
import ProductCards from "./ProductCards";
import { fetchProducts } from "../Services/Service.firebase";

const RandomProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    let myPromise = new Promise(function (myResolve, myReject) {
      myResolve(fetchProducts());
    });
    let products = await myPromise;
    setProducts(products);
  }, []);

  return (
    <div>
      <div className="productlist">
        {products.slice(2, 8).map((product) => {
          return (
            <ProductCards
              key={product.id}
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
      <RandomProducts />
    </div>
  );
};

export default Home;
