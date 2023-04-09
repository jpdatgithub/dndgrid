import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString!);
    return userToken?.token
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (response: Response) => {
    if (!response) {
      localStorage.removeItem('token');
      setToken(null);
    }
    else
    {
      response.json().then((data) => {
        const token = data.token;
        localStorage.setItem('token', JSON.stringify(token));
        setToken(token);
      });
    }
  };

  return {
    setToken: saveToken,
    token
  }
}