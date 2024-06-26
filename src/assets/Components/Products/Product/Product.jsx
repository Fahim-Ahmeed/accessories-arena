import { useContext, useEffect, useState } from "react";
import { BsCartXFill,BsFillCartCheckFill  } from "react-icons/bs";
import { TbJewishStar, TbJewishStarFilled } from "react-icons/tb";
import { Item } from "../../Context/ProductContext";
import { set } from "firebase/database";
import { Auth } from "../../Context/AuthenticationContext";

const Product = ({ item }) => {
  const { cart, setCart, wishlist, setWishlist } = useContext(Item);
  const {notify}=useContext(Auth)
  const { brand, phone_name, slug, image } = item;

  const handleCart = async (id) => {
   
    if (cart.includes(id)) {
      setCart(cart.filter((item) => item !== id));
      notify(`${phone_name} remove from the cart`)
    } else {
      setCart([...cart, id]);
      notify(`${phone_name} added to the cart`)
    }
  };
  const handleWishlist = (id) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter((item) => item !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);
  const [showDetails, setShowDetails] = useState({});
  const handleShowDetail = async (id) => {
    const res = await fetch(
      `https://openapi.programming-hero.com/api/phone/${id}`
    );
    const data = await res.json();
    const phone = data.data;
    setShowDetails(phone);
    console.log(showDetails);
    console.log(showDetails.slug);
    const modal = document.getElementById(`${slug}`);
    if (modal) {
      modal.showModal();
    }
  };
  return (
    <>
      <div className="card w-full bg-gray-200 text-black shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{brand}</h2>
          <h2 className="card-title">{phone_name}</h2>
          <p>{slug}</p>
          <div className="card-actions">
            <button
              className="btn btn-outline btn-secondary"
              onClick={() => handleShowDetail(slug)}
            >
              Show Details
            </button>
          </div>
        </div>
        <div className="flex justify-between m-8">
          <div className="h-full">
           {
            cart.includes(slug)?(
              <BsCartXFill 
              className="h-8 w-8 text-rose-500" 
              onClick={()=>{handleCart(slug)}}
              />

            ):(
              <BsFillCartCheckFill 
               className="h-8 w-8 text-rose-700"
              onClick={()=>{handleCart(slug)}}
              />

            )
           }
          </div>
          <div>
            {wishlist.includes(slug) ? (
              <TbJewishStarFilled
              className="h-8 w-8 text-rose-500"
                onClick={() => {
                  handleWishlist(slug);
                }}
              />
            ) : (
              <TbJewishStar
              className="h-8 w-8 text-rose-700"
                onClick={() => {
                  handleWishlist(slug);
                }}
              />
            )}
          </div>
        </div>
      </div>



      <dialog id={slug} className="modal">
        <div className="card w-fit bg-gray-900 shadow-xl p-4">
          <figure>
            <img src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{showDetails.name}</h2>
            {showDetails.mainFeatures && (
              <>
                <p className="font-bold">
                  Storage:{" "}
                  <span className="font-normal text-sm">
                    {showDetails.mainFeatures.storage}
                  </span>
                </p>{" "}
                <p className="font-bold">
                  Display Size:{" "}
                  <span className="font-normal text-sm">
                    {showDetails.mainFeatures.displaySize}
                  </span>
                </p>
                <p className="font-bold">
                  Chipset :{" "}
                  <span className="font-normal text-sm">
                    {showDetails.mainFeatures.chipSet}
                  </span>
                </p>
                <p className="font-bold">
                  Memory:{" "}
                  <span className="font-normal text-sm">
                    {showDetails.mainFeatures.memory}
                  </span>
                </p>
              </>
            )}

            <p className="font-bold">
              Slug:{" "}
              <span className="font-normal text-sm">{showDetails.slug}</span>
            </p>
            <p className="font-bold">
              Release Date:{" "}
              <span className="font-normal text-sm">
                {showDetails.releaseDate}
              </span>
            </p>
            <p className="font-bold">
              Brand:
              <span className="font-normal text-sm">{showDetails.brand}</span>
            </p>
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-outline btn-secondary">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Product;
