import Home from "./components/layout/Home";
import Login from "./components/utilities/Auth/Login";
import Register from "./components/utilities/Auth/Register";

const routes = [
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/*",
        element: <Login />
    },
];

export default routes;