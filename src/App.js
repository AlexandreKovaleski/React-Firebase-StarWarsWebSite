import React, { useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./assets/css/styles.css";
import Login from './assets/views/Login';
import Home from './assets/views/Home';
import Films from './assets/views/Films';
import Starships from './assets/views/Starships';
import People from './assets/views/People';
import Planets from './assets/views/Planets';
import Species from './assets/views/Species';
import About from './assets/views/About';

const App = () => {

  const [login, setLogin] = useState(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/films",
      element: <Films />,
    },
    {
      path: "/starships",
      element: <Starships />,
    },
    {
      path: "/people",
      element: <People />,
    },
    {
      path: "/planets",
      element: <Planets />,
    },
    {
      path: "/species",
      element: <Species />,
    },
    {
      path: "/about",
      element: <About />,
    },

  ]);


  return (
    <RouterProvider router={router} />
  );
}

export default App;
