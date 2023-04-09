import React, { useState } from 'react';
import Gameroom from './Pages/Gameroom/Gameroom'
import Login from './Pages/Login/Login'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import useToken from './Utils/useToken';
import SignUp from './Pages/SignUp/SignUp';
  


function App() {
  const { token, setToken } = useToken();
  const [signingUp, setSigningUp] = useState(false);

  if(!token) {
    return signingUp ? <SignUp setSigningUp={setSigningUp}/> : <Login setSigningUp={setSigningUp} setToken={setToken} />
  }

  const router = createBrowserRouter([
    {
      path:'/*',
      element: <div>not found</div>
    },
    {
      path: "/",
      element: <div>Hello!</div>,
    },
    {
        path: "/gameroom",
        element: <></>//<Gameroom />, need to fetch the username now 
    },
    {
      path:"/test",
      element: <></> //<-- set element for test here
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
