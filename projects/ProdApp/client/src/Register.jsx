// import React from 'react'
import { useState } from 'react';
import logo from './logo.png'
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
// import Login from './Login';
// import './App.css'

export default function Register() {
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  const [goLogin,setLogin]=useState(false);

  async function register(e){
    e.preventDefault();
  const response =   await fetch('http://localhost:3000/register', {
      method: "POST",
      Body:{
        username:username,
        password:password,
      },
      headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
    })
    
    if(response.ok){
      setLogin(true);
    }
  }

  if(goLogin){
    return(
      <Navigate to="/login"/>
    )
  }else{
    return (
      <main>
        <header>
          <img className='logo-image' src={logo} alt="ProdApp-logo"/>
        </header>
        <div className="registration-form">
          <form action="" onSubmit={register}>
          <h1>Register</h1>
          <input type="text" placeholder='username' value={username} onChange={ev=>setUsername(ev.target.value)}/>
          <input type="password" placeholder='password' value={password} onChange={ev=>setPassword(ev.target.value)}/>
          <button type='submit'>Register</button>
          <div className="login-here">already signed up,<Link className='login-text' to='/login'>login here</Link></div>
          </form>
        </div>
        {/* <form action="" className="registration-form">
          <h1>Register</h1>
          <input type="text" placeholder='username'/>
          <input type="password" placeholder='password' />
        </form> */}
      </main>
    )
  }

 
}
