import React from 'react';
import Gameroom from './Pages/Gameroom/Gameroom'
import Login from './Components/Login/Login'
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
  /* the line below before was:
  const [token, setToken] = useState();
  Gotta learn better how that works later because this is how to use a custom React Hook, which seems to be extremely powerfull tool
  */
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <RouterProvider router={router} />
  );
}

export default App;
