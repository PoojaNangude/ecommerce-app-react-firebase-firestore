import React,{useState, useEffect} from "react";
import Carousel from "./Carousel";
import "./App.css";
import ProductCards from './ProductCards';
import { fetchProducts } from "../Services/Service.firebase";

const RandomProducts = (props) => {
  const [products,setProducts] = useState([]);
  
  useEffect( async ()=>{
    let products = await fetchProducts();
    setProducts(products);
    console.log(products); 
  },[])

  return (
    <div>
      <h1 className="App">Some of our Products</h1>
      <div className="productlist">
        {products.slice(2, 8).map((product) => {
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
