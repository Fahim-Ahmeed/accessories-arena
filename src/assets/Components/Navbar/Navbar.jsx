// Navbar.js
import { NavLink } from "react-router-dom";
import logo from "../../../assets/accessory arena logos/logo.jpg";
import { useContext } from "react";
import { AiOutlineMenuUnfold, AiFillCloseSquare } from "react-icons/ai";
import { Auth } from "../Context/AuthenticationContext";
import { FaSignOutAlt, FaSignInAlt, FaShoppingCart } from "react-icons/fa";
import { Item } from "../Context/ProductContext";
import AdminSidebar from "../Dashboard/AdminDashboard/AdminSidebar/AdminSidebar";


const Navbar = () => {
  const { user, logOut,sidebarOpen, setSidebarOpen  } = useContext(Auth);
  const { cart } = useContext(Item);


  const navItem = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/products">Products</NavLink>
      </li>
      <li>
        <NavLink to="/repairService">Repair Service</NavLink>
      </li>
      <li>
        <NavLink to="/community">Community</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );

  const handleLogOut = () => {
    localStorage.clear();
    logOut();
  };

  return (
    <div className="relative mb-4">
      <div className="navbar fixed  top-0 -left-0.5 bg-gray-100 z-50 text-slate-950 font-bold">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-4xl lg:hidden"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <AiFillCloseSquare /> : <AiOutlineMenuUnfold />}
            </div>
            <ul
              tabIndex={0}
              className={`
                duration-1000 
                absolute
                ${sidebarOpen ? "" : "hidden"} 
                ${sidebarOpen ? "top-10" : "-top-20"}
                dropdown-content mt-3 z-[1] p-2 shadow bg-gray-100 rounded-box w-52`}
            >
              {navItem}
            </ul>
          </div>
          <div className="mx-auto md:mx-0 lg:mx-0">
            <NavLink to="/">
              <img src={logo} alt="" />
            </NavLink>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItem}</ul>
        </div>
        <div className="navbar-end flex gap-2">
          <NavLink to="/cart">
            <div className="indicator">
              <span className="indicator-item badge badge-secondary text-white">{cart.length}</span>
              <div className="grid place-items-center">
                <FaShoppingCart className="h-8 w-10" />
              </div>
            </div>
          </NavLink>
          {user ? (
            <NavLink to="/login">
              <span>{user.displayName}</span>{" "}
              <button
                className="btn btn-outline btn-secondary"
                onClick={handleLogOut}
              >
                <FaSignOutAlt></FaSignOutAlt> Logout
              </button>
            </NavLink>
          ) : (
            <NavLink to="/login">
              <button className="btn btn-outline btn-secondary">
                <FaSignInAlt></FaSignInAlt> Login
              </button>
            </NavLink>
          )}
        </div>
      </div>
      <div className="mt-16"></div>
    </div>
  );
};

export default Navbar;
