import { createBrowserRouter } from "react-router-dom";
import MostrarMap from "./components/MostrarMap";
import LayersControl from "./components/LayersControl2";
import Vectores from "./components/Vectores";
import Popups from "./components/Popups";



const router = createBrowserRouter([
  {
    path: '/',
    element: <MostrarMap />
  },
  {
    path: '/LayersControl',
    element: <LayersControl />
  },
  {
    path: '/vectores',
    element: <Vectores />
  },
  {
    path: '/popups',
    element: <Popups />
  }
])

export default router