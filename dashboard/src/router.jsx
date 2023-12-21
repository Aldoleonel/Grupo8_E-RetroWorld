import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layouts";
import { HomeAdminPage } from "./pages/HomeAdminPage";
import { ListProductPage } from "./pages/ListProductPage";
import {loader as loaderAdminHome} from "./pages/HomeAdminPage/loader"



export const router =  createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <HomeAdminPage/>,
                loader: loaderAdminHome
            },
            {
                path: '/movies',
                element: <ListProductPage/>
            }
        ]
    }
])