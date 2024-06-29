import { useLoaderData } from "react-router-dom";
import Product from "./Product/Product";
import { useEffect, useState } from "react";

const Products = () => {
  const product = useLoaderData();
  console.log(product)
  // const [inputValue, setInputValue] = useState("");
  // const [searchResult, setSearchResult] = useState([]);
console.log(product)
  // const handleInputChange = (event) => {
  //   setInputValue(event.target.value);
  // };

  // const handleSearch = () => {
  //   console.log(inputValue);
  //   if (inputValue.length != "") {
  //     fetch(
  //       `https://openapi.programming-hero.com/api/phones?search=${inputValue}`
  //     )
  //       .then((response) => response.json())
  //       .then((data) => setSearchResult(data.data));
  //     setInputValue("");
  //     console.log(searchResult);
  //     console.log("vitor the");
  //     console.log("kaj hoy");
  //   }
  // };
  // useEffect(() => {}, [searchResult]);

  // const items = product.data;

  return (
    <section className="container mx-auto mt-16">
      <div className="join flex justify-center mt-4 mb-4 w-full">
        <input
          className="input bg-slate-300 text-gray-950 input-bordered join-item w-1/2 md:w-1/4"
          placeholder="find products"
          // value={inputValue}
          // onChange={handleInputChange}
        />
        <button
          className="btn join-item rounded-r-full"
          // onClick={() => handleSearch()}
        >
          Search
        </button>
      </div>
      {
        <div className="grid  md:grid-cols-2 lg:grid-cols-4 gap-4  place-content-center">
        {product.map((item, key) => (
          <Product item={item} key={key}></Product>
        ))}
      </div>
      }

      {/* {searchResult .length>0? (
        <div className="grid  md:grid-cols-2 lg:grid-cols-4 gap-4  place-content-center">
          {searchResult.map((item, key) => (
            <Product item={item} key={key}></Product>
          ))}
        </div>
       
      ) 
      :
      <div className="grid  md:grid-cols-2 lg:grid-cols-4 gap-4  place-content-center">
        {items.map((item, key) => (
          <Product item={item} key={key}></Product>
        ))}
      </div>
    } */}
    </section>
  );
};

export default Products;
