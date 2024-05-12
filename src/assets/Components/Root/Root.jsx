import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Root = () => {
    return (
        <div>
            <div className="container mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            {/* <Home></Home> */}
            </div>
            <Footer></Footer>
        </div>

    );
};

export default Root;