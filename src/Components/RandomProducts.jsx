import React from 'react'
import products from '../Constants/products';
import '../index.css';
// import GenericProduct from './GenericProduct';
import GenericProduct from './GenericProduct';

const RandomProducts = () => {
    return (
        <div>
            <h1 className="App">Some of our Products</h1>
                <div className="productlist">
                    {products.slice(0,6).map((product) => {
                        return <GenericProduct key={product.id} {...product}></GenericProduct>; 
            })}
                </div>
        </div>
    )
}

export default RandomProducts
