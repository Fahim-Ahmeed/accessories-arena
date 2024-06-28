import { useState } from "react";
import AdminSidebar from "./AdminSidebar/AdminSidebar";
import Profile from "../CustomerDashboard/Profile/Profile";
import Orders from "../CustomerDashboard/Orders/Orders";
import Cart from "../../Cart/Cart";
import AddAdmin from "./AdminSidebar/AddAdmin/AddAdmin";
import ComputerAccessories from "./AdminSidebar/AddProduct/ComputerAcessories/ComputerAccessories";
import Home from "../../Home/Home";
import Product from "../../Products/Product/Product";
import GamingAccessories from "./AdminSidebar/AddProduct/GamingAccessories/GamingAccessories";
import PhoneAccessories from "./AdminSidebar/AddProduct/PhoneAccessories/PhoneAccessories";
import ProductList from "../CustomerDashboard/Profile/Profile";
import AddPhone from "./AdminSidebar/AddProduct/AddPhone/AddPhone";
// import AddAdmin from "./AdminSidebar/AddAdmin/AddAdmin";

const AdminDashboard = ({onSelect}) => {
    const [selectedOption, setSelectedOption] = useState("Profile");
    const renderContent = () => {
        switch (selectedOption) {
          case "Profile":
            return <ProductList />;
          case "Orders":
            return <Orders/>;
          case "Shopping Cart":
            return <Cart/>;
            case "Computer Accessories":
            return<ComputerAccessories/>;
            case"Phone Accessories":
            return<PhoneAccessories/>
            case "Gaming Accessories":
            return<GamingAccessories/>;
            case "Add Admin":
                return <AddAdmin/>;
                case"Phone":
                return<AddPhone/>
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
      <div className="dashboard-content grow">{renderContent()}</div>
    </div>
  );
};

export default AdminDashboard;
