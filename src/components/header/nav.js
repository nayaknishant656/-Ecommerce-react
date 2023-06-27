import React from 'react'
import { Outlet, Link } from "react-router-dom";
import "./nav.css"
import Img from "./img/logo.png"
import { FiCrosshair, FiSettings } from 'react-icons/fi';
import { FiShoppingCart } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';


export default function nav({size,myFunction}) {

  function sidebar() {
    console.log("it has been clicked");
    var x = document.getElementById("navsidebar");
  const style2 = {
  transform: "translateX(0%)",
  opacity: "100",
};

const style = {
  transform: "translateX(0%)",
  opacity: "100",
};

if (x.style.style2 === style.stlye) {
  x.style.transform = style2.transform;
  x.style.opacity = style2.opacity;
} else {
  x.style.transform = style.transform;
}
  }

  const mystyle = {
    transform: "translateX(100%)",
    opacity: "0",
  }
  
  return (
    <header>
      <div className="box-parent">
        <div className='left-nav-parent'>
          <h2 id='myDIV' onClick={sidebar}><FiSettings /></h2>
        </div>
        <div className='centre-nav-parent'> <img src={Img}></img></div>

        <div className='right-nav-parent' id='rightnav'> 
        <h2 className='icon-right'>
           <Link to="/aboutus"><FiShoppingCart /></Link>
           <p className='cart-size'>{size}</p>
           </h2>
           <div id='navsidebar'>
           <AiOutlineClose onClick={() => document.getElementById("navsidebar").style = {mystyle}}/>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/productpage">Productpage</Link></li>
            <li><Link to="/aboutus">Contact</Link></li>
            <li><Link to="/Itemlist">ITEM LIST</Link></li>
          </ul>
          </div>
          {/* <h2><FiAlignJustify /></h2> */}
          </div>
      </div>
    </header>
  )
}
