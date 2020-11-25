import React from 'react';
import './App.css';
import '../index.css';
import Products from './Products';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";

const handleSubmit = (id) =>{
  console.log(id);

  return(
    <div>
      <Router>
        <Switch>
        <Route path="/product"><Products/></Route>
        </Switch>
      </Router>
    </div>
  );
}

const GenericProduct =({id,image, name, price}) =>{
    let height="300px";
    let width="300px";
  return (
    <div className="clickable">
      <article className='product' onClick={()=>handleSubmit(id)}>
      <img src={image} height={height} width={width} alt="" />
      <div className="App">
      <h3>{name}</h3>
      <h4>${price}</h4>
      </div>
      </article>
    </div>
  );
};

export default GenericProduct
