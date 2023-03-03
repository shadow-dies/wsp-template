import { createBrowserRouter, Navigate } from "react-router-dom"
import Template from "./page";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Template/>
      },
])
export default router;