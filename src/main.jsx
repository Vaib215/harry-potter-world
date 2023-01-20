import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Characters from './components/Characters';
import Person from './components/Person';
import loadData from './helpers/loadData';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/characters",
        element: <Characters uri={"characters"}/>,
      },
      {
        path: "/students",
        element: <Characters uri={"characters/students"}/>,
      },
      {
        path: "/teachers",
        element: <Characters uri={"characters/staff"}/>,
      },
      {
        path: "/spells",
        element: <Characters uri={"spells"}/>,
      },
      {
        path: "/character/:id",
        element: <Person />,
        loader: loadData
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
