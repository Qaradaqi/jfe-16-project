import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SingleMovie from "./pages/SingleMovie";
import Search from "./pages/Search";
import Movies from "./pages/Movies";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";


const routes = [
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/movies/:id',
        element: <SingleMovie />
    },
    {
        path: '/search',
        element: <Search />
    },
    {
        path: '/movies',
        element: <Movies />
    },
    {
        path: '*',
        element: <NotFound />
    },
];

const router = createBrowserRouter(routes);

export default function Router() {
    return (
        <RouterProvider router={router} />
    );
}