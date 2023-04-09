import React, { useState } from 'react';
import Card from '../../Components/Card/Card';
import { ICredentials } from '../Login/Login';
import './SignUp.scss';

async function registerUser(credentials: ICredentials) {
  return fetch('http://localhost:5191/ttm/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

 export interface ISignUpProps {
    setSigningUp: Function
}

export default function SignUp(props: ISignUpProps) {
  const [username, setUserName] = useState(String);
  const [password, setPassword] = useState(String);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await registerUser({
      username,
      password
    });
    props.setSigningUp(false);
  }

  return (
    <div className='signup-page display-flex-centered'>
      <Card className='signup-card'
      children={
        <div className="signup-form">
          <h1>Please Sign Up</h1>
          <form onSubmit={handleSubmit}>
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
              <span>Already registered? <button onClick={() => {props.setSigningUp(false)}}>Log in!</button></span>
            </div>
          </form>
        </div>
      }/>
    </div>
  )
}