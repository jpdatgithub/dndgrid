import React from 'react';
import Gameroom from './Pages/Gameroom/Gameroom'
import Login from './Pages/Login/Login'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import useToken from './Utils/useToken';
  
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
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <RouterProvider router={router} />
  );
}

export default App;
