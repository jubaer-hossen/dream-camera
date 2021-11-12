import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../img/special-offer-megaphone-sticker-2495298.jpg';
// import img2 from '../../img/special-offer-sale-discount-banner_180786-46.jpg';

const SpecialOffers = () => {
    return (
        <div className="text-center">
            <h2 className="text-primary">Special Offers</h2>
            <div className="container d-md-flex justify-content-center">
                <div className="card border border-success me-4 p-4 mt-4">
                    <div className="h-100">
                        <h1>Special Offers 1</h1>
                        <img className="img-fluid w-50" src={img1} alt=""></img>
                        <p className="fs-4">
                            If you buy 3 or, more products in a row you will get{' '}
                            <span className="fw-bold">10%</span> discount. and
                            six-month free service warranty
                        </p>
                    </div>
                    <div>
                        <Link to="/explore">
                            <button className="btn btn-primary w-50">
                                Buy Now
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="card border border-success p-4 mt-4">
                    <div className="h-100">
                        <h1>Special Offers 2</h1>
                        <img className="img-fluid w-50" src={img1} alt=""></img>
                        <p className="fs-4">
                            If you buy 2 products in a row you will get{' '}
                            <span className="fw-bold">5%</span> discount. and
                            one-month free service warranty
                        </p>
                    </div>
                    <div>
                        <Link to="/explore">
                            <button className="btn btn-primary w-50">
                                Buy Now
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialOffers;
