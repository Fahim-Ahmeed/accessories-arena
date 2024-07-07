import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useContext } from "react";
import { Auth } from "../Context/AuthenticationContext";
import Dashboard from "../Dashboard/Dashboard";
const Root = () => {
  const { user } = useContext(Auth);
  return (
    <div className="flex flex-col min-h-screen">
      {/* <div className="container mx-auto"> */}
          <Navbar></Navbar>
          <div className="flex-grow container mx-auto">
             <Outlet />
          </div>
        <Footer></Footer>
      {/* </div> */}
    </div>
  );
};

export default Root;
