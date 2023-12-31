import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import '../CatigoryProduct/CatigoryProduct.css'

{/*export default function CatigoryProduct() {
    let[catProduct,setcatProduct]=useState([]);
    let getProducts=async()=>{
        // وبرجع ال برامس دوت نيمبالرابط عندي الكاتيجوري متغيرة فبستخدم هوك جاهز اسمه يوز برامس عشان اعرف المتغير
        let Params=useParams();
        let{data}=await axios.get(`https://fakestoreapi.com/products/category/${Params.name}`);
        console.log(data);
    }
    useEffect(()=>{
getProducts();
    },[])
  return (
    <div>CatigoryProduct</div>
  )
}*/}
export default function CategoryProduct() {
    let [catProduct, setCatProduct] = useState([]);
    let params = useParams();
  
    let getProducts = async () => {
      
        let { data } = await axios.get(`https://fakestoreapi.com/products/category/${params.id}`);
        console.log(data);
        setCatProduct(data); 
      
    }
  
    useEffect(() => {
      getProducts();
    }, []); 
    
        {/*نفس كود البرودكتس*/ }
        return (
            <div className='products container'>
              <h2>All {params.id}</h2>
              <div className='d-flex my-5 flex-wrap'>
                {catProduct.map((catPr) => (
                  <div className="col-lg-4 mt-5" key={catPr.id}>
                    <div className='product card'>
                      <img src={catPr.image} alt={catPr.title} className='card-img-top'/>
                      <div className="card-body">
                        <div className="row">
                        <h5 className='card-title  '>{catPr.title}</h5>
                        </div>

                        <p>{catPr.price}$</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        }
        
        
        
        
        
        

