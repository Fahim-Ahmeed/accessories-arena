import { useContext, useState } from "react";
import { BsCartXFill, BsFillCartCheckFill } from "react-icons/bs";
import { TbJewishStar, TbJewishStarFilled } from "react-icons/tb";
import { Item } from "../../Context/ProductContext";
import { Auth } from "../../Context/AuthenticationContext";
import { RxUpdate } from "react-icons/rx";
import { RiDeleteBin6Fill } from "react-icons/ri";
import axios from 'axios';
import UpdateProduct from "../../Dashboard/AdminDashboard/UpdateProduct/UpdateProduct";
import { Link, useNavigate } from "react-router-dom";

const Product = ({ item }) => {
 const navigate=useNavigate()
  const { cart, setCart, wishlist, setWishlist } = useContext(Item);
  const { notify, role } = useContext(Auth);
  const {
    _id,
    name,
    category,
    brand,
    description,
    price,
    stockQuantity,
    images,
  } = item;
console.log(role)
console.log(item)
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCart = async (id) => {
    console.log(id)
    if (cart.includes(id)) {
      setCart(cart.filter((item) => item !== id));
      notify(`${name} removed from the cart`);
    } else {
      setCart([...cart, id]);
      notify(`${name} added to the cart`);
    }
  };

  const handleWishlist = (id) => {
   
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter((item) => item !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  const handleDetails = (product) => {
    setSelectedProduct(product);
  };

const handleDelete = async (productId) => {
  console.log(productId)
  try {
    const response = await axios.delete(`https://accessories-arena-server.onrender.com/api/products/${productId}`);
    navigate("/products")
    console.log(response.data);
  } catch (error) {
    console.error('Error deleting product:', error);
  }
};

  return (
    <>
      <div className="card w-full bg-gray-200 text-black shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={`https://accessories-arena-server.onrender.com/${images}`}
            alt="Accessory"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{brand}</h2>
          <h2 className="card-title">{name}</h2>
          <p>{price}</p>
          <div className="card-actions">
            <label
              htmlFor={`modal_${_id}`} // Unique ID for each product modal
              className="btn btn-outline btn-secondary"
              onClick={() => handleDetails(item)}
            >
              Show Details
            </label>
          </div>
        </div>
        <div className="flex justify-between m-8">
          {role === "admin" ? (
            <div className="h-full">
              <RiDeleteBin6Fill 
             onClick={()=>{handleDelete(_id)}}
              className="h-8 w-8 text-rose-900" />
            </div>
          ) : (
            <div className="h-full">
              {cart.includes(_id) ? (
                <BsCartXFill
                  className="h-8 w-8 text-rose-500"
                  onClick={() => handleCart(_id)}
                />
              ) : (
                <BsFillCartCheckFill
                  className="h-8 w-8 text-rose-700"
                  onClick={() => handleCart(_id)}
                />
              )}
            </div>
          )}
          {role === "admin" ? (
            <div>
             <Link to={`/updateProduct/${_id}`}>
             <RxUpdate 
              onClick={()=>{handleDelete(item)}}
              className="h-8 w-8 text-rose-900"
              />
             </Link>
            </div>
          ) : (
            <div>
              {wishlist.includes(_id) ? (
                <TbJewishStarFilled
                  className="h-8 w-8 text-rose-500"
                  onClick={() => handleWishlist(_id)}
                />
              ) : (
                <TbJewishStar
                  className="h-8 w-8 text-rose-700"
                  onClick={() => handleWishlist(_id)}
                />
              )}
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      <input type="checkbox" id={`modal_${_id}`} className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          {selectedProduct && (
            <div className="card lg:card-side bg-base-100 shadow-xl">
              <figure>
                <img
                  src={`https://accessories-arena-server.onrender.com/${selectedProduct.images}`}
                  alt={selectedProduct.name}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{selectedProduct.name}</h2>
                <p>{selectedProduct.description}</p>
                <p>Price: ${selectedProduct.price}</p>
                <p>Brand: {selectedProduct.brand}</p>
                <p>Category: {selectedProduct.category}</p>
                <p>Stock Quantity: {selectedProduct.stockQuantity}</p>
              </div>
            </div>
          )}
        </div>
        <label className="modal-backdrop" htmlFor={`modal_${_id}`}>
          Close
        </label>
      </div>
    </>
  );
};

export default Product;
