import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Pages/Auth-Context/Auth-Context';

function Header() {
    const { isUserLoggedin, onLogout, role } = useAuth()
    const navigate = useNavigate();

    const handleLogout = () => {
        onLogout()
        navigate('/login');
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/">Travel</Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse justify-content-end"
                    id="navbarNav"
                >
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/home">Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link
                                className="nav-link dropdown-toggle"
                                to="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Trip Type
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="/long-trip">Long Trip</Link>
                                <Link className="dropdown-item" to="/one-day">One Day Trip</Link>
                                <Link className="dropdown-item" to="/two-day">Two Day Trip</Link>
                            </div>
                        </li>
                        {
                            isUserLoggedin && role && role !== 'admin' && (
                                <li className="nav-item">
                                    <Link className="nav-link" to="/my-trips">My Trips</Link>
                                </li>
                            )
                        }
                        {
                            isUserLoggedin && role && role === 'admin' && (
                                <li className="nav-item">
                                    <Link className="nav-link" to="/all-users">Users</Link>
                                </li>
                            )
                        }
                        <li className="nav-item">
                            <Link className="nav-link" to="/all-trips">All Trips</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/services">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about-us">About</Link>
                        </li>
                        {!isUserLoggedin && (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">
                                        <button className='btn btn-primary'>Login</button>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">
                                        <button className='btn btn-success'>Register</button>
                                    </Link>
                                </li>
                            </>
                        )}
                        {
                            isUserLoggedin && (
                                <li className="nav-item">
                                    <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
