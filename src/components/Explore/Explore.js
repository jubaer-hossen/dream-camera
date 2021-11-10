import React, { useEffect, useState } from 'react';
import ShowExplores from './ShowExplores';

const Explore = () => {
    const [cameras, setCameras] = useState([]);
    useEffect(() => {
        const url = 'http://localhost:5000/services';

        fetch(url)
            .then(res => res.json())
            .then(data => setCameras(data));
    }, []);
    return (
        <div className="my-5 text-center container">
            {cameras.length === 0 && (
                <div className="d-flex justify-content-center pt-5 mt-5">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}
            <h1>All Available Cameras</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {cameras.map(camera => (
                    <ShowExplores
                        key={camera.id}
                        camera={camera}
                    ></ShowExplores>
                ))}
            </div>
        </div>
    );
};

export default Explore;
