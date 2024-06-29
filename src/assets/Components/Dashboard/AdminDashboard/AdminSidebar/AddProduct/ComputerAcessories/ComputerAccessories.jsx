import React from 'react';
import axios from 'axios';
import ProductForm from '../ProductForm/ProductForm';

const ComputerAccessories = () => {
  const initialFormState = {
    name: '',
    category: '',
    brand: '',
    description: '',
    price: '',
    stockQuantity: '',
    images: []
  };

  const categories = ['mouse', 'keyboard', 'monitor'];

  const handleSubmit = async (e, form) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in form) {
      if (key === 'images') {
        for (let i = 0; i < form.images.length; i++) {
          formData.append('images', form.images[i]);
        }
      } else {
        formData.append(key, form[key]);
      }
    }
    try {
      const response = await axios.post('https://accessories-arena-server.onrender.com/api/computer-accessories', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
    } catch (error) {
      console.error('There was an error uploading the files!', error);
    }
  };

  return <ProductForm initialFormState={initialFormState} categories={categories} handleSubmit={handleSubmit} />;
};

export default ComputerAccessories;
