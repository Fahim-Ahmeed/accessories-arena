import { useContext } from "react";
import { NavLink, Navigate, useLocation } from "react-router-dom";
import { Auth } from "../Context/AuthenticationContext";
import Root from "../Root/Root";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const location = useLocation();
  console.log(children);
  console.log(location.pathname)
  const { user, loading } = useContext(Auth);
  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }
  if (user) {
    return children;
  }
  if(location.pathname!="/dashboard" && location.pathname!="/contact"){
    return <Navigate to="/" state={{from:location}}replace/>
  }
console.log(location)

  //   if (!user) {
  //     <Navigate to="/login" state={{ from: location }} replace />;

  //   }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
