import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";
import './index.css'
import { ContextProvider } from './context/ContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

    <ContextProvider>
        <RouterProvider router={router} />
    </ContextProvider>
)
