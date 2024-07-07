import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { productConfigurations } from '../../Dashboard/AdminDashboard/AdminSidebar/AddProduct/productConfigurations';
import { Auth } from '../../Context/AuthenticationContext';
import { Item } from '../../Context/ProductContext';
const SingleProduct = () => {
    const navigate=useNavigate()
    const{cart,setCart}= useContext(Item)
    const {notify}=useContext(Auth)
    const {id}=useParams()
    const[productData,setProductData]=useState([])
    useEffect(() => {
        const fetchProduct = async () => {
          try {
            const response = await axios.get(
              `http://localhost:5000/api/products/${id}`
            );
            const productData = response.data;
            setProductData(productData)
            // Assuming the product type is included in the fetched product data
    
          } catch (error) {
            console.error("Error fetching product:", error);
          }
        };
        fetchProduct();
      }, [id]);
      console.log(productData)


      const handleBuy = async (id) => {
        console.log(id)
        if (cart.includes(id)) {
          // setCart(cart.filter((item) => item !== id));
          notify(`${name} already added to the cart`);
        } else {
          setCart([...cart, id]);
          notify(`${name} added to the cart`);
        }
        navigate("/cart")
      };
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={productData.images}
            alt={productData.name}
            className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Name: {productData.name}</h1>
            <h1 className="text-xl font-bold">Brand: {productData.name}</h1>
            <h1 className=" justify text-xl font-bold">Category: {productData.category}</h1>
            <h1 className=" text-xl font-bold">Product Type: {productData.productType}</h1>
            <h1 className='flex justify-between'>
        <span>Quantity:{productData.stockQuantity}</span>
        <span className='text-yellow-500'>Price:{productData.price}</span>
            </h1>
            <p className="py-6 text-justify ">
             Details:{productData.description}
            </p>
            <button className="btn btn-primary" onClick={()=>{handleBuy(productData._id)}}>Buy Product</button>
          </div>
        </div>
      </div>
    );
};

export default SingleProduct;