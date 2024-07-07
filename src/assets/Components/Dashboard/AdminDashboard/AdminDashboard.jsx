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
import DynamicForm from "./AdminSidebar/AddProduct/DynamicForm";
import { productConfigurations } from "./AdminSidebar/AddProduct/productConfigurations";
import Products from "../../Products/Products";
import AllOrderForAdmin from "../../Order/AllOrder/AllOrderForAdmin/AllOrderForAdmin";
// import AddAdmin from "./AdminSidebar/AddAdmin/AddAdmin";

const AdminDashboard = ({onSelect}) => {
    const [selectedOption, setSelectedOption] = useState("Profile");
    const renderContent = () => {
        switch (selectedOption) {
          case "Profile":
            return <ProductList />;
          case "Order Management":
            return <AllOrderForAdmin/>;
          case "Shopping Cart":
            return <Cart/>;
            case "Computer Accessories":
            return <DynamicForm config={productConfigurations['computerAccessory']} productType={'computer-accessories'} />;
            case"Phone Accessories":
            return<DynamicForm config={productConfigurations['phoneAccessory']} productType={'phone-accessories'}/>;
            case "Gaming Accessories":
            return<DynamicForm config={productConfigurations['gamingAccessory']} productType={'gaming-accessories'}/>;
            case "Add Admin":
                return <AddAdmin/>
                case"Phone":

                return<DynamicForm config={productConfigurations['phones']} productType={'phones'}/>;
          // Add other cases for other components
          default:
            return <Products/>;
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
