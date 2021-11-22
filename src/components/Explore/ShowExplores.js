import React from 'react';
import { Link } from 'react-router-dom';

const ShowExplores = props => {
    const { Name, img, _id, details, price, email } = props.camera;

    return (
        <div className="col">
            <div className="card h-100 shadow zoom">
                <img src={img} className="card-img-top" alt="..." />
                <br />
                <div className="card-body">
                    <h4 className="card-title">{Name}</h4>
                    <h5 className="card-title">{email}</h5>
                    <p className="card-text">{details.slice(0, 100)}</p>
                </div>
                <div>
                    <h3 className="card-title">Price: {price}</h3>
                    <br />
                    <Link to={`/details/${_id}`}>
                        <button className="btn btn-primary mb-3">
                            Click For purchase
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ShowExplores;
