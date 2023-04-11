import React, { useState } from 'react';
import Card from '../../Components/Card/Card';
import { registerUser } from '../../Utils/Calls';
import './SignUp.scss';

 export interface ISignUpProps {
    setSigningUp: Function
}

export default function SignUp(props: ISignUpProps) {
  const [username, setUserName] = useState(String);
  const [password, setPassword] = useState(String);
  const [conflict, setConflict] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const register = await registerUser({
      username,
      password
    });

    if (register.ok)
    {
      props.setSigningUp(false);
    }
    else
    {
      if (register.status == 409)
      {
        setConflict(true);
      }
      else
      {
        console.log("something else happened");
      }
    }
  }

  return (
    <div className='signup-page display-flex-centered'>
      <Card className='signup-card'
      children={
        <div className="signup-form">
          <h1>Please Sign Up</h1>
          {conflict && <span className='display-flex-centered error'>This user is already registered!</span>}
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