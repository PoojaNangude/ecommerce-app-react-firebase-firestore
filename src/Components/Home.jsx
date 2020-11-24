import React from 'react'
import Carousel from './Carousel';
import GenericProduct from './GenericProduct';
import RandomProducts from './RandomProducts';
import './App.css';

export const Home = () => {
    return (
        <div>
            <Carousel/>
            <RandomProducts />
        </div>
    )
}

export default Home;