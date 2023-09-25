import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../Products/Products.css'
import { Link } from 'react-router-dom';

export default function Products() {
    //بدي اعرض البرودكت نفس فكرة الكاتيجوري بس هون شكل الداتا غير هناك كان اريه هون اريه اوف اوبجت
    let [Products, setProducts] = useState([]);
    //بدي اعمل سيرتش ع اسم البرودكت ويطلعلي ياه
    let[search,setsearch]=useState('');

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
        <h3 className='mb-4'>Search by product name:</h3>
        {/*بدي اربط الانبوت بالسيرتش الي عرفتها فوق عن طريق الاون تشينج */}
        <input className='form-control' type='search' name='pname' onChange={(e)=>{setsearch(e.target.value)}} value={search}/>
        <div className='d-flex my-5 flex-wrap'>
          {/*بدي يفلتر العناصر الي عندي */}
          {Products.filter((product) => {
          if (search === "") {
            return product;
        } else if (product.title.toLowerCase().includes(search.toLowerCase())) {
               return product;
          }
                }).map((product) =>(
              <div className="col-lg-4 mt-5">
            <div className=' card' key={product.id} >
              <img src={product.image} alt={product.title} className='card-img-top'/>
              <div className="card-body">
              <h4 className='card-title'>{product.title}</h4>
              <p>{product.price}$</p>
              {/*لما اكبس ع ديتيلز بدي ينقلني ع صفحة الديتليز فهون برضو عندي متغير يا بسيمه اي دي او نيم او اشي اسم بس لازم النقطتين بالاب وهون الدولار ساين عشان يبين متغير*/ }
              <Link className='btn btn-danger' to ={`/product/${product.id}`}>details </Link>
              {/*هللا بالاب بحكيله  خدني ع البرودكت ديتيلز */}
              </div>
            </div>
            </div>
            
          ))}
        </div>
      </div>
    )
  }
