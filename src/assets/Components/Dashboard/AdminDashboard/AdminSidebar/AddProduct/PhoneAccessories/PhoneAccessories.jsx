import React, { useState } from 'react';
import axios from 'axios';

const  PhoneAccessories = () => {
  const initialFormState = {
    name: '',
    brand: '',
    description: '',
    price: '',
    stockQuantity: '',
    images: []
  };

  const [form, setForm] = useState(initialFormState);

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
    formData.append('brand', form.brand);
    formData.append('description', form.description);
    formData.append('price', form.price);
    formData.append('stockQuantity', form.stockQuantity);
    for (let i = 0; i < form.images.length; i++) {
      formData.append('images', form.images[i]);
    }

    try {
      const response = await axios.post('http://localhost:5000/api/phone-accessories', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Product added:', response.data);
      // Optionally, you can reset the form after successful submission
      setForm(initialFormState);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto">
      <div className="mb-4">
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
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Category</label>
        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          required
        >
          <option value="">Select a category</option>
          <option value="protector">Protector</option>
          <option value="backCover">Back Cover</option>
          <option value="charger">Charger</option>
          <option value="headphones">Headphones</option>
          {/* Add more categories as needed */}
        </select>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Brand</label>
          <input
            type="text"
            name="brand"
            value={form.brand}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          />
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
          Add Product
        </button>
      </div>
    </form>
  );
};

export default PhoneAccessories;
