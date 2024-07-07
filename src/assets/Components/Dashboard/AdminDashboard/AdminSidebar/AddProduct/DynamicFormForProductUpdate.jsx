import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const DynamicFormForProductUpdate = ({
  config,
  initialFormState,
  productId,
}) => {
  const [form, setForm] = useState(initialFormState);
  const navigate = useNavigate();

  useEffect(() => {
    setForm(initialFormState);
  }, [initialFormState]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    setForm({
      ...form,
      [name]: [...e.target.files],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(form).forEach((key) => {
      if (key !== "images") {
        formData.append(key, form[key]);
      }
    });
    for (let i = 0; i < form.images.length; i++) {
      formData.append("images", form.images[i]);
    }

    try {
        const response = await axios.put(`http://localhost:5000/api/products/${productId}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log('Product updated successfully', response.data);
        navigate(`/products`); // Navigate to the product page
      } catch (error) {
        console.error('There was an error uploading the product!', error);
      }
    };
console.log(productId)
  return (
    <>
      <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto">
      <h2>{`Update ${form.productType}`}</h2>
        {config.fields.map((field) => (
          <div key={field.name} className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              {field.label}
            </label>
            {field.type === "text" || field.type === "number" ? (
              <input
                type={field.type}
                name={field.name}
                value={form[field.name] || ""}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required={field.required}
              />
            ) : field.type === "select" ? (
              <select
                name={field.name}
                value={form[field.name] || ""}
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
            ) : field.type === "textarea" ? (
              <textarea
                name={field.name}
                value={form[field.name] || ""}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                rows="3"
                required={field.required}
              />
            ) : field.type === "file" ? (
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
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default DynamicFormForProductUpdate;
