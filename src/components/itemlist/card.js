import React from 'react'
import "./card.css";
import { NavLink } from 'react-router-dom';
import { FiStar } from 'react-icons/fi';
import Tshirt from "../body/img/background-images/crew_front.png";
const card = ({ item, handleClick }) => {
  const { id, title, author, price, image, rating } = item;
  const Id = [rating];
  const mystyle = {
    height: "190px",
    width: "145px",
  };
  return (
       
         <div className="cards">
<NavLink to={`/cards/${item.id}`} class="link-cart">
      <div className="image_box">
        <img src={image} alt="Image" style={mystyle} />
      </div>
      <div className="details">
        {/* <p>{id}</p> */}
        <p style={{ fontSize: "15px", fontWeight: 600 }}>{title.slice(0, 25)}</p>
        {/* <p>{author}</p> */}
        <p style={{fontsize: "12px", color: "black" }}>Price - {price}Rs</p>  
         
                
                          <span>{rating.rate}<FiStar/></span> ||
<span>{rating.count}</span> 
                  
                
      
        {/* <button onClick={()=>handleClick(item)} className='cart-add-to-cart'>Add to Cart</button> */}
      </div> </NavLink>
    </div> 
 
  )
}
export default card
