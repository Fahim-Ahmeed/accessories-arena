import { useEffect, useState } from "react";
import { doc, getDoc } from 'firebase/firestore';
import { useContext } from "react";
import { Auth } from "../Context/AuthenticationContext";
import { db } from "../Firebase/firebase.config";
import AdminDashboard from "./AdminDashboard/AdminDashboard";
import CustomerDashboard from"./CustomerDashboard/CustomerDashboard"
const Dashboard = () => {
  const { user } = useContext(Auth);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const fetchUserRole = async () => {
      if (user) {
        const userDocRef = doc(db, 'users', user.uid);
        const userDoc = await getDoc(userDocRef);
        
        if (userDoc.exists()) {
          setRole(userDoc.data().role);
        } else {
          console.error("User document not found");
        }
      }
    };

    fetchUserRole();
  }, [user]);

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
