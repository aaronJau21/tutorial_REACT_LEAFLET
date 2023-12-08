import { createBrowserRouter } from "react-router-dom";
import MostrarMap from "./components/maps/MostrarMap";
import LayersControl from "./components/maps/LayersControl2";
import Vectores from "./components/maps/Vectores";
import Popups from "./components/maps/Popups";
import TurfUnion from "./components/turf/TurfUnion";



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
  },
  {
    path: '/turf-union',
    element: <TurfUnion />
  }
])

export default router