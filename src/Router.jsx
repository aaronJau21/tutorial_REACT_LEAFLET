import { createBrowserRouter } from "react-router-dom";
// import MostrarMap from "./components/MostrarMap";
import LayersControl from "./components/LayersControl2";



const router = createBrowserRouter([
  // {
  //   path: '/',
  //   element: <MostrarMap />
  // },
  {
    path: '/LayersControl',
    element: <LayersControl />
  }
])

export default router