import React, { useState, useEffect, useContext } from "react";
import { Auth } from "../Context/AuthenticationContext";
import { useLocation, useNavigate } from "react-router-dom";

const AddressForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const fromCart = location.state?.fromCart || false;
  const fromCheckout=location.state?.fromChekout || false;
  const cart = location.state?.cart || undefined;
  const totalPrice = location.state?.totalPrice;
  const { user, address, updateAddress } = useContext(Auth);
  const email = user.email;

  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    mobileNumber: "",
    email: email,
    landmark: "",
    district: "",
    city: "",
    area: "",
  });
console.log(`fromCart:${fromCart} || fromCheckout: ${fromCheckout}`)
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    const fetchAddress = async () => {
      try {
        const res = await fetch(
          `https://accessories-arena-server.onrender.com/api/address/${email}`
        );
        if (res.ok) {
          const data = await res.json();
          setFormData(data);
          updateAddress(data);
        }
      } catch (error) {
        console.error("Failed to fetch address:", error);
      }
    };

    if (email) {
      fetchAddress();
    }
  }, [email]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isEditMode) {
      try {
        const response = await fetch(
          `https://accessories-arena-server.onrender.com/api/address/${email}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        if (response.ok) {
          alert("Address saved successfully");
          setIsEditMode(false);
        } else {
          alert("Failed to save address");
        }
      } catch (error) {
        console.error("Error saving address:", error);
        alert("An error occurred while saving the address");
      }
    } else {
      setIsEditMode(true);
    }
  };

  const handleCheckOutwithSameAddress = () => {
    navigate("/checkout", { state: { cart: cart, totalPrice: totalPrice } });
  };

  const inputStyles = {
    enabled: "mt-1 p-2 w-full border border-gray-300 rounded",
    disabled:
      "mt-1 p-2 w-full border border-gray-300 rounded bg-gray-200 text-gray-700",
  };

  return (
    <div>
      {(fromCart || fromCheckout) && (
        <button
          className="btn btn-outline btn-warning mt-10"
          onClick={() => navigate("/cart")}
        >
          Cancel Checkout
        </button>
      )}
      <div className="max-w-3xl mx-auto mt-10 bg-white p-8 shadow-lg">
        <h2 className="text-2xl font-bold mb-4">
          {formData.fullName ? "Edit Address" : "Add Address"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                className={
                  isEditMode ? inputStyles.enabled : inputStyles.disabled
                }
                placeholder="Input Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
                disabled={!isEditMode}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                type="text"
                name="address"
                className={
                  isEditMode ? inputStyles.enabled : inputStyles.disabled
                }
                placeholder="House no./ building /street /area"
                value={formData.address}
                onChange={handleChange}
                required
                disabled={!isEditMode}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Mobile Number
              </label>
              <input
                type="text"
                name="mobileNumber"
                className={
                  isEditMode ? inputStyles.enabled : inputStyles.disabled
                }
                placeholder="Input Mobile Number"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
                disabled={!isEditMode}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Landmark (Optional)
              </label>
              <input
                type="text"
                name="landmark"
                className={
                  isEditMode ? inputStyles.enabled : inputStyles.disabled
                }
                placeholder="E.g. beside train station"
                value={formData.landmark}
                onChange={handleChange}
                disabled={!isEditMode}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                District
              </label>
              <input
                type="text"
                name="district"
                className={
                  isEditMode ? inputStyles.enabled : inputStyles.disabled
                }
                placeholder="Dhaka"
                value={formData.district}
                onChange={handleChange}
                required
                disabled={!isEditMode}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                City
              </label>
              <input
                type="text"
                name="city"
                className={
                  isEditMode ? inputStyles.enabled : inputStyles.disabled
                }
                placeholder="Dhaka - North"
                value={formData.city}
                onChange={handleChange}
                required
                disabled={!isEditMode}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Area
              </label>
              <input
                type="text"
                name="area"
                className={
                  isEditMode ? inputStyles.enabled : inputStyles.disabled
                }
                placeholder="Uttara Sector 4"
                value={formData.area}
                onChange={handleChange}
                required
                disabled={!isEditMode}
              />
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <button
              type="submit"
              className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
            >
              {isEditMode ? "Save" : "Edit"}
            </button>
          </div>
        </form>
      </div>

      {(fromCart || fromCheckout)  && (
        <div className="flex flex-row-reverse m-4">
          <div> </div>
          <div className="order-last">
            <button
              className="flex-end btn btn-outline btn-secondary"
              disabled={!address.fullName}
              onClick={() => handleCheckOutwithSameAddress()}
            >
              CheckOut with same Address
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddressForm;
