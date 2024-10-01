import {createBrowserRouter} from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import App from "../App";
import LogPage from "../pages/LogPage.jsx";
import HomePage from "../pages/HomePage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/log",
                element: <LogPage/>
            },
            {
                path: '/',
                element: <HomePage/>
            }
        ],
        errorElement: <ErrorPage/>
    },
]);

export default router;