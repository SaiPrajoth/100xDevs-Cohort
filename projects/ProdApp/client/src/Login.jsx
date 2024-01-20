// import React from 'react'
import { useState } from 'react'
import logo from './logo.png'
import { Link, Navigate } from 'react-router-dom'
// import './App.css'

export default function Login() {

  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [Home,setHome]=useState(false);

  async function login(ev){
    ev.preventDefault();
    const response = await fetch('http://localhost:3000/login',{
      method:"POST",
      Body:{
        username:username,
        password:password,

      },
      headers:{
        "Content-type": "application/json; charset=UTF-8"
      }
    })

    if(response.ok){
      setHome(true)
    }
  }

  if(Home){
    return(
      <Navigate to={'/login'}/>
    )
  }else{
    return (
      <main>
      <header>
        <img className='logo-image' src={logo} alt="ProdApp-logo"/>
      </header>
      <div className="registration-form" onSubmit={login}>
        <form action="">
        <h1>Login</h1>
        <input type="text" placeholder='username' value={username} onChange={(ev)=>setUsername(ev.target.value)}/>
        <input type="password" placeholder='password' value={password} onChange={(ev)=>setPassword(ev.target.value)}/>
        <button type='submit'>Login</button>
        <div className="register-here">did not register yet, <Link className='register-text' to='/register'>register here</Link></div>
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
