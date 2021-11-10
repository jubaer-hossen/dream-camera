import React, { useState } from 'react';
import { useLocation, useHistory, Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const SignUp = () => {
    const [signUpData, setSignUpData] = useState({});

    const { user, authError, registerUser, isLoading } = useAuth();

    const location = useLocation();
    const history = useHistory();
    // const redirect_url = location.state?.from || '/home';

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newSignUpData = { ...signUpData };
        newSignUpData[field] = value;
        setSignUpData(newSignUpData);
    };

    const handleSignUp = e => {
        e.preventDefault();

        registerUser(
            signUpData.email,
            signUpData.password,
            signUpData.name,
            location,
            history
        );
    };

    return (
        <div className="text-center bg-form">
            <h1>Please, sign up</h1>
            {!isLoading && (
                <form onSubmit={handleSignUp}>
                    <input
                        onBlur={handleOnBlur}
                        className="w-50 my-2 py-2"
                        placeholder="Your Name"
                        type="text"
                        name="name"
                        id="name"
                        required
                    />
                    <br />
                    <input
                        onBlur={handleOnBlur}
                        className="w-50 my-2 py-2"
                        placeholder="Your Email"
                        type="email"
                        name="email"
                        id="email"
                        required
                    />
                    <br />
                    <input
                        onBlur={handleOnBlur}
                        className="w-50 my-2 py-2"
                        placeholder="Your Password"
                        type="password"
                        name="password"
                        id="password"
                        required
                    />
                    <br />
                    <input
                        className="w-50 my-2 py-2 btn btn-primary"
                        type="submit"
                        value="Sign Up"
                    />
                </form>
            )}
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
                        User has successfully signed !
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
            <Link to="/login">
                <p>Already registered?</p>
            </Link>
        </div>
    );
};

export default SignUp;
