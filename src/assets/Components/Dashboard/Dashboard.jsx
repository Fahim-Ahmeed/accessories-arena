import { useEffect, useState } from "react";
import { doc, getDoc } from 'firebase/firestore';
import { useContext } from "react";
import { Auth } from "../Context/AuthenticationContext";
import { db } from "../Firebase/firebase.config";
import AdminDashboard from "./AdminDashboard/AdminDashboard";
import CustomerDashboard from"./CustomerDashboard/CustomerDashboard"
const Dashboard = () => {
  const { user,role} = useContext(Auth);

  if (role === 'admin') {
    return <AdminDashboard />;

  } else if (role === 'user') {
    return <CustomerDashboard/>;
  } else {
    return <div>Loading...</div>;
  }
};

// return(
//     <AdminDashboard/>
// )
// }

export default Dashboard;
