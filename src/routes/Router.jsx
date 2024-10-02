import {createBrowserRouter} from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import App from "../App";
import HomePage from "../pages/HomePage.jsx";
import LogInPage from "../pages/LogInPage.jsx";
import RegisterPage from "../pages/RegisterPage.jsx";
import ProfilsPage from "../pages/ProfilsPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/log",
                element: <LogInPage/>
            },
            {
                path: '/',
                element: <HomePage/>
                
            },
            {
                path : "/register",
                element : <RegisterPage />
            },
            {
                path :"/profils",
                element : <ProfilsPage />
            }
        ],
        errorElement: <ErrorPage/>
    }

]);

export default router;