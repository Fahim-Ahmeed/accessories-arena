import React from "react";

const CartItem = ({ item }) => {
  const { brand, image, name, slug } = item;
  return (
    <div className="">
      <div className="card bg-gray-200 w-96 shadow-xl">
        <figure>
          <img
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{slug}</p>
          <div className="card-actions justify-end">
            {/* some functionality will be added  here*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
