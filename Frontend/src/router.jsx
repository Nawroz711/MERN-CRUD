import { createBrowserRouter, Navigate } from "react-router-dom";
import GuestLayout from "./components/GuestLayout";
import DefaultLayout from "./components/DefaultLayout";
import Login from "./views/Auth/Login";
import Signup from "./views/Auth/Signup";
import ForgotPassword from "./views/Auth/ForgotPassword";
import Dashboard from "./views/Dashboard";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to="/dashboard" />
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            // {
            //     path: '/users',
            //     element: <Users />
            // },
            // {
            //     path: '/users/new',
            //     element: <UserForm key="userCreate" />
            // },
            // {
            //     path: '/users/:id',
            //     element: <UserForm key="userUpdate" />
            // }
        ]
    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            },
            {
                path: '/forgot-password',
                element: <ForgotPassword />
            }
        ]
    }
])

export default router;