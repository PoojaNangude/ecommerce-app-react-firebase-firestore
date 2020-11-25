import React from 'react';
import './App.css';
import '../index.css';

const handleSubmit = (id) =>{
  alert("handle submit"+id);
}

const GenericProduct =({id,image, name, price}) =>{
    let height="300px";
    let width="300px";
  return (
  <article className='product' onClick={()=>handleSubmit(id)}>
    <img src={image} height={height} width={width} alt="" />
    <div className="App">
    <h3>{name}</h3>
    <h4>${price}</h4>
    </div>
    </article>
  );
};

export default GenericProduct
