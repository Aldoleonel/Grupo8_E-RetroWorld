import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layouts";
import { Home } from "./pages/HomeAdminPage";
import { ListProductPage } from "./pages/ListProductPage";



export const router =  createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: '/movies',
                element: <ListProductPage/>
            }
        ]
    }
])