import React from 'react';
import Logo from '../assets/images/site-logo.svg';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
        <nav className="navbar navbar-expand-lg ">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img src={Logo} alt="collabcore"/></a>
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#togglenav" aria-controls="togglenav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="togglenav">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Solutions 
                    </a>
                    <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="#">Action</Link></li>
                        <li><Link className="dropdown-item" to="#">Another action</Link></li>
                        <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                    </ul>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="#">How it works</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="#">Pricing</Link>
                    </li>
                    
                    <li className="nav-item">
                    <Link className="nav-link "  to="#">FAQ</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link "  to="">Resources</Link>
                    </li>
                </ul>
                <div className="headr_btns">
                    <button className="CTA">Log in</button>
                    <button className="Cta">Sign up</button>
                </div>
                </div>
            </div>
            </nav>
 
  )
}
