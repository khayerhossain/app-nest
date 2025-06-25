import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Components/Home/Home";
import Profile from "../Pages/Profile/Profile";
import AppDetails from "../Pages/AppDetails/AppDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../Provider/PrivateRoute/PrivateRoute";
import Loading from "../Pages/Loading/Loading";
import About from "../Pages/About/About";
import ErrorPage from "../Pages/Error/ErrorPage";

export const router=createBrowserRouter([
    {
        path:"/",
        Component:MainLayout,
        children:[
            {index:true, Component:Home},
            {path:"profile", element:<PrivateRoute>
                <Profile></Profile>
            </PrivateRoute>},
            {path:"appdetails/:id",
            element:<PrivateRoute>
                <AppDetails></AppDetails>
            </PrivateRoute>,
            loader:()=>fetch("/Apps_Data.json"),
            hydrateFallbackElement:Loading,
            },
            {path:"login",Component:Login},
            {path:"register",Component:Register},
            {path:"about",Component:About},
            {path:"*", Component:ErrorPage}

           
        ]
    }
])