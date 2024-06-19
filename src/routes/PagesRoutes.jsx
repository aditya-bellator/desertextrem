import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../common/MainLayout";
import Home from "../pages/home/Home";
import Explore from "../pages/explore/Explore";

export const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
    {
      path: "/",
      element: <MainLayout/>,
  children:[
    {
      path:"/explore",
      element:<Explore/>
    },
    
],

},

   

  ]);