import { useContext, useEffect, useState } from "react";
import { Item } from "../Context/ProductContext";
import CartItem from "./CartItem/CartItem";
import { Auth } from "../Context/AuthenticationContext";
import { Link, useNavigate } from "react-router-dom";
import Checkout from "../Products/checkout";
import AddressForm from "../AddressForm/AddressForm";

const Cart = () => {
  const [showCart, setShowCart] = useState([]);
  const { cart, setCart } = useContext(Item);
  const { notify,address,updateAddress,user } = useContext(Auth);
  // const[checkout,setCheckout]=useState(false)
  // const [subTotal, setSubTotal] = useState(0);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchAddress = async () => {
      try {
        const res = await fetch(
          `https://accessories-arena-server.onrender.com/api/address/${user.email}`
        );
        if (res.ok) {
          const data = await res.json();
          // setFormData(data);
          updateAddress(data);
        }
      } catch (error) {
        console.error("Failed to fetch address:", error);
      }
    };

    if (user) {
      fetchAddress();
    }
  }, [updateAddress, user]);


  useEffect(() => {
    const fetchPhones = async () => {
      try {
        console.log('Fetching products for cart:', cart); // Debug: log cart items
        const phones = await Promise.all(
          cart.map(async (item) => {
            const res = await fetch(`http://localhost:5000/api/products/${item}`);
            if (!res.ok) {
              throw new Error(`Error fetching product ${item}: ${res.statusText}`);
            }
            const data = await res.json();
            console.log('Fetched product data:', data); // Debug: log fetched data

            // Correct the data structure handling
            if (data) {
              return { ...data, quantity: 1 }; // Initialize quantity to 1
            } else {
              console.warn('Unexpected data format:', data); // Warn if data format is unexpected
              return null;
            }
          })
        );

        // Filter out any null values in case of unexpected data format
        const validPhones = phones.filter(phone => phone !== null);
        setShowCart(validPhones); // Set the fetched phones directly
        console.log('Updated showCart:', validPhones); // Debug: log updated showCart
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    if (cart.length > 0) {
      fetchPhones();
    }
  }, [cart]); // Ensure cart is a dependency so useEffect runs when cart changes

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
  console.log('showCart from cart page:', showCart); // Debug: log showCart
const handleChekOut=(showCart)=>{
  if(address.district){
    return navigate('/checkout', { state: { fromCart: true, cart: { showCart },totalPrice:totalPrice } });
  
  }
  else{
    return navigate('/AddressForm', { state: { fromCart: true, cart: { showCart },totalPrice:totalPrice } });
  }
  
  
}
  return (
    <div className="">
      <div className="flex gap-2">
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
      {cart.length > 0 && (
        <div className="flex flex-row-reverse">
          <div className="flex-end border-zinc-100 w-auto">
            <div className="border-b-2">
              <p>Sub total: ${totalSum.toFixed(2)}</p>
              <p>Delivery cost: ${deliveryCost}</p>
            </div>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
            <button className="btn btn-outline btn-secondary" onClick={()=>{handleChekOut(showCart)}}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
    <hr />
    {/* {
     checkout &&<><Checkout setCheckout={setCheckout} cart={showCart} totalPrice={totalPrice}/></>
    } */}
    </div>
  );
};

export default Cart;
