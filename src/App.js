import logo from './logo.svg';
import React, { Component }  from 'react';
import {useState} from 'react';
import { Switch } from "react-router";
import './App.css';
import Body from "././components/body/body.js";
import Nav from "././components/header/nav.js";
import Itemlist from "././components/itemlist/itemlist.js";
import Footer from "././components/footer/footer.js";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import ProductDetail from './ProductDetail';
import Aboutus from './Aboutus';



function App() {
  const [cart , setCart] = useState([]);
  const handleClick = (item)=>{
    let isPresent = false;
		cart.forEach((product)=>{
			if (item.id === product.id)
			isPresent = true;
		})
    if (isPresent){
			setTimeout(()=>{
				alert("cart allready added")
			}, 200);
			return ;
		}
    // setCart({...cart,item})
    setCart(current => [...cart, item]);
    console.log(cart)
	}


  

  return (
    <> 
    <Nav size={cart.length}/> 
     {/* <Body handleClick={handleClick}/> */}
      <Switch>
         {/* <Route exact path="/" component={Itemlist} /> */}
         <Route exact path="/" render={props => <Itemlist handleClick = {handleClick} />} />
         {/* <Route path="/Itemlist" exact>
         <Itemlist handleClick={handleClick}/>
         </Route> */}
         <Route exact path="/productpage" component={Body} />
         <Route exact path="/Itemlist" render={props => <Itemlist handleClick = {handleClick} />} />
         <Route exact path="/aboutus" render={props => <Aboutus Cart = {cart} />} />

         {/* <Route exact path="/cards/:id" component={Body} handleClick={handleClick}/> */}
         <Route exact path="/cards/:id" render={props => <Body handleClick = {handleClick} />} />
        </Switch>
        <Footer/> 
    </>
  );
}
export default App;
