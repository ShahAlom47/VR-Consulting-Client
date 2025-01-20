
import Root from "../Root/Root";
import Home from "../Pages/Home";
import { createBrowserRouter } from "react-router";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div><Root></Root></div>,
      errorElement: <p>Error</p>,
      children: [
        {
          path: "/",
          element: <div><Home></Home></div>,
        },
       
      ]
    },
  ]);
  
  export default router
  