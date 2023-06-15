import React from 'react'
import { Outlet, Link } from "react-router-dom";
import "./nav.css"
import Img from "./img/logo.png"
import { FiPhoneCall } from 'react-icons/fi';
import { FiShoppingCart } from 'react-icons/fi';
import { FiAlignJustify } from 'react-icons/fi';


export default function nav({size}) {
  return (
    <header>
      <div className="box-parent">
        <div className='left-nav-parent'>
          <h2><FiPhoneCall /></h2>
        </div>
        <div className='centre-nav-parent'> <img src={Img}></img></div>
        <div className='right-nav-parent'> 

          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/productpage">Productpage</Link></li>
            <li><Link to="/aboutus">Contact</Link></li>
            <li><Link to="/Itemlist">ITEM LIST</Link></li>
          </ul>
          
           <h2>
           <Link to="/aboutus"><FiShoppingCart /></Link>
           <p className='cart-size'>{size}</p>
           </h2>
          <h2><FiAlignJustify /></h2>
         
          </div>
      </div>
    </header>
  )
}
