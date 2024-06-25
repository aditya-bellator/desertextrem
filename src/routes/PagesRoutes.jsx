import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../common/MainLayout";
import Home from "../pages/home/Home";
import Explore from "../pages/explore/Explore";
import WebHome from "../pages/webHome/WebHome";

export const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/web-home",
    element:<WebHome/>
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