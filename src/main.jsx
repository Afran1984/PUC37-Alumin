import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import { HelmetProvider } from 'react-helmet-async';
import Root from './Componnent/Root/Root.jsx';
import Login from './Componnent/Login/Login.jsx';
import Reginster from './Componnent/Register/Reginster.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import UserDashbord from './Componnent/UserDashbord/UserDashbord.jsx';
import Order from './Componnent/Order/Order.jsx';
import PraivateRoute from './Route/PraivateRoute.jsx';
import Profile from './Componnent/Profile/Profile.jsx';
import AboutUs from './Componnent/AboutUs/AboutUs.jsx';
import PhotoGalary from './Componnent/PhotoGalary/PhotoGalary.jsx';
import Contactme from './Componnent/contact/Contactme.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/dashbord",
        element: <PraivateRoute><UserDashbord></UserDashbord></PraivateRoute>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Reginster></Reginster>
      },
      {
        path: "/order",
        element: <PraivateRoute><Order></Order></PraivateRoute>
      },
      {
        path: "/profile",
        element: <PraivateRoute><Profile></Profile></PraivateRoute>
      },
      {
        path:"/album",
        element: <PraivateRoute><PhotoGalary></PhotoGalary></PraivateRoute>
      },
      {
        path: "/aboutus",
        element: <PraivateRoute><AboutUs></AboutUs></PraivateRoute>
      },
      {
        path: "/contact",
        element: <PraivateRoute> <Contactme></Contactme> </PraivateRoute>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
    </HelmetProvider>
   
  </React.StrictMode>,
)
