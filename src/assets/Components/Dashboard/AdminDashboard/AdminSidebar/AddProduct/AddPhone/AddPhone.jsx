import React from 'react';

import axios from 'axios';
import ProductForm from '../ProductForm/ProductForm';
import AddProductForm from './AddProductFrom/AddProductForm';

const AddPhone = () => {
    const formFields = [
        { name: 'name', label: 'Name', type: 'text' },
        { name: 'model', label: 'Model', type: 'text' },
        { name: 'brand', label: 'Brand', type: 'select', options: ['Apple', 'Samsung', 'Google', 'OnePlus', 'Xiaomi', 'Oppo', 'Vivo', 'Huawei', 'Nokia', 'Sony'] },
        { name: 'description', label: 'Description', type: 'textarea' },
        { name: 'price', label: 'Price', type: 'number' },
        { name: 'stockQuantity', label: 'Stock Quantity', type: 'number' },
        { name: 'images', label: 'Images', type: 'file' }
      ];
  const initialFormState = {
    name: '',
    model: '',
    brand: '',
    description: '',
    price: '',
    stockQuantity: '',
    images: []
  };

  const categories = null;

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
      const response = await axios.post('http://localhost:5000/api/phones', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
    } catch (error) {
      console.error('There was an error uploading the phone!', error);
    }
  };

  return <AddProductForm productType="phones" formFields={formFields} />;
};

export default AddPhone;
