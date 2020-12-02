import React, { useState, useEffect } from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import './App.css';
import firebase from '../firebase';

const Carousel = () => {
    const settings = {
        dots: true,
        slidesToShow: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode:true,
    };

    const [deals,setDeals]=useState([]);
    useEffect(()=>{
        const fetchData = async () =>{
        const db = firebase.firestore();
        const data = await db.collection("deals").get();
        setDeals(data.docs.map(doc => doc.data()));
        }
        fetchData();
    },[])
    console.log(deals);
    return (
        <div>
            <h1 className="App">WELCOME!!!</h1>
            <h4 className="App">WE HAVE GOT THE BEST DEALS FOR YOU</h4>
            <Slider {...settings} className="App">
                {deals.map((deal) => {
                    return(
                        <div key={deal.id}>
                            <img width="1300" height="450"  src={deal.url} alt="NA"/>
                        </div>
                    );
                })}
            </Slider>
        </div>
    )
}

export default Carousel