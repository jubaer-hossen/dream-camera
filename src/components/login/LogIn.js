import React, { useState } from 'react';
import { useLocation, useHistory, Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const LogIn = () => {
    const { signInUsingGoogle, loginUser, user, authError, isLoading } =
        useAuth();
    const [loginData, setLoginData] = useState({});

    const location = useLocation();
    const history = useHistory();

    const handleGoogleLogin = () => {
        signInUsingGoogle(location, history);
    };

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(field, value, newLoginData);
        setLoginData(newLoginData);
    };

    const handleLogin = e => {
        e.preventDefault();

        loginUser(loginData.email, loginData.password, location, history);
    };

    return (
        <div className="text-center mt-5 bg-form">
            <div>
                <div className="text-primary">
                    <h1>
                        Login with email and password <br /> or, <br />
                        Login with google
                    </h1>
                </div>
                <br />
                <form onSubmit={handleLogin}>
                    <input
                        onBlur={handleOnBlur}
                        className="w-50 my-2 py-2"
                        placeholder="Your Email"
                        type="email"
                        name="email"
                        id="email"
                    />
                    <br />
                    <input
                        onBlur={handleOnBlur}
                        className="w-50 my-2 py-2"
                        placeholder="Your Password"
                        type="password"
                        name="password"
                        id="password"
                    />
                    <br />
                    <input
                        className="w-50 my-2 py-2 btn btn-primary"
                        type="submit"
                        value="Login"
                    />
                </form>
                {isLoading && (
                    <div class="d-flex justify-content-center">
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                )}
                {user?.email && (
                    <div class="d-flex justify-content-center">
                        <div
                            className="alert alert-success w-50 my-auto"
                            role="alert"
                        >
                            User has successfully login !
                        </div>
                    </div>
                )}
                {authError && (
                    <div class="d-flex justify-content-center">
                        <div
                            className="alert alert-danger w-50 my-auto"
                            role="alert"
                        >
                            {authError}
                        </div>
                    </div>
                )}
                <Link to="/signUp">
                    <p>New in 'Dream Camera'? Please, Sign Up!</p>
                </Link>
                <button
                    onClick={handleGoogleLogin}
                    className="btn btn-danger w-50"
                >
                    <i class="fab fa-google"></i> Google Sign In
                </button>
            </div>
            <br />
            <br />
            {/* <p className="text-danger">{error}</p> */}
        </div>
    );
};

export default LogIn;
