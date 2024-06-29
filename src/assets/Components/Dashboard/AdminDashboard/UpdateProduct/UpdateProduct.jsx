import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import DynamicFormForProductUpdate from "../AdminSidebar/AddProduct/DynamicFormForProductUpdate";
import { productConfigurations } from "../AdminSidebar/AddProduct/productConfigurations";

const toCamelCase = (str) => {
  return str
    .toLowerCase()
    .split(' ')
    .map((word, index) => {
      if (index === 0) return word;
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join('');
};

const UpdateProduct = () => {
  const { id } = useParams(); // assuming you are using React Router
  const [initialFormState, setInitialFormState] = useState(null);
  const [productType, setProductType] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://accessories-arena-server.onrender.com/api/products/${id}`
        );
        const productData = response.data;
        setInitialFormState(productData);

        // Assuming the product type is included in the fetched product data
        const productTypeCamelCase = toCamelCase(productData.productType || 'phone-accessories');
        setProductType(productTypeCamelCase);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, [id]);

  if (!initialFormState) return <div>Loading...</div>;
 console.log(productType)
  const config = productConfigurations[`${productType}`];

  return (
    <div>
      <h2>Update {initialFormState.productType}</h2>
      <DynamicFormForProductUpdate config={config} initialFormState={initialFormState} productId={id} />
    </div>
  );
};

export default UpdateProduct;
