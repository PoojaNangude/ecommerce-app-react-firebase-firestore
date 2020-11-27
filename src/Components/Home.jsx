import React from "react";
import Carousel from "./Carousel";
import RandomProducts from "./RandomProducts";
import "./App.css";

export const Home = (props) => {
  return (
    <div>
      <Carousel />
      <RandomProducts loggedIn={props.loggedIn} />
    </div>
  );
};

export default Home;
