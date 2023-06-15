import React, { useEffect, useState } from "react"
import { Outlet, Link } from "react-router-dom";
import Cards from "./card";
import "./card.css";
import "./item-list.css"

const UsingFetch = ({ handleClick }) => {
  const [users, setUsers] = useState([])
  const [filter, setFilter] = useState()

  const fetchData = async () => {
    const response = await fetch("https://fakestoreapi.com/products")
    const data = await response.json()
    setUsers(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const filterProduct = (cat) => {
    const updatedlist = users.filter((y) => y.category === cat);
    setFilter(updatedlist);
    const isPresent = true;
  }

  return (
    <>
      <section id="card_parent">
        <ul>
          <li onClick={() => setFilter(users)}>all</li>
          <li onClick={() => filterProduct("men's clothing")}>Mens Wearing</li>
          <li onClick={() => filterProduct("electronics")}>Electronics</li>
          <li onClick={() => filterProduct("jewelery")}>Jewelery</li>
          <li onClick={() => filterProduct("women's clothing")}>Women's</li>
        </ul>
        <div className="card_container_parent">
          {filter ? (
            filter.map((item) => (
              <Cards item={item} key={item.id} handleClick={handleClick} />
            ))
          ) : (
            users.map((item) => (
              <Cards item={item} key={item.id} handleClick={handleClick} />
            ))
          )}
        </div>
      </section>
      {/* <div>
      {users.length > 0 && (
        <ul>
          {users.map(user => (
            <Cards key={user.item}/>,
            <li key={user.id}>{user.title}{user.image}</li>
          ))}
        </ul>
      )}
    </div>   */}


    </>
  )
}

export default UsingFetch
