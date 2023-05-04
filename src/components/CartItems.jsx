import React from 'react'
import { useDispatch } from 'react-redux'
import { remove, increment, decrement, discount } from '../store/cartSlice'

function CartItems({ cartItem }) {

  const dispatch = useDispatch()

  const { id, title, price, image, cartQuantity } = cartItem

  const handleRemove = (id) => {
    dispatch(remove(id))
  }

  const handleDecrement = (id) => {
    dispatch(decrement(id))
    if (cartQuantity === 1) {
      dispatch(remove(id))
    }
  }

  const handleIncrement = (id) => {
    dispatch(increment(id))
  }

  const handleDiscount = (id) => {
    dispatch(discount(id))
  }




  return (
    <div className="cart-item">
      <img src={image} alt="" />
      <span>
        <h1>{title}</h1>
        <h3>Rate : {price}</h3>
        <h3>Qty : {cartQuantity}</h3>
        <div className='discount'>
          <div>
            <button className='decrement' onClick={() => handleDecrement(id)} >-</button>
            <button className='increment' onClick={() => handleIncrement(id)} >+</button>
          </div>
          <div>
            <input type="radio" onChange={() => handleDiscount(id)} /> Flat 50% OFF
          </div>
        </div>
      </span>
      <button className="remove-btn" onClick={() => handleRemove(id)}>Remove Item</button>
    </div>
  )
}

export default CartItems