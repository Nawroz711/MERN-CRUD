import { createBrowserRouter, Navigate } from "react-router-dom";
import GuestLayout from "./components/GuestLayout";
import DefaultLayout from "./components/DefaultLayout";
import Login from "./views/Auth/Login";
import Signup from "./views/Auth/Signup";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to="/users" />
            },
            // {
            //     path: '/dashboard',
            //     element: <Dashboard />
            // },
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
            }
        ]
    }
])

export default router;