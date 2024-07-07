import { useContext, useState } from "react";
import Profile from "./Profile/Profile";
import CustomerSidebar from "./CustomerSidebar/CustomerSidebar";
import Orders from "./Orders/Orders";
import Cart from "../../Cart/Cart";
import ReviewForm from "../../Reviews/Reviews";
import AddressForm from "../../AddressForm/AddressForm";
import { Auth } from "../../Context/AuthenticationContext";
import OrderTrack from "../../Order/OrderTrack/OrderTrack";
const CustomerDashboard = ({ onSelect }) => {
  const{user}=useContext(Auth)
  const [selectedOption, setSelectedOption] = useState("Profile");
  const renderContent = () => {
    switch (selectedOption) {
      case "Profile":
        return <Profile />;
      case "Order Track":
        return <OrderTrack/>;
      case "Shopping Cart":
        return <Cart />;
        case "Address Book":
        return <AddressForm email={user.email}></AddressForm>;
        case "Reviews":
        return <ReviewForm/>
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
