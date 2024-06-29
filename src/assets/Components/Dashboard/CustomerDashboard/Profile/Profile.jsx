import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://accessories-arena-server.onrender.com/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {products.map((product) => (
            <div key={product._id} className="border border-gray-300 rounded-md p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-700 mb-2">Category: {product.category}</p>
              <p className="text-gray-700 mb-2">Brand: {product.brand}</p>
              <p className="text-gray-700 mb-2">Price: ${product.price}</p>
              <p className="text-gray-700 mb-2">Stock: {product.stockQuantity}</p>
              <p className="text-gray-700 mb-2">Description: {product.description}</p>
              <div className="grid grid-cols-2 gap-2">
                {product.images.map((image, index) => (
                  <img
                    key={index}
                    src={`https://accessories-arena-server.onrender.com/${image}`}
                    alt={product.name}
                    className="w-full h-auto border border-gray-300 rounded-md"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
