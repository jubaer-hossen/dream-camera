import React from 'react';
import './achieve.css';

const Achieve = () => {
    return (
        <div className="achieve text-center p-5 mt-5">
            <div className="bg-primary text-white d-md-flex p-5 rounded">
                <div className="bg-achieve">
                    <i className="fab fa-facebook-square fs-1"></i>
                    <h1>Facebook Likes</h1>
                    <h3>45000k</h3>
                </div>
                <div>
                    <i className="fab fa-instagram fs-1"></i>
                    <h1>Instagram Followers</h1>
                    <h3>1200k</h3>
                </div>
                <div>
                    <i className="fab fa-linkedin fs-1"></i>
                    <h1>LinkedIn Followers</h1>
                    <h3>5280k</h3>
                </div>
                <div>
                    <i className="fab fa-youtube fs-1"></i>
                    <h1>YouTuber Subscriber</h1>
                    <h3>753k</h3>
                </div>
            </div>
        </div>
    );
};

export default Achieve;
