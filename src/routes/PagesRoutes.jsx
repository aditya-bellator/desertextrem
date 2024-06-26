import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../common/MainLayout";
import Home from "../pages/home/Home";
import Explore from "../pages/explore/Explore";
import WebHome from "../pages/webHome/WebHome";

export const mobilerouter = createBrowserRouter([
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
export const webRouter = createBrowserRouter([
  {
    path:"/",
    element:<WebHome/>
  },
  ]);