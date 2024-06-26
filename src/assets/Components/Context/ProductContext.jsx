import{ createContext, useState } from 'react';
export const Item=createContext(null)
const ProductContext = ({children}) => {
    const [cart,setCart]=useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
      })

    const[wishlist,setWishlist]=useState(() => {
        const savedWishlist = localStorage.getItem('wishlist');
        return savedWishlist ? JSON.parse(savedWishlist) : [];
      });
    const productInfo={
        cart,
        setCart,
        wishlist,
        setWishlist
    }
    return (
        <Item.Provider value={productInfo}>
            {children}
        </Item.Provider>
    );
};

export default ProductContext;