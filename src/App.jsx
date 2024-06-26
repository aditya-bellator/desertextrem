
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { mobilerouter, webRouter} from "./routes/PagesRoutes"
import { useMediaQuery } from './useMediaQuery'
function App() {
  const isMobile = useMediaQuery("(max-width:480px)")
  return (
    <>
    <RouterProvider router={isMobile? mobilerouter:webRouter} />
    </>
  )
}

export default App
