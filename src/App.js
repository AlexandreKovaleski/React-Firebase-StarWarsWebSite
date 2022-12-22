import React, { useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./assets/css/styles.css";
import Login from "./views/Login"
import Home from './views/Home';
import Films from './views/Films';
import Starships from './views/Starships';
import People from './views/People';
import Planets from './views/Planets';
import Species from './views/Species';
import About from './views/About';

const App = () => {

  const [login, setLogin] = useState(false);

  const verificarLogin = () => {
    setLogin(sessionStorage.getItem("login"))
  }

  const router = createBrowserRouter([
    
    {
      path: "/",
      element: <Login verificarLogin={verificarLogin} />
    },

    {
      path: "/home",
      element: login ? <Home /> : <Login verificarLogin={verificarLogin}/>,
    },

    {
      path: "/films",
      element: login ? <Films /> : <Login verificarLogin={verificarLogin}/>,
    },

    {
      path: "/starships",
      element: login ? <Starships /> : <Login verificarLogin={verificarLogin}/>,
    },

    {
      path: "/people",
      element: login ? <People /> : <Login verificarLogin={verificarLogin}/>,
    },

    {
      path: "/planets",
      element: login ? <Planets /> : <Login verificarLogin={verificarLogin}/>,
    },

    {
      path: "/species",
      element: login ? <Species /> : <Login verificarLogin={verificarLogin}/>,
    },

    {
      path: "/about",
      element: login ? <About /> : <Login verificarLogin={verificarLogin}/>,
    },

  ]);


  return (
    <RouterProvider router={router} />
  );
}

export default App;
