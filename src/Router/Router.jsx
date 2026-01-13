import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "../Home/Home";
import Login from "../Loginform/Login";
import About from "../Components/About/About";
import Career from "../Components/Career/Career";
import Register from "../Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/about",
            element:<About/>
        },
        {
            path:"/career",
            element:<Career/>
        },
        {
            path:"/login",
            element:<Login/>
        },
        {
            path:"/register",
            element:<Register/>
        }
    ]
  },
]);

export default router;