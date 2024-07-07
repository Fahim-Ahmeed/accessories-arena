// src/components/PaymentSuccess.js
import React from 'react';
import { useParams } from 'react-router-dom';

const PaymentSuccess = () => {
    const { tranId } = useParams();

    return (
        <div>
            <h1>Payment Successful</h1>
            <p>Transaction ID: {tranId}</p>
        </div>
    );
};

export default PaymentSuccess;
