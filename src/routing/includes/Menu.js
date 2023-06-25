import React from 'react';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';



export default function Menu() {
  return (
    <>
     <div className='container'>
      <nav className="navbar navbar-expand-sm">
        <div className="container-fluid">
          <img src={logo} alt={logo} style={{width: '50px'}} />

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav ms-auto">
              <Link to='/'> <li className="nav-item">Home</li> </Link>
              <Link to='/about-us'> <li className="nav-item">About</li> </Link>
              <Link to='/services'> <li className="nav-item">Services</li> </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    </>
  );
}
