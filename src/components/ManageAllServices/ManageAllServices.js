import React, { useEffect, useState } from 'react';

const ManageAllServices = () => {
    const [services, setService] = useState([]);
    useEffect(() => {
        fetch('https://gentle-citadel-90786.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setService(data));
    }, []);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete');
        if (proceed) {
            const url = `https://gentle-citadel-90786.herokuapp.com/services/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        alert('deleted successfully');
                        const remaining = services.filter(
                            service => service._id !== id
                        );
                        setService(remaining);
                    }
                });
        }
    };
    return (
        <div className="container text-center">
            <h1 className="my-5">Manage All Services / services </h1>

            <div className="row row-cols-1 row-cols-md-4 g-4 my-5">
                {services.map(service => (
                    <div className="col zoom">
                        {/* <div className="card h-100 shadow">
                            <img
                                src={service.img}
                                className="card-img-top"
                                alt="..."
                            />
                            <br />
                            <div className="card-body">
                                <h4 className="card-title">{service.Name}</h4>
                                <h5 className="card-title">{service.email}</h5>
                                <p className="card-text">{service.details}</p>
                            </div>
                        </div> */}
                        <div className="card h-100 shadow zoom">
                            <div>
                                <img
                                    src={
                                        service.img ||
                                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzSC0MMnbREPAf4u7Jp5izKWj_IIn9wU7gEA&usqp=CAU'
                                    }
                                    className="card-img-top mt-3"
                                    alt="..."
                                />
                            </div>
                            <br />
                            <div className="card-body">
                                <div>
                                    <h4 className="card-title">
                                        {service.Name}
                                    </h4>
                                    <h5 className="card-title">
                                        {service.email}
                                    </h5>
                                    <p className="card-text">
                                        {service.details.slice(0, 250)}
                                    </p>
                                </div>
                            </div>
                            <div>
                                <h3 className="card-title">
                                    Price: {service.price}
                                </h3>
                                <button
                                    className="btn btn-danger px-5 my-4"
                                    onClick={() => handleDelete(service._id)}
                                >
                                    delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ManageAllServices;
