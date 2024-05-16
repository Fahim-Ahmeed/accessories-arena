import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './assets/Components/Root/Root';
import ErrorPage from './assets/Components/Error/Error';
import Home from './assets/Components/Home/Home';
import Contact from './assets/Components/Contact/Contact';
import Community from './assets/Components/Community/Community';
import Login from './assets/Components/Login/Login';
import Products from './assets/Components/Products/Products';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
      },
      {
        path:"/contact",
        element:<Contact></Contact>,
      },
      {
        path:"/Community",
        element:<Community></Community>,
      },
      {
        path:"/login",
        element:<Login></Login>,
      },
      {
        path:"/products",
        loader:()=>
          fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`)
        ,
        element:<Products></Products>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
