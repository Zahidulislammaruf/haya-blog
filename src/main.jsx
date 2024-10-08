import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Component/Main/Main.jsx';
import Home from './Component/Home/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element : <Main></Main>,
    children : [
      {
        path : "/",
        element : <Home></Home>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
       <RouterProvider router={router} />
  </StrictMode>,
)
