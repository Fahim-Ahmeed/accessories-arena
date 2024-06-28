import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useContext } from "react";
import { Auth } from "../Context/AuthenticationContext";
import Dashboard from "../Dashboard/Dashboard";

const Root = () => {
    const{user}=useContext(Auth)
    return (
        <div>
            <div className="container mx-auto">
          
            <div>
                
            <Navbar></Navbar>
            <Outlet></Outlet>
            {/* <Home></Home> */}
            </div>
            {/* <Footer></Footer> */}
            </div>
        </div>

    );
};

export default Root;