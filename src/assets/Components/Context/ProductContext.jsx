import{ createContext, useState } from 'react';
export const Item=createContext(null)
const ProductContext = ({children}) => {
    const [cart,setCart]=useState([])
    const[wishlist,setWishlist]=useState([])
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