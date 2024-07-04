import React, { useState } from "react";

const CartItem = ({ item, onQuantityChange, handleRemove }) => {
  if (!item) {
    return <div>Loading...</div>;
  }

  const { _id, brand, image, name, slug, price, quantity } = item;

  const handleQuantityChange = (amount) => {
    onQuantityChange(_id, amount);
  };

  const totalPrice = price * quantity;

  return (
    <div className="">
      <div className="card bg-gray-200 w-96 shadow-xl">
        <figure>
          <img
            src={image || "path/to/default-image.jpg"}
            alt={name || "Product Image"}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name || "Unnamed Product"}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{slug || "No description available"}</p>
          <p>Brand: {brand}</p>
          <p>Price: ${price}</p>
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
          <div className="card-actions justify-end mt-4">
            <button className="btn btn-danger" onClick={() => handleRemove(_id)}>
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
