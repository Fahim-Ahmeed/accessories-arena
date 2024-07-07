import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AllOrderForAdmin = () => {
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/order`);
        console.log(response.data);
        const orderData = response.data;
        const convertArray = Object.entries(orderData);
        setOrderList(convertArray);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchOrder();
  }, []);

  useEffect(() => {
    console.log(typeof orderList); // This will log the updated state
  }, [orderList]); // This will run when orderList state changes

  return (
    <div>
      <h2>Order Management</h2>
      <div className="overflow-x-auto">
        <table className="table table-xs table-pin-rows table-pin-cols">
          <thead>
            <tr>
              <th></th>
              <td>Name</td>
              <td>Email</td>
              <td>Address</td>
              <td>Paid Status</td>
              <td>Total Amount</td>
              <td>Status</td>
              <td>Transaction ID</td>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orderList.map(([key, item], index) => (
              <tr key={key}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.ship_add}</td>
                <td>Complete</td>
                <td>{item.totalAmount}</td>
                <td>{item.status}</td>
                <td>{item.transactionId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllOrderForAdmin;
