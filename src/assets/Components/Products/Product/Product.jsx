import { useEffect, useState } from "react";

const Product = ({ item }) => {
  const { brand, phone_name, slug, image } = item;

  let value = "";
  // useEffect(()=>{

  // },showDetails)

  const [showDetails, setShowDetails] = useState({});
  const handleShowDetail = async (id) => {
    // console.log('clicked show details', id)
    // load single phone data
    const res = await fetch(
      `https://openapi.programming-hero.com/api/phone/${id}`
    );
    const data = await res.json();
    const phone = data.data;
    setShowDetails(phone);
    console.log(showDetails);
    console.log(showDetails.slug);
    // console.log(id)
    value = id;
    const modal = document.getElementById(`${slug}`);
    if (modal) {
      modal.showModal();
    }
    // showPhoneDetails(phone)
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
      </div>

      {/* Open the modal using document.getElementById('ID').showModal() method */}
      {/* <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>open modal</button> */}
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
                  Storage: <span className="font-normal text-sm">{showDetails.mainFeatures.storage}</span>
                </p>{" "}
                <p className="font-bold">
                  Display Size:{" "}
                  <span className="font-normal text-sm">{showDetails.mainFeatures.displaySize}</span>
                </p>
                <p className="font-bold">
                  Chipset : <span className="font-normal text-sm">{showDetails.mainFeatures.chipSet}</span>
                </p>
                <p className="font-bold">
                  Memory: <span className="font-normal text-sm">{showDetails.mainFeatures.memory}</span>
                </p>
              </>
            )}

            <p className="font-bold">
              Slug: <span className="font-normal text-sm">{showDetails.slug}</span>
            </p>
            <p className="font-bold">
              Release Date: <span className="font-normal text-sm">{showDetails.releaseDate}</span>
            </p>
            <p className="font-bold">
              Brand:<span className="font-normal text-sm">{showDetails.brand}</span>
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
