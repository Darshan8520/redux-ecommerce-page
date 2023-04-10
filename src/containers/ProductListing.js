import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponenet from './ProductComponenet';
import { fetchProducts } from '../Redux/actions/productActions';
import '../App.css'
const ProductListing = () => {
    const products = useSelector((state)=>state)
    const dispatch = useDispatch()
    // const fetchProducts = async ()=>{
    //    const response = await axios.get('https://fakestoreapi.com/products')
    //    .catch((err)=>{
    //     console.log(err)
    //    })
    // //    console.log(response.data);
    //    dispatch(setProducts(response.data))
    // }
    useEffect(()=>{
      dispatch(fetchProducts())
    },[])
    console.log(products);
  return (
    <div className='ui grid container' style={{marginTop:20}}>
      <ProductComponenet/>
    </div>
  )
}

export default ProductListing
