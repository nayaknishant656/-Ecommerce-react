import { Link, useParams } from 'react-router-dom';
import React, { useEffect, useState } from "react"

export default function Aboutus({Cart}) {
    console.log(Cart)
    const image ={
      height: "50px",
      width: "40px",
      backgroundColor: "red",
    }
    return (
      <div>
         {Cart?.map((item) => {
          return (
            <article key={item.id} style={{padding:"25px"}}>
              <h5>{item.title}</h5>
              <img src={item.image} style={image}></img>
              <Link to={`/cards/${item.id}`}>more info</Link>
            </article>
          );
        })}
      </div>
    );
}


