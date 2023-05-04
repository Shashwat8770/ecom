import React from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../store/cartSlice'

function Product({product}) {

    const dispatch = useDispatch()

    const handleClick = (product) => {
         dispatch(add(product))
    }

   const {title, price, image} = product

  return (
    <div className="product">
      <img src={image} alt="" />
      <h1>{title}</h1>
      <span>
        <h3>Price : {price} </h3>
        <button className="add_cart" onClick={()=>handleClick(product)} >Add to cart</button>
      </span>
    </div>
  )
}

export default Product