import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchData } from '../store/productSlice'


function Navbar() {

    const state = useSelector(state => state.cart)

    const [api, setApi] = useState("https://fakestoreapi.com/products")

  const dispatch = useDispatch()


  const allProductsApi = "https://fakestoreapi.com/products"
  const electronicsApi = "https://fakestoreapi.com/products/category/electronics"
  const jewelleryApi = "https://fakestoreapi.com/products/category/jewelery"
  const mensApi = "https://fakestoreapi.com/products/category/men's clothing"
  const womensApi = "https://fakestoreapi.com/products/category/women's clothing"


  const handleHome = () => {
    setApi(allProductsApi)
    // dispatch(fetchData(api))
  }
  const handleElectronics = () => {
    setApi(electronicsApi)
    // dispatch(fetchData(api))
  }
  const handleJewellery = () => {
    setApi(jewelleryApi)
    // dispatch(fetchData(api))
  }
  const handleMens = () => {
    setApi(mensApi)
    // dispatch(fetchData(api))
  }
  const handleWomens = () => {
    setApi(womensApi)
    // dispatch(fetchData(api))
  }



  useEffect(() => {
    dispatch(fetchData(api))
  }, [handleHome, handleElectronics, handleJewellery, handleMens, handleWomens])


  return (
    <nav>
       <Link to="/"> <h1 className="logo" onClick={() => handleHome()}>My Store</h1></Link>
        <ul className="nav-links">
            <Link to="/electronics" className="category" onClick={() => handleElectronics()} >Electronics</Link>
            <Link to="/jewellery" className="category" onClick={() => handleJewellery()} >Jewellery</Link>
            <Link to="/mens" className="category" onClick={() => handleMens()} >Men's Clothing</Link>
            <Link to="/womens" className="category" onClick={() => handleWomens()} >Women's Clothing</Link>
            <Link to="/cart"><li> <button className="cart"> Cart ({state.length})  </button> </li></Link>
        </ul>
    </nav>
  )
}

export default Navbar