import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
// import img1 from '../../img-svg/camera-fill.svg';

const NavBar = () => {
    const { logOut, user } = useAuth();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        {/* <img className="" src={img1} alt="" /> */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="35"
                            fill="currentColor"
                            class="bi bi-camera-fill"
                            viewBox="0 0 16 16"
                        >
                            <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                            <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                        </svg>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link
                                    className="nav-link active"
                                    aria-current="page"
                                    to="/home"
                                >
                                    HOME
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link active"
                                    aria-current="page"
                                    to="/explore"
                                >
                                    Explore
                                </Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link
                                    className="nav-link active"
                                    aria-current="page"
                                    to="/dashboard"
                                >
                                    Dashboard
                                </Link>
                            </li> */}

                            <li className="nav-item">
                                <Link
                                    className="nav-link active"
                                    aria-current="page"
                                    to="/about"
                                >
                                    ABOUT-US
                                </Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav me-5 mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link
                                    className="nav-link active fw-bold"
                                    aria-current="page"
                                    to="/dashboard"
                                >
                                    Dashboard
                                </Link>
                            </li>
                            <li className="nav-item">
                                <span className="text-white me-2 nav-link">
                                    {user.displayName}
                                </span>
                            </li>
                            <li className="nav-item">
                                <img
                                    width="50"
                                    // // src={user.photoUrl}
                                    className="rounded-circle me-3"
                                    // src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                                    src={
                                        user.photoUrl
                                            ? 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
                                            : ''
                                    }
                                    alt=""
                                />
                            </li>
                            {user.email ? (
                                <li className="nav-item">
                                    <button
                                        onClick={logOut}
                                        className="btn btn-warning"
                                    >
                                        <i className="fas fa-sign-out-alt"></i>{' '}
                                        Log Out
                                    </button>
                                </li>
                            ) : (
                                <li className="nav-item">
                                    <Link
                                        className="nav-link active"
                                        aria-current="page"
                                        to="/login"
                                    >
                                        <i className="fas fa-sign-in-alt"></i>{' '}
                                        Log In
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
