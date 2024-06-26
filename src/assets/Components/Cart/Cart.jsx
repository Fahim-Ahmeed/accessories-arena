import { useContext, useEffect, useState } from "react";
import { Item } from "../Context/ProductContext";
import CartItem from "./CartItem/CartItem";

const Cart = () => {
  const [showCart, setShowCart] = useState([]);
  const { cart } = useContext(Item);
  useEffect(() => {
    const fetchPhones = async () => {
      const phones = await Promise.all(
        cart.map(async (item) => {
          let res = await fetch(
            `https://openapi.programming-hero.com/api/phone/${item}`
          );
          const data = await res.json();
          return data.data;
        })
      );
      setShowCart(phones);
    };

    fetchPhones();
  }, [cart]);
  return (
    <div className="flex gap-2 m-2 flex-wrap ">
      {showCart.map((item,index) => (
        <CartItem key={index} item={item}></CartItem>
      ))}
    </div>
  );
};

export default Cart;
