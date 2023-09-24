import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Cats() {
    //بدي اجيب الداتا من apiوشكل الداتا اريه لهيك القيمة الابتدائية اريه فاضية
    let[cats,setCats]=useState([]);
    //بدي اعمل فنكشن يتعامل مع apiيا فيتش او اكسووس عادي
let getCats= async ()=>{
let response= await  axios.get("https://fakestoreapi.com/products/categories");
// طبعلي ياها بالكونسول فبدلها بحط سيت console.log(response.data);
setCats(response.data);
//حكينا الاكسوس بترجع الداتا بداتا لهيك بعمل دستركتنج ممكن بدل هدول السطرين الي فوق 
//let {data}= await  axios.get("https://fakestoreapi.com/products/categories");
//console.log(data);
}  
//عشان يشتغل الجيت كاتس لازم انادي عليه باليوز ايفيكت وحكينا اليوز ايفيكت بتوخد ارو فنكشن بنادي ع الفنكشن واريه فاضية
useEffect(()=>{
getCats();
},[])  
  return (
    <div className='container'>
      
      <h2 className='mt-5 mb-3'>All categories</h2>
      <div className="d-flex justify-content-between">
        {cats.map((cat,index)=>{
          return <div className='cat' key={index}>
           { /*بدي لما اكبس ع الكات يحولني ع الكاتيجوري الخاص بالاشي لهيك حط الكات جوات لينك */ }
          {/*الي جوا التو اي اسم لكن الكات هي متغير لهيك حطيتها بهالشكل*/}
           <Link className='btn btn-primary' to={`catigory/${cat}`}>{cat}</Link> 
          </div>
        }) }
    </div>
    </div>
  )
}
