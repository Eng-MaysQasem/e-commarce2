import './App.css';
import Home  from './componnants/Home/Home';
import Header from './componnants/Header/Header.jsx';
import Navbar from './componnants/Navbar/Navbar.jsx';
import { Route, Routes } from 'react-router-dom';
import Products from './componnants/Products/Products';
import PageNotFound from './componnants/PageNotFound/PageNotFound';
import CatigoryProduct from'./componnants/CatigoryProduct/CatigoryProduct.jsx';
import ProductDetails from'./componnants/ProductDetails/ProductDetails.jsx'

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Header/>
  
    <Routes>
      <Route path='Products' element={<Products/>}></Route>
      <Route path='home' element={ <Home/>}></Route>
      <Route path='/' element={ <Home/>}></Route>
      <Route path='catigory/:id' element={ <CatigoryProduct/>}></Route>
      <Route path='product/:id' element={<ProductDetails/>}></Route>


      <Route path='*' element={ <PageNotFound/>}></Route>



    </Routes>
     </div>  
     
    
  );
}

export default App;
