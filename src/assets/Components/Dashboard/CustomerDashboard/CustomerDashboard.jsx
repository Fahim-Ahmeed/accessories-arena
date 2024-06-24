import { useState } from "react";
import Profile from "./Profile/Profile";
import CustomerSidebar from "./CustomerSidebar/CustomerSidebar";
import Orders from "./Orders/Orders";
const CustomerDashboard = ({onSelect}) => {
  const [selectedOption, setSelectedOption] = useState("Profile");
  const renderContent = () => {
    switch (selectedOption) {
      case "Profile":
        return <Profile />;
        case 'Orders':
          return <Orders/>;
      //   case 'Wishlist':
      //     return <Wishlist />;
      // Add other cases for other components
      default:
        return <Profile />;
    }
  };
  return (
    <div className="flex">
        <div>
       <CustomerSidebar onSelect={setSelectedOption}></CustomerSidebar>
        </div>
      <div className="dashboard-content">{renderContent()}</div>
    </div>
  );
};

export default CustomerDashboard;
