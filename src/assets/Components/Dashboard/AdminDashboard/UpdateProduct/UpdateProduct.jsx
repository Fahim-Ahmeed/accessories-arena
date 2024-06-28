import React, { useState } from 'react';
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';

const UpdateProduct = () => {
  const product = useLoaderData();
  const [form, setForm] = useState({
    name: product.name,
    model: product.model,
    brand: product.brand,
    category: product.category,
    description: product.description,
    price: product.price,
    stockQuantity: product.stockQuantity,
    images: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    setForm({
      ...form,
      images: [...e.target.files]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('model', form.model);
    formData.append('brand', form.brand);
    formData.append('category', form.category);
    formData.append('description', form.description);
    formData.append('price', form.price);
    formData.append('stockQuantity', form.stockQuantity);
    for (let i = 0; i < form.images.length; i++) {
      formData.append('images', form.images[i]);
    }

    try {
      const response = await axios.put(`http://localhost:5000/api/products/${product._id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
      // Handle successful update (e.g., redirect or show a message)
    } catch (error) {
      console.error('There was an error updating the product!', error);
      console.log(formData)
    }
    console.log(formData)
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto">
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Model</label>
          <input
            type="text"
            name="model"
            value={form.model}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Brand</label>
          <select
            name="brand"
            value={form.brand}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          >
            <option value="">Select a brand</option>
            <option value="Apple">Apple</option>
            <option value="Samsung">Samsung</option>
            <option value="Google">Google</option>
            <option value="OnePlus">OnePlus</option>
            <option value="Xiaomi">Xiaomi</option>
            <option value="Oppo">Oppo</option>
            <option value="Vivo">Vivo</option>
            <option value="Huawei">Huawei</option>
            <option value="Nokia">Nokia</option>
            <option value="Sony">Sony</option>
            {/* Add more brands as needed */}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Price</label>
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Stock Quantity</label>
          <input
            type="number"
            name="stockQuantity"
            value={form.stockQuantity}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Images</label>
          <input
            type="file"
            multiple
            onChange={handleImageChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          rows="3"
          required
        />
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600"
        >
          Update Product
        </button>
      </div>
    </form>
  );
};

export default UpdateProduct;
