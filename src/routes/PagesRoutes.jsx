import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../common/MainLayout";
import Home from "../pages/home/Home";
import Explore from "../pages/explore/Explore";
import WebHome from "../pages/webHome/WebHome";
import TourDetail from "../pages/tourDetail/TourDetail"
import TourDetailLayout from "../pages/tourDetail/TourDetailLayout"
import MobileDetailPage from "../pages/tourDetail/MobileDetailPage"

export const mobilerouter = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
{
      path:"/tour-detail/",
      element:<MobileDetailPage/>
    }
  ,
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
  {
    path: "/",
    element: <TourDetailLayout />,
    children:[{
      path:"/tour-detail/",
      element:<TourDetail/>
    }]
  },
  ]);