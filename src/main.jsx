import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./assets/Components/Root/Root";
import ErrorPage from "./assets/Components/Error/Error";
import Home from "./assets/Components/Home/Home";
import Contact from "./assets/Components/Contact/Contact";
import Community from "./assets/Components/Community/Community";
import Login from "./assets/Components/Login/Login";
import Products from "./assets/Components/Products/Products";
import AuthenticationContext, {
  Auth,
} from "./assets/Components/Context/AuthenticationContext";
import Register from "./assets/Components/Register/Register";
import PrivateRoute from "./assets/Components/PrivateRoute/PrivateRoute";
import Dashboard from "./assets/Components/Dashboard/Dashboard";
import ProductContext from "./assets/Components/Context/ProductContext";
import Cart from "./assets/Components/Cart/Cart";
import UpdateProduct from "./assets/Components/Dashboard/AdminDashboard/UpdateProduct/UpdateProduct";
import RepairService from "./assets/Components/RepairService/RepairService";
import SingleProduct from "./assets/Components/Products/Product/SingleProduct";
import AddressForm from "./assets/Components/AddressForm/AddressForm";
import PaymentSuccess from "./assets/Components/Products/Product/PaymentSuccess";
import PaymentFail from "./assets/Components/Products/Product/PaymentFail";
import Checkout from "./assets/Components/Products/checkout";
import ContactInformation from "./assets/Components/Contact/ContactInformation";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "payment/success/:tranId",
        element: <PaymentSuccess></PaymentSuccess>,
      },
      {
        path: "payment/fail/:tranId",
        element: <PaymentFail></PaymentFail>,
      },
      {
        path: "/contact",
        element: (
          <PrivateRoute>
            <Contact></Contact>
          </PrivateRoute>
        ),
      },
      {
        path: "/Community",
        element: <Community></Community>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/contactInformation",
        element:<ContactInformation></ContactInformation>
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <Cart></Cart>
          </PrivateRoute>
        ),
      },
      {
        path: "/repairService",
        element: <RepairService></RepairService>,
      },
      {
        path: "/AddressForm",
        loader: () => fetch(`http://localhost:5000/api/address`),
        element: <AddressForm />,
      },
      {
        path: `/productDetails/:id`,
        element: <SingleProduct></SingleProduct>,
      },
      {
        path: `/updateProduct/:id`,
        element: (
          <PrivateRoute>
            <UpdateProduct />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/products/${params.id}`),
      },
      {
        path: "/products",
        loader: () => fetch(`http://localhost:5000/api/products`),
        element: <Products></Products>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <AuthenticationContext>
      <ProductContext>
        <RouterProvider router={router} />
      </ProductContext>
    </AuthenticationContext>
  </>
);
