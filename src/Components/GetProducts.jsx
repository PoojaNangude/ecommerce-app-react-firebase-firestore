import {useState} from 'react';
import {fetchProducts} from '../Services/Service.firebase';

async function GetProducts(){
    const [products,setProducts] = useState([]);
    let myPromise = new Promise(function(myResolve, myReject){
      myResolve(fetchProducts())
    })
    let prod = await myPromise;
    setProducts(prod);
    // console.log(prod);
    return(products);
}

export default GetProducts