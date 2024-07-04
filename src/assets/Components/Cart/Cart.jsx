import { useContext, useEffect, useState } from "react";
import { Item } from "../Context/ProductContext";
import CartItem from "./CartItem/CartItem";
import { Auth } from "../Context/AuthenticationContext";
import { Link, useNavigate } from "react-router-dom";
const Cart = () => {
  const [showCart, setShowCart] = useState([]);
  const { cart, setCart } = useContext(Item);
  const {notify}=useContext(Auth)
  const [subTotal, setSubTotal] = useState(0);
  const navigate=useNavigate()

  useEffect(() => {
    const fetchPhones = async () => {
      try {
        const phones = await Promise.all(
          cart.map(async (item) => {
            const res = await fetch(`http://localhost:5000/api/products/${item}`);
            if (!res.ok) {
              throw new Error(`Error fetching product ${item}: ${res.statusText}`);
            }
            const data = await res.json();
            return { ...data.data, quantity: 1 }; // Initialize quantity to 1
          })
        );
        setShowCart(phones);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    if (cart.length > 0) {
      fetchPhones();
    }
  }, [cart]);

  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item !== id);
    setCart(updatedCart);
    setShowCart(showCart.filter((item) => item._id !== id));
  };

  const handleQuantityChange = (id, amount) => {
    const updatedCart = showCart.map((item) =>
      item._id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
    );
    setShowCart(updatedCart);
  };

  const totalSum = showCart.reduce((acc, item) => {
    const price = parseFloat(item.price);
    const quantity = parseInt(item.quantity);
    if (!isNaN(price) && !isNaN(quantity)) {
      return acc + price * quantity;
    } else {
      return acc;
    }
  }, 0);

  const deliveryCost = 200;
  const totalPrice = totalSum + deliveryCost;
const handleCheckOut=()=>{
  setCart([])
  localStorage.clear();
  navigate("/products")
  notify("we will contact sooon")
}
  return (
    <div className="">
      <div className="flex gap-2 m-2 flex-wrap">
        {showCart.map((item, index) => (
          <CartItem
            key={index}
            item={item}
            handleRemove={handleRemove}
            onQuantityChange={handleQuantityChange}
          />
        ))}
      </div>
      <hr />
    {
     ( cart.length>0) && <div className="flex flex-row-reverse">
     <div className="flex-end border-zinc-100 w-auto">
       <div className="border-b-2">
         <p>Sub total: ${totalSum.toFixed(2)}</p>
         <p>Delivery cost: ${deliveryCost}</p>
       </div>
       <p>Total Price: ${totalPrice.toFixed(2)}</p>
       <button className="btn btn-outline btn-secondary" onClick={handleCheckOut}>Proceed to Checkout</button>
     </div>
   </div>
    }
    </div>
  );
};

export default Cart;
