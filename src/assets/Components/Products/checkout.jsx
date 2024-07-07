import React, { useContext, useEffect, useState } from "react";
import AddressForm from "../AddressForm/AddressForm";
import { Auth } from "../Context/AuthenticationContext";
import { Item } from "../Context/ProductContext";
import { Link, useLocation,useNavigate } from "react-router-dom";

const Checkout = () => {
    // console.log("showcart form checkout page",cart)
    const navigate = useNavigate();
    const location=useLocation()
    const cart = location.state?.cart || undefined;
    const totalPrice=location.state?.totalPrice;
    const { address} = useContext(Auth);
const handleBuy=()=>{
    const data={"productData":cart,"userData":address,"totalPrice":totalPrice}
    if(address.fullName!==''){
      fetch(`http://localhost:5000/order`,{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(data)
    })
    .then((res)=>res.json())
    .then((result)=>{
        window.location.replace(result.url)
        console.log(result)
    })
    }
    else{
      alert("please add your address before placing order")
    }
    
    console.log(data)
}

  return (
    <>
      {/* <button
        className="btn btn-outline btn-warning mt-10"
        onClick={() => {
          navigate(`/AddressForm`);
        }}
      >
        Cancel Checkout
      </button> */}
      <div className=" mt-10 mb-10 gap-0">
        {address && ( // Check if address exists
          <div className="basis-1/2 grid justify-items-center gap-4 mt-10">
            <div className="card bg-neutral-300 text-primary-content w-96">
              <div className="card-body">
                <h2 className="card-title">Shipping Address</h2>
                <p>{address.fullName}</p>
                <p>{`${address.district}, ${address.city}, ${address.area}, ${address.address}`}</p>
                <p>{address.mobileNumber}</p>
              </div>
            </div>
            <div className="card bg-neutral-300 text-primary-content w-96">
              <div className="card-body">
                <h2 className="card-title">Billing Address</h2>
                <p>{address.fullName}</p>
                <p>{`${address.district}, ${address.city}, ${address.area}, ${address.address}`}</p>
                <p>{address.mobileNumber}</p>
              </div>
            </div>
           <button className="btn btn-outline btn-secondary" onClick={()=>{navigate("/AddressForm",{state:{fromChekout:true}})}}>Modify Address</button>
            <button className="btn btn-wide m-auto" onClick={handleBuy}>Buy</button>
          </div>
          
        )}

      </div>
      
    </>
  );
};

export default Checkout;
