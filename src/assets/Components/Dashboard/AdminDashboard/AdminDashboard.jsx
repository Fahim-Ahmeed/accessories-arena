import { useState } from "react";
import AdminSidebar from "./AdminSidebar/AdminSidebar";
import Profile from "../CustomerDashboard/Profile/Profile";
import Orders from "../CustomerDashboard/Orders/Orders";
import Cart from "../../Cart/Cart";
import AddAdmin from "./AddAdmin/AddAdmin";

const AdminDashboard = ({onSelect}) => {
    const [selectedOption, setSelectedOption] = useState("Profile");
    const renderContent = () => {
        switch (selectedOption) {
          case "Profile":
            return <Profile />;
          case "Orders":
            return <Orders/>;
          case "Shopping Cart":
            return <Cart/>;
            case "Add Admin":
                return <AddAdmin/>;
          // Add other cases for other components
          default:
            return <Profile />;
        }
      };
  return (
    <div className="flex gap-2">
      <div>
        <AdminSidebar onSelect={setSelectedOption}> </AdminSidebar>
      </div>
      <div className="dashboard-content">{renderContent()}</div>
    </div>
  );
};

export default AdminDashboard;
