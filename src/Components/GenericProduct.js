import React from 'react';
import './App.css';
import '../index.css';

const GenericProduct =({image, name, price},props) =>{
    let height="300px";
    let width="300px";
  return (
  <article className='product'>
    <img src={image} height={height} width={width} alt="" />
    <div className="App">
    <h1>{name}</h1>
    <h4>${price}</h4>
    </div>
    </article>
  );
};

export default GenericProduct
