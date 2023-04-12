import React, { useState } from 'react';
import Gameroom from './Pages/Gameroom/Gameroom'
import Login from './Pages/Login/Login'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import useToken from './Utils/useToken';
import SignUp from './Pages/SignUp/SignUp';
import { validateToken } from './Utils/Calls';
  


function App() {
  const { token, setToken } = useToken();
  const [signingUp, setSigningUp] = useState(false);

  if(!token) {
    return signingUp ? <SignUp setSigningUp={setSigningUp}/> : <Login setSigningUp={setSigningUp} setToken={setToken}/>
  }

  validateToken({token: token})
    .then(response => {
    if (!response.ok)
    {
      setToken(null);
    }
  }).catch(error => {
    console.error(error);
    setToken(null);
  });

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
        element: <Gameroom />
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
