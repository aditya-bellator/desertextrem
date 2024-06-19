import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../common/MainLayout";
import Home from "../pages/home/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
  children:[{
    path:"/",
    element:<Home/>
  }]
    },
    // path: "/home",
    //   element: "mkmkmjdjaj",

  ]);