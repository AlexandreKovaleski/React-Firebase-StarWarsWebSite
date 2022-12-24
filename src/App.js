import React, { useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./assets/css/styles.css";
import Login from "./views/Login"
import ErrorPage from './views/ErrorPage';
import Home from './views/Home';
import Films from './views/Films';
import Starships from './views/Starships';
import People from './views/People';
import Planets from './views/Planets';
import Species from './views/Species';
import About from './views/About';
import EpOne from './views/films/EpOne';
import EpTwo from './views/films/EpTwo';
import EpThree from './views/films/EpThree';
import EpFour from './views/films/EpFour';
import EpFive from './views/films/EpFive';
import EpSix from './views/films/EpSix';
import EpSeven from './views/films/EpSeven';
import EpEight from './views/films/EpEight';
import EpNine from './views/films/EpNine';
import HanSolo from './views/films/HanSolo';
import RogueOne from './views/films/RogueOne';
import Sequence from './views/films/Sequence';

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
      path: "/*",
      element: <ErrorPage />
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
    {
      path: "/films/ep-one",
      element: login ? <EpOne /> : <Login verificarLogin={verificarLogin}/>,
    },
    {
      path: "/films/ep-two",
      element: login ? <EpTwo /> : <Login verificarLogin={verificarLogin}/>,
    },
    {
      path: "/films/ep-three",
      element: login ? <EpThree /> : <Login verificarLogin={verificarLogin}/>,
    },
    {
      path: "/films/ep-four",
      element: login ? <EpFour /> : <Login verificarLogin={verificarLogin}/>,
    },
    {
      path: "/films/ep-five",
      element: login ? <EpFive /> : <Login verificarLogin={verificarLogin}/>,
    },
    {
      path: "/films/ep-six",
      element: login ? <EpSix /> : <Login verificarLogin={verificarLogin}/>,
    },
    {
      path: "/films/ep-seven",
      element: login ? <EpSeven /> : <Login verificarLogin={verificarLogin}/>,
    },
    {
      path: "/films/ep-eight",
      element: login ? <EpEight /> : <Login verificarLogin={verificarLogin}/>,
    },
    {
      path: "/films/ep-nine",
      element: login ? <EpNine /> : <Login verificarLogin={verificarLogin}/>,
    },
    {
      path: "/films/han-solo",
      element: login ? <HanSolo /> : <Login verificarLogin={verificarLogin}/>,
    },
    {
      path: "/films/rogue-one",
      element: login ? <RogueOne /> : <Login verificarLogin={verificarLogin}/>,
    },
    {
      path: "/films/sequence",
      element: login ? <Sequence /> : <Login verificarLogin={verificarLogin}/>,
    },
    
  ]);


  return (
    <RouterProvider router={router} />
  );
}

export default App;
