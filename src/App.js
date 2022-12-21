import React, { useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./assets/css/styles.css";
import Login from './assets/views/Login';
import Menu from './assets/views/Menu';

const App = () => {

  const [login, setLogin] = useState(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login setLogin={setLogin} />
    },
    {
      path: "/menu",
      element: <Menu />,
    },

  ]);


  return (
    <RouterProvider router={router} />
  );
}

export default App;
