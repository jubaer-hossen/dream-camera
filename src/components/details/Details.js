import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Details = () => {
    const { id } = useParams();
    const [details, setDetails] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/services/${id}`)
            .then(res => res.json())
            .then(data => setDetails(data));
    }, [id]);
    console.log(details);

    return (
        <div className="container my-5 d-md-flex justify-content-around align-items-center">
            <div className="card card-body me-2 text-center">
                <h3>Name: {details?.Name}</h3>
                <h6>Email: {details?.email}</h6>
                <p>{details?.details}</p>
                <h4>Price: {details?.price}</h4>

                <Link to={`/shipping/${details?._id}`}>
                    <button className="btn btn-primary">
                        Process To Shipping
                    </button>
                </Link>
            </div>
            <div>
                <img
                    src={details?.img}
                    className="card img-thumbnail img-fluid"
                    alt=""
                />
            </div>
        </div>
    );
};

export default Details;
