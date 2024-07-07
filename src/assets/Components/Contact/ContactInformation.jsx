import React from "react";

const ContactInformation = () => {
  return (
    <div>
      <div className="flex w-full flex-col lg:flex-row">
        <div className="card bg-base-300 rounded-box grid  flex-grow place-items-center">
          <div className="hero bg-base-200 min-h-vh">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src="https://i.postimg.cc/mkCNN0rB/Whats-App-Image-2024-07-07-at-12-32-35-PM.jpg"
                className="max-w-sm rounded-lg shadow-2xl"
              />
             <div>
                <h1 className="text-3xl font-bold">Imteaz Ali Chowdhury</h1>
                <p className="border-b-2 text-2xl w-fit">Personal Information</p>
              <div className="text-xl">
              <p>Email:imteaz15-13689@diu.edu.bd</p>
               <p>Contact number:+8801991052117</p>
               <p>Blood Group:</p>
              </div>
              <p className="border-b-2 text-2xl w-fit">Academic Information</p>
              <div className="text-xl">
                <p>SSC:2017</p>
                <p>HSC:2019</p>
                <p>BSC:2024</p>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="divider lg:divider-horizontal">AND</div>
        <div className="card bg-base-300 rounded-box grid h-auto flex-grow place-items-center">
          <div className="hero bg-base-200 min-h-vh w-full">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src="https://i.postimg.cc/rsvgc7pq/Whats-App-Image-2024-07-07-at-1-39-49-PM.jpg"
                className="max-w-sm rounded-lg shadow-2xl"
              />
              <div>
                <h1 className="text-3xl font-bold">Rifat Bin Awlad</h1>
               <p className="border-b-2 text-2xl w-fit">Personal Information</p>
              <div className="text-xl">
              <p>Email:rifat15-3065@diu.edu.bd</p>
               <p>Contact number:+8801999318086</p>
               <p>Blood Group:</p>
              </div>
              <p className="border-b-2 text-2xl w-fit">Academic Information</p>
              <div className="text-xl">
                <p>SSC:2017</p>
                <p>HSC:2019</p>
                <p>BSC:2024</p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
