import React from 'react'
import './ItemList.css'

const ItemList = ({title, description}) => {
  return (
    <div className='itemList'>
        <strong>{title}</strong>
        <p>{description}</p>
        <hr />
    </div>
  )
}

export default ItemList