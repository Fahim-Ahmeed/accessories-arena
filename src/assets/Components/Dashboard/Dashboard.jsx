import Profile from "./CustomerDashboard/Profile/Profile";
import { useState } from "react";
import CustomerDashboard from "./CustomerDashboard/CustomerDashboard";
const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState("Profile");

  const renderContent = () => {
    switch (selectedOption) {
      case "Profile":
        return <Profile />;
      //   case 'Orders':
      //     return <Orders />;
      //   case 'Wishlist':
      //     return <Wishlist />;
      // Add other cases for other components
      default:
        return <Profile />;
    }
  };
  return (
    <div className="flex">
        <CustomerDashboard ></CustomerDashboard>
    </div>
  );
};

export default Dashboard;
