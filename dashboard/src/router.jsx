import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layouts";
import { Home } from "./pages/home";
import { ListMovies } from "./pages/list-movies";



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
                element: <ListMovies/>
            }
        ]
    }
])