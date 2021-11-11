import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import './ShowReviews.css';

const ShowReviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const url = 'https://gentle-citadel-90786.herokuapp.com/allReviews';

        fetch(url)
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);

    return (
        <div className="text-center container mt-5">
            <h1>All reviews</h1>
            <div className="row row-cols-1 row-cols-md-4 g-4 my-5">
                {reviews.map(review => (
                    <div key={review._id} className="col">
                        {reviews.length === 0 && (
                            <div className="d-flex justify-content-center pt-5 mt-5">
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">
                                        Loading...
                                    </span>
                                </div>
                            </div>
                        )}
                        <div className="card h-100 shadow">
                            <div className="card-body">
                                <div>
                                    <p className="card-text">{review.Review}</p>
                                    <h4 className="card-title">
                                        {review.Rating}
                                    </h4>
                                    <Rating
                                        initialRating={review.Rating}
                                        readonly
                                        emptySymbol="far fa-star icon-color"
                                        fullSymbol="fas fa-star icon-color"
                                    ></Rating>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShowReviews;
