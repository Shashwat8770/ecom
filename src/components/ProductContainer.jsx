import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, STATUSES } from "../store/productSlice";
import Product from "./Product";


function ProductContainer() {


  //  const dispatch = useDispatch()

  const {data : products , status } = useSelector(state => state.product)

  // const allProductApi = "https://fakestoreapi.com/products"



  // const [products , setProducts] = useState([]);

  // const getProducts = async() => {
  //   const res = await fetch("https://fakestoreapi.com/products");
  //   const data = await res.json();
  //   setProducts(data);
  // }

  // useEffect(()=>{
  //     // getProducts();
  //      dispatch(fetchData(allProductApi))
  // },[])

   if(status === STATUSES.LOADING){
       return <h1>Loading...</h1>
   }

   if(status === STATUSES.ERROR){
    return <h1>Something Went Wrong</h1>
   }

  return ( 
    <div className="container">
      <h1 className="all-products-title">All Products</h1>
        {
          products.map(product => <Product key={product.id} product={product} />)
        }
    </div>
  );
}

export default ProductContainer;
