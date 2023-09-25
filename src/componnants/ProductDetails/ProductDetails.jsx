import { useParams } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import'../ProductDetails/ProductDetails.css'

export default function ProductDetails() {
    //جواتها بدي اجيب داتا من api
    let params=useParams();
    let[product,setproduct]=useState('');
    let getProduct = async () => {
      
        let { data } = await axios.get(`https://fakestoreapi.com/products/${params.id}`);
        console.log(data);
        setproduct(data); 
      
    }
  
    useEffect(() => {
      getProduct();
    }, []); 
  return (
    <div className='productsd'>
        <img src={product.image} />
        <div className="details">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        </div>
    </div>
  )
}
