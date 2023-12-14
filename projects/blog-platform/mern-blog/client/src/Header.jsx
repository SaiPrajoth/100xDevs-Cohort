// import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="main">
      <header>
        <div className="logo">MyBlog</div>
        <nav className="nav-bar">

          <Link to='/login' className="nav-login" >Login</Link>
          <Link to='/register' className="nav-register">Register</Link>      
        </nav>
      </header>
    </div>
  );
}
