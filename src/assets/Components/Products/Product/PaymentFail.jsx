import React from 'react';
import { useParams } from 'react-router-dom';
const PaymentFail = () => {
    const { tranId } = useParams();
    return (
        <div>
            <h1>Payment failed</h1>
            <p>Transaction ID: {tranId}</p>
        </div>
    );
};

export default PaymentFail;