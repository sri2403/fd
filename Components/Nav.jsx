import React from 'react';
import { Link } from 'react-router-dom';
import "./nav.css";

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
                <h1 className="navbar-brand text-white" to="/">My App</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav p-3 ">
            
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/register">Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;