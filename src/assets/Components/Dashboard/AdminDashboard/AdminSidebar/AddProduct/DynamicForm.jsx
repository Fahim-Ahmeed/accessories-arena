import React, { useState } from 'react';
import axios from 'axios';
import { productConfigurations } from './productConfigurations';

const DynamicForm = ({ config,productType }) => {
    console.log(productType)
  const initialFormState = config.fields.reduce((acc, field) => {
    acc[field.name] = field.type === 'file' ? [] : '';
    return acc;
  }, {});

  const [form, setForm] = useState(initialFormState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    setForm({
      ...form,
      [name]: [...e.target.files]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(form).forEach((key) => {
      if (key !== 'images') {
        formData.append(key, form[key]);
      }
    });
    for (let i = 0; i < form.images.length; i++) {
      formData.append('images', form.images[i]);
    }

    try {
      const response = await axios.post(`http://localhost:5000/api/${productType}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
      setForm(initialFormState);
    } catch (error) {
        console.log(formData)
      console.error('There was an error uploading the product!', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto">
      {config.fields.map((field) => (
        <div key={field.name} className="mb-4">
          <label className="block text-sm font-medium text-gray-700">{field.label}</label>
          {field.type === 'text' || field.type === 'number' ? (
            <input
              type={field.type}
              name={field.name}
              value={form[field.name]}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required={field.required}
            />
          ) : field.type === 'select' ? (
            <select
              name={field.name}
              value={form[field.name]}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required={field.required}
            >
              <option value="">Select an option</option>
              {field.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : field.type === 'textarea' ? (
            <textarea
              name={field.name}
              value={form[field.name]}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              rows="3"
              required={field.required}
            />
          ) : field.type === 'file' ? (
            <input
              type="file"
              name={field.name}
              multiple={field.multiple}
              onChange={handleFileChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          ) : null}
        </div>
      ))}
      <div className="text-center">
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600">
          Submit
        </button>
      </div>
    </form>
  );
};

export default DynamicForm;
