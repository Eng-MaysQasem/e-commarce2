import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
   <div>
  <div>
 
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
    <div className="container">
      <Link className="navbar-brand" to="/">M_Shop</Link>
      
        <ul className="navbar-nav me-auto">
         
          <li className="nav-item">
            <Link className="nav-link" to="Products">Products</Link>
          </li>
        </ul>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">rigistor</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">Login</Link>
          </li>
          </ul>
          </div>
    </nav>
    </div>
    </div>
    
  

  )}
