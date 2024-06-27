
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { mobilerouter} from "./routes/PagesRoutes"
import { useMediaQuery } from './useMediaQuery'
function App() {
  const isMobile = useMediaQuery("(max-width:480px)")
  return (
    <>
    <RouterProvider router={mobilerouter(isMobile)} />
    </>
  )
}

export default App
