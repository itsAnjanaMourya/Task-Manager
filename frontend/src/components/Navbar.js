import React from 'react'
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext.js';

const Navbar = () => {
    const { isAuthenticated, logout } = useContext(AuthContext);
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href={isAuthenticated?"/home":"/"}>Notes-App</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            
                             {isAuthenticated ? (
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" onClick={logout} href="/" >logout</a>
                            </li>
                            ):
                            <>
                                <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/register">Register</a>
                            </li>
                            </>
                        }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;


