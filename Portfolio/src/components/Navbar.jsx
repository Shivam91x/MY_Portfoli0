import { Link } from "react-router-dom";
import React from 'react'

export default function Navbar() {
  return (
    <>

      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo"> 
            <img src="/logo.png" alt="Logo" className="navbar-logo-image" />
          </Link>
          <ul className="navbar-menu">
            <li className="navbar-item">
              <Link to="/wwww.youtube.com" className="navbar-link">Home</Link>
            </li>
            </ul>

</div>
</nav>
             
  
     
    </>
  );
}
