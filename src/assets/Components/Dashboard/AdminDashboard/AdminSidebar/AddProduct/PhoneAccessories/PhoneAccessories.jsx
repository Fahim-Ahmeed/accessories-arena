import React from 'react';
import axios from 'axios';
import ProductForm from '../ProductForm/ProductForm';

const PhoneAccessories = () => {
  const initialFormState = {
    name: '',
    category: '',
    brand: '',
    description: '',
    productType:'',
    price: '',
    stockQuantity: '',
    images: []
  };

  const categories = ['protector', 'backCover', 'charger', 'headphones'];

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
      const response = await axios.post('http://localhost:5000/api/phone-accessories', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Product added:', response.data);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return <ProductForm initialFormState={initialFormState} categories={categories} handleSubmit={handleSubmit} />;
};

export default PhoneAccessories;
