import { createBrowserRouter } from "react-router-dom";
import MostrarMap from "./components/MostrarMap";


const router = createBrowserRouter([
  {
    path: '/',
    element: <MostrarMap />
  }
])

export default router