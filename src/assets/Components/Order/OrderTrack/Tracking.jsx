import React, { useEffect, useState } from 'react';

const Tracking = ({item} ) => {
    console.log(item)
  
  const getStepClass = (step) => {
    console.log(step)
    const steps = ['registered', 'choose_plan', 'purchase', 'receive_product'];
    const currentStepIndex = steps.indexOf(item.status);
    const stepIndex = steps.indexOf(step);

    if (stepIndex < currentStepIndex) {
      return 'step step-primary';
    } else if (stepIndex === currentStepIndex) {
      return 'step step-primary';
    } else {
      return 'step';
    }

  };

  return (
   <div>
    <h2 className='text-green-400 p-2 m-4'>{`The current state of order for`} <span className='text-xl font-bold'>{`${item.transactionId}`}</span></h2>
     <ul className="steps steps-vertical lg:steps-horizontal">
      <li className={getStepClass('registered')}>Register</li>
      <li className={getStepClass('choose_plan')}>Choose Product</li>
      <li className={getStepClass('purchase')}>Purchase</li>
      <li className={getStepClass('receive_product')}>Receive Product</li>
    </ul>
   </div>
   
  );
};

export default Tracking;
