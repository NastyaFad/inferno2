import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Homepage from "../pages/Homepage";
import Catalog from "../pages/Catalog";
import Productpage from "../pages/Productpage";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Homepage />
            },
            {
                path: "/catalog",
                element: <Catalog />
            },
            {
                path: "/product/:id",
                element: <Productpage />
            }
        ]
    }
])

export default router