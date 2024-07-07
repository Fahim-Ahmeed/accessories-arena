import { useContext, useEffect, useState } from 'react';
import { Auth } from '../../Context/AuthenticationContext';
import Tracking from './Tracking';

const OrderTrack = () => {
  const{user}=useContext(Auth)
  const [order, setOrder] = useState([]);
  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetch(`http://localhost:5000/order/email/${user.email}`);
        const data = await response.json();
        console.log(typeof data)
        const convertArray = Object.entries(data);
        setOrder(convertArray);
        console.log(order)
      } catch (error) {
        console.error('Error fetching order status:', error);
      }
    };
    // if (user && user.email) {
    //     fetchStatus();
    //   }
 
    fetchStatus();
  }, [user.email]);
  const checkValue=[0,1,2,3,4]
  console.log('Current user email:', user.email); // Debug log
  console.log('Current order state:',order); // Debug log
  return (
    <div>
      <h1 className='text-3xl text-justify border-b-4 m-8 p-4'>Track your order</h1>
      {
      order.map(([key, item], index) => (
        <Tracking key={key} item={item} />
      ))
    } 
    </div>
  );
};

export default OrderTrack;
