import React from "react";
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
const CustomerSidebar = ({onSelect}) => {
  const menuItems = [
    { name: "Profile", icon: <FaUser /> },
    { name: "Orders", icon: <FaHistory /> },
    { name: "Wishlist", icon: <FaHeart /> },
    { name: "Shopping Cart", icon: <FaShoppingCart /> },
    { name: "Address Book", icon: <FaAddressBook /> },
    { name: "Payment Methods", icon: <FaCreditCard /> },
    { name: "Notifications", icon: <FaBell /> },
    { name: "Reviews", icon: <FaStar /> },
    { name: "Loyalty Program", icon: <FaGift /> },
    { name: "Returns", icon: <FaUndo /> },
    { name: "Account Settings", icon: <FaCog /> },
    { name: "Help and Support", icon: <FaQuestionCircle /> },
  ];
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
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="sidebar-item"
                onClick={() => onSelect(item.name)}
              >
                {item.icon} <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CustomerSidebar;
