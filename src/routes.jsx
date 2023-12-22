import Home from "./components/layout/Home";
import Login from "./components/utilities/Auth/Login";
import Register from "./components/utilities/Auth/Register";

const routes = [
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/*",
        element: <Home />
    },
];

export default routes;