import { useState } from 'react';

interface UserToken {
  token: string;
}

interface TokenHook {
  setToken: (userToken: UserToken | null) => void;
  token: string | null;
}

export default function useToken(): TokenHook {
  const getToken = (): string | null => {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString || 'null') as UserToken | null;
    return userToken?.token ?? null;
  };

  const [token, setToken] = useState<string | null>(getToken());

  const saveToken = (userToken: UserToken | null) => {
    if (userToken != null)
    {
      localStorage.setItem('token', JSON.stringify(userToken));
      setToken(userToken.token);
    }
    else
    {
      setToken(null);
    }
  };

  return {
    setToken: saveToken,
    token,
  };
}



