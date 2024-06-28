import { useState } from "react";
import {
  FaUser,
  FaHistory,
  FaHeart,
  FaShoppingCart,
  FaAddressBook,
  FaCreditCard,
  FaBell,
  FaStar,
  FaGift,
  FaUndo,
  FaCog,
  FaQuestionCircle,
  FaSignOutAlt,
} from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";
import { IoIosPersonAdd,IoLogoGameControllerB } from "react-icons/io";
import { FaSitemap } from "react-icons/fa6";
import { FaComputer } from "react-icons/fa6";
import { IoPhonePortraitSharp } from "react-icons/io5";


const AdminSidebar = ({ onSelect }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const menuItems = [
    { name: "Product Management", icon: <AiOutlineProduct />},
    { name: "Order Management", icon: <FaHistory /> },
    { name: "Report & analytics", icon: <FaHeart /> },
    { name: "Add Admin", icon: <IoIosPersonAdd />},
    {
      name: "Add Product",
      productType: [
        { name: "Computer Accessories", icon: <FaComputer /> },
        { name: "Phone Accessories", icon: <IoPhonePortraitSharp />},
        { name: "Gaming Accessories", icon: <IoLogoGameControllerB /> },
        { name: "Phone", icon:<IoPhonePortraitSharp/> },
      ],
      icon: <FaSitemap />,
    },
    { name: "Setting", icon: <FaShoppingCart /> },
    { name: "Profile", icon: <FaAddressBook /> },
    { name: "Notifications", icon: <FaBell /> },
    { name: "Loyalty Program", icon: <FaGift /> },
    { name: "Returns", icon: <FaUndo /> },
    { name: "Account Settings", icon: <FaCog /> },
    { name: "Help and Support", icon: <FaQuestionCircle /> },
    { name: "Logout", icon: <FaSignOutAlt/>},
  ];

  const handleSelect = (item) => {
    setSelectedItem(selectedItem === item.name ? null : item.name);
    onSelect(item.name);
    console.log("Selected item:", item);
  };

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <ul className="menu bg-base-200 rounded-box w-56">
            {menuItems.map((item, index) =>
              item.productType ? (
                <li key={index}>
                  <details open>
                    <summary>
                      {item.icon} <span>{item.name}</span>
                    </summary>
                    <ul className="menu">
                      {item.productType.map((type, i) => (
                        <li
                          key={`${index}-${i}`}
                          className="sidebar-item cursor-pointer "
                          onClick={() => handleSelect(type)}
                        >
                         <span className="flex"> <span>{type.icon} </span> <span>{type.name}</span></span>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              ) : (
                <li
                  key={index}
                  className="sidebar-item cursor-pointer"
                  onClick={() => handleSelect(item)} 
                >
                 <span className="flex"> <span>{item.icon} </span><span>{item.name}</span></span>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
