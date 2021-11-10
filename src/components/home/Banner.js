import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <div className="bg-img"></div>
            <div className="text-white bg-text d-flex justify-content-center align-items-center text-center">
                <div>
                    <h1 className="text-center">Dream Camera Shop</h1>
                    <h5> Choose your Dream Camera!</h5>
                </div>
            </div>
        </div>
    );
};

export default Banner;
