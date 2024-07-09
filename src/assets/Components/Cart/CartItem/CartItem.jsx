import React, { useState } from "react";
import { Link } from "react-router-dom";

const CartItem = ({ item, onQuantityChange, handleRemove }) => {
  if (!item) {
    return <div>Loading...</div>;
  }

  const { _id, brand, images, name, slug, price, quantity,productType
  } = item;

  const handleQuantityChange = (amount) => {
    onQuantityChange(_id, amount);
  };

  const totalPrice = price * quantity;

  return (
    <div className="">
      <div className="card bg-gray-200 w-96 shadow-xl">
        <figure>
          <img
            src={images || "path/to/default-image.jpg"}
            alt={name || "Product Image"}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name || "Unnamed Product"}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p><span className="font-bold">Product Type: </span> {productType}</p>
          <p><span className="font-bold">Brand: </span>  {brand}</p>
          <p> <span className="font-bold">Price: </span> <span className="
          text-yellow-500">${price}</span>  </p>
          <div className="flex items-center gap-2">
            <button
              className="btn btn-secondary"
              onClick={() => handleQuantityChange(-1)}
              disabled={quantity <= 1}
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              className="btn btn-secondary"
              onClick={() => handleQuantityChange(1)}
            >
              +
            </button>
          </div>
          <p>Total Price: ${totalPrice.toFixed(2)}</p>
         <div className="flex justify-between">
         <div className="card-actions justify-end mt-4">
          <Link to={`/productDetails/${_id}`}>
          <button className="btn btn-outline btn-info">
              See More 
            </button>
          </Link>
          </div>
         <div className="card-actions justify-end mt-4">
            <button className="btn btn-outline btn-warning" onClick={() => handleRemove(_id)}>
              Remove
            </button>
          </div>

         </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;