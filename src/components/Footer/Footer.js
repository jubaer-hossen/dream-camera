import React from 'react';

const Footer = () => {
    return (
        <div className="bg-dark text-white p-5 text-center w-100">
            <div className="d-flex justify-content-around align-items-center">
                <div>
                    <h1>Follow Us </h1>
                    <i className="fab fa-facebook fs-3 me-2"></i>
                    <i className="fab fa-instagram fs-3 me-2"></i>
                    <i className="fab fa-twitter fs-3 me-2"></i>
                    <i className="fab fa-linkedin fs-3 me-2"></i>
                    <i className="fab fa-youtube fs-3"></i>
                </div>
            </div>
            <hr />
            <div className="d-flex justify-content-around align">
                <p>©Copyrighted by Dream Camera Shop.</p>
                <p>Wonderful Services With 'Dream Camera Shop'.</p>
            </div>
        </div>
    );
};

export default Footer;
