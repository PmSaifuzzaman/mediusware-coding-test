import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/Home/Home";
import Errorpage from "../components/Errorpage/Errorpage";




const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <Errorpage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);


  export default router;