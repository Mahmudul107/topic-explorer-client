import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Category from "../component/category";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/category',
                element: <Category/>
            }
        ]
    }
])


export default router;