import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../Products/Products.css'

export default function Products() {
    //بدي اعرض البرودكت نفس فكرة الكاتيجوري بس هون شكل الداتا غير هناك كان اريه هون اريه اوف اوبجت
    let [Products, setProducts] = useState([]);

    let getProduct = async () => {
      let { data } = await axios.get("https://fakestoreapi.com/products");
      setProducts(data);
    }
  
    useEffect(() => {
      getProduct();
    }, []);
  
    return (
      <div className='products container'>
        <h2>All Products</h2>
        <div className='d-flex my-5 flex-wrap'>
          
          {Products.map((product) => (
              <div className="col-lg-4 mt-5">
            <div className='product product-card' key={product.id} >
              <img src={product.image} alt={product.title} className='card-img-top'/>
              <div className="card-body">
              <h4 className='card-title'>{product.title}</h4>
              <p>{product.price}$</p>
              </div>
            </div>
            </div>
            
          ))}
        </div>
      </div>
    )
  }
