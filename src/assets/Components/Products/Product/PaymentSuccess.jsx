// src/components/PaymentSuccess.js
import React from 'react';
import { useParams } from 'react-router-dom';

const PaymentSuccess = () => {
    const { tranId } = useParams();

    return (
        <div className='flex justify-center items-stretch'>
          <div className='text-3xl text-success self-center '>
          <h1 className='text-3xl'>Payment Successful</h1>
          <p>Transaction ID: {tranId}</p>
          </div>
        </div>
    );
};

export default PaymentSuccess;
