import React from 'react'
import { Link } from 'react-router-dom'

const ItemList = ({ items}) => {
  return (
    <div>
      <h1>Item List</h1>
      <ul>
        {
          items.map((i) => {
            return (
              <li key={i.id}><Link to={`/items/${i.id}`}>{i.name}</Link> </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default ItemList
