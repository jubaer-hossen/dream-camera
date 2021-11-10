import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css';

const Error = () => {
    return (
        <div className="error-bg-img d-flex justify-content-center align-items-end">
            <div>
                <Link to="/home">
                    <button className="btn btn-success fs-2 mb-5">
                        Go Home
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Error;
