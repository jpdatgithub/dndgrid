import React, { useState } from 'react';
import Card from '../../Components/Card/Card';
import './Login.scss';

export interface ICredentials {
  username: string,
  password: string
}

async function loginUser(credentials: ICredentials): Promise<Response> {
  return fetch('http://localhost:5191/ttm/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

export interface ILoginProps {
    setToken: Function
    setSigningUp: Function
}

export default function Login(props: ILoginProps) {
  const [username, setUserName] = useState(String);
  const [password, setPassword] = useState(String);
  const [unauth, setUnauth] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const token = await loginUser({
      username,
      password
    });

    if (token.status == 401)
    {
      props.setToken(null);
      setUnauth(true);
    }
    else
    {
      props.setToken(token);
    }
  }

  return (
    <div className='login-page display-flex-centered'>
      <Card className='login-card'
      children={
        <div className="login-form">
          <h1>Please Log In</h1>
          {unauth && <span className='display-flex-centered error'>Hmm, couldn't find you. Maybe a typo?</span>}          <form onSubmit={handleSubmit}>
            <label className='display-flex-centered'>
              <span>Username</span>
              <input type="text" onChange={e => setUserName(e.target.value)}/>
            </label>
            <label className='display-flex-centered'>
              <span>Password</span>
              <input type="password" onChange={e => setPassword(e.target.value)}/>
            </label>
            <div className='display-flex-centered submit'>
              <button type="submit">Submit</button>
            </div>
            <div className='display-flex-centered signup'>
              <span>Not registered yet? <button onClick={() => {props.setSigningUp(true)}}>Sign up!</button></span>
            </div>
          </form>
        </div>
      }/>
    </div>
  )
}