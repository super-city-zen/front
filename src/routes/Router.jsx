import {createBrowserRouter} from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import App from "../App";
import LogPage from "../pages/LogPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/log",
                element: <LogPage/>
            }
        ],
        errorElement: <ErrorPage/>
    },
]);

export default router;