import React, { useState } from 'react';
import Gameroom from './Pages/Gameroom/Gameroom'
import Login from './Components/Login/Login'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
  
const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello!</div>,
    },
    {
        path: "/gameroom",
        element: <Gameroom />,
    },
]);

function App() {
  const [token, setToken] = useState(String);

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <RouterProvider router={router} />
  );
}

export default App;
