import React, { useEffect, useState } from 'react';

const AllOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);

    // update data
    const handlePending = id => {
        console.log(id);

        const url = `http://localhost:5000/orders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // console.log(data);
                    alert('Updated successfully');
                    const remainingData = orders.filter(
                        order => order._id != id
                    );
                    setOrders(remainingData);
                    setOrders(data);
                    // window.location.reload(false);
                }
            });
    };

    // delate data
    const handleDelete = id => {
        // console.log(id);
        const proceed = window.confirm('Are you sure you want to Cancel');
        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        alert('deleted successfully');
                        const remaining = orders.filter(
                            order => order._id !== id
                        );
                        setOrders(remaining);
                    }
                });
        }
    };
    return (
        <div className="text-center container order-bg">
            <h1>Manage All Order </h1>
            <div className="row row-cols-1 row-cols-md-2 g-4 my-5">
                {orders.map(order => (
                    <div key={order._id} className="col">
                        {orders.length === 0 && (
                            <div className="d-flex justify-content-center pt-5 mt-5">
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">
                                        Loading...
                                    </span>
                                </div>
                            </div>
                        )}
                        <div className="card h-100 shadow">
                            <div>
                                <img
                                    src={
                                        order.productImg ||
                                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzSC0MMnbREPAf4u7Jp5izKWj_IIn9wU7gEA&usqp=CAU'
                                    }
                                    className="card-img-top"
                                    alt="..."
                                />
                            </div>
                            <div className="card-body">
                                <div>
                                    <h4 className="card-title">
                                        {order.productName}
                                    </h4>
                                    <p className="card-text">
                                        {order.productDetails}
                                    </p>

                                    <h3 className="card-title">
                                        Price: {order.productPrice}
                                    </h3>
                                </div>
                            </div>
                            <div className="border shadow pt-3 mb-3">
                                <h4 className="card-title">{order.Name}</h4>
                                <h5 className="card-title">{order.email}</h5>
                                <h5 className="card-title">
                                    Address: {order.address}
                                </h5>
                                <p>Phone: {order.phone}</p>
                                <br />
                                <h6>
                                    Order Condition:{' '}
                                    <span className="fw-bold">
                                        {order.orderCondition}
                                    </span>
                                </h6>

                                <div>
                                    <button
                                        className="btn btn-danger px-5 my-4 mx-2"
                                        onClick={() => handleDelete(order._id)}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        className={
                                            order.orderCondition !== 'Approved'
                                                ? 'btn btn-danger mx-2 px-5 my-4'
                                                : 'disabled btn btn-danger mx-2 px-5 my-4'
                                        }
                                        onClick={() => handlePending(order._id)}
                                    >
                                        {order.orderCondition === 'Approved'
                                            ? 'Approved'
                                            : 'Pending'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllOrders;
