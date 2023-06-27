import { Link, useParams } from 'react-router-dom';
import React, { useEffect, useState } from "react"
import "./body.css"
import Tshirt from "./img/background-images/crew_front.png";
import Hoodies from "./img/background-images/mens_hoodie_front.png";
import { fabric } from 'fabric'

export default function Body({handleClick}) {
  const { id } = useParams();
  const [users, setUsers] = useState([])
  const fetchUserData = () => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }
  useEffect(() => {
    fetchUserData()
  }, [])
  var imgUrl = users.image;
  var divStyle = {
    backgroundImage: 'url(' + imgUrl + ')'
  }
  function preview() {
    document.getElementById('inp').onchange = function (e) {
      var img = new Image();
      img.onload = draw;
      img.onerror = failed;
      img.src = URL.createObjectURL(this.files[0]);
    };
    function draw() {
      var canvas = new fabric.Canvas('canvas');
      canvas.setDimensions({ width: 120, height: 120 });
      fabric.Image.fromURL(this.src, function (oImg) {
        oImg.set({
          top: 1,
          angle: 0,
          left: 9,
          right: 0,
          bottom: 0,
          padding: 20,
          cornersize: 0,
          hasRotatingPoint: true
        });
        oImg.scaleToHeight(canvas.height)
        oImg.scaleToWidth(canvas.width)
        oImg.centerV();
        canvas.add(oImg);
      });
    }
    function failed() {
      console.error("The provided file couldn't be loaded as an Image media");
    }

  }
  return (
    <>
      <section id='main'>
        <div className='parent_container'>
          <div className='rightside_box'>
            <div className='main-preview-col' style={divStyle}>
              <canvas id="canvas" ></canvas>
            </div>
            <div className='down-button-col'>
              <div className='cloth-type-parent'>
                <div className='box'>
                  <img src={Tshirt}></img>
                </div>
                <div className='box red'>
                  <img src={Hoodies}></img>
                </div>
                <div className='box blue'>
                  <img src={Hoodies}></img>
                </div>
                <div className='box green'>
                  <img src={Hoodies}></img>
                </div>
                <div className='box orange'>
                  <img src={Hoodies}></img>
                </div>
              </div>
            </div>
          </div>
          <div className='leftside_box'>
            <div className='parent-left-main'>
              <h1>{users.title}</h1>
              <div className='bullet-points-paragraph'>
                {/* <h3>Print to look professional.</h3> */}
                <ul>
                  <li>{users.description}</li>
                  <li>{users.category}</li>
                </ul>
              </div>
              <h2>{users.price + '₹'}</h2>
              <p>Cash On Delivery Available/All over India</p>
              <div className='buttons-cart'>
              <button onClick={()=>handleClick(users)} >Add to Cart</button>
              <p>{handleClick}</p>
              <Link to="/aboutus"><button>Check Out</button></Link>
                <form action="/upload" method="post" enctype="multipart/form-data">
                  <input type='file' id="inp" name="profileImage" onClick={preview} ></input>
                  <button type="submit">Upload</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

