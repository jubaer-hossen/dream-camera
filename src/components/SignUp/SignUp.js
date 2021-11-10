import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="bg-primary background  py-5 m-5 mx-auto w-75">
            <form
                onSubmit=""
                className="w-50 mx-auto my-5 bg-light p-5 rounded"
            >
                <h3 className="text-center">Sign Up</h3>

                <div className="form-group">
                    <label>Full Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Name"
                    />
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                    />
                </div>

                <div className="text-center mt-4">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>
                <p>
                    Already have an account
                    <Link to="/login"> Sign in </Link>
                </p>
            </form>
        </div>
    );
};

export default SignUp;
