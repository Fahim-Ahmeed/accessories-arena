import React, { useState, useEffect, useContext } from "react";
import { Auth } from "../Context/AuthenticationContext";
import { useNavigate } from "react-router-dom";

const RepairServices = () => {
  const [services, setServices] = useState([]);
  const [newService, setNewService] = useState({
    customerName: '',
    customerContact: '',
    deviceType: '',
    deviceBrand: '',
    deviceModel: '',
    issueDescription: '',
    preferredRepairDate: '',
    additionalNotes: '',
    images: []
  });
  const{notify}=useContext(Auth)
 const navigate= useNavigate()

  useEffect(() => {
    // Fetch available repair services
    const fetchServices = async () => {
      try {
        let res = await fetch("http://localhost:5000/api/repair-services");
        let data = await res.json();
        setServices(data);
      } catch (error) {
        console.error("Error fetching repair services:", error);
      }
    };

    fetchServices();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'images') {
      setNewService((prevState) => ({ ...prevState, [name]: files }));
    } else {
      setNewService((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const formDataToSend = new FormData();
    // for (const key in newService) {
    //   if (key === 'images') {
    //     for (const file of newService[key]) {
    //       formDataToSend.append(key, file);
    //     }
    //   } else {
    //     formDataToSend.append(key, newService[key]);
    //   }
    // }

    // try {
    //   const response = await fetch('http://localhost:5000/api/repair-services', {
    //     method: 'POST',
    //     body: formDataToSend,
    //   });

    //   const result = await response.json();
    //   if (response.ok) {
    //     console.log('Repair service request submitted successfully:', result);
    //     // Handle successful submission
    //   } else {
    //     console.error('Failed to submit repair service request:', result);
    //     // Handle error
    //   }
    // } catch (error) {
    //   console.error('Error submitting repair service request:', error);
    //   // Handle error
    // }
    notify("We will give e quick solution!")
    navigate("/")
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Repair Services</h1>

      {/* List of Repair Services */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Available Services</h2>
        <ul className="list-disc pl-5">
          {services.map((service) => (
            <li key={service._id} className="mb-2">
              <p className="font-semibold">{service.deviceType}</p>
              <p>{service.issueDescription}</p>
              <p>{new Date(service.preferredRepairDate).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Request Repair Service Form */}
      <div className="bg-gray-200 p-4 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-2">Request Repair Service</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-1">
              Customer Name
            </label>
            <input
              type="text"
              name="customerName"
              value={newService.customerName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-1">
              Customer Contact
            </label>
            <input
              type="text"
              name="customerContact"
              value={newService.customerContact}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-1">
              Device Type
            </label>
            <input
              type="text"
              name="deviceType"
              value={newService.deviceType}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-1">
              Device Brand
            </label>
            <input
              type="text"
              name="deviceBrand"
              value={newService.deviceBrand}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-1">
              Device Model
            </label>
            <input
              type="text"
              name="deviceModel"
              value={newService.deviceModel}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-1">
              Issue Description
            </label>
            <textarea
              name="issueDescription"
              value={newService.issueDescription}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-1">
              Preferred Repair Date
            </label>
            <input
              type="date"
              name="preferredRepairDate"
              value={newService.preferredRepairDate}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-1">
              Additional Notes
            </label>
            <textarea
              name="additionalNotes"
              value={newService.additionalNotes}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-1">
              Upload Images
            </label>
            <input
              type="file"
              name="images"
              multiple
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default RepairServices;
