import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyOrder = () => {
    const { user } = useAuth();

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const url = `https://gentle-citadel-90786.herokuapp.com/orders?email=${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [user.email]);

    const handleDelete = id => {
        // console.log(id);
        const proceed = window.confirm('Are you sure you want to Cancel');
        if (proceed) {
            const url = `https://gentle-citadel-90786.herokuapp.com/orders/${id}`;
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
        <div className="text-center review">
            <h1>
                {orders.length <= 1 ? 'Your Order: ' : 'Your Orders: '}
                {orders.length}
            </h1>
            <div className="row row-cols-1 row-cols-md-4 g-4 my-5">
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
                        <div className="card h-100 shadow zoom">
                            <div>
                                <img
                                    src={
                                        order.productImg ||
                                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzSC0MMnbREPAf4u7Jp5izKWj_IIn9wU7gEA&usqp=CAU'
                                    }
                                    className="card-img-top mt-2"
                                    alt="..."
                                />
                            </div>
                            <br />
                            <div className="card-body">
                                <div>
                                    <h4 className="card-title">
                                        {order.productName}
                                    </h4>
                                    <p className="card-text">
                                        {order.productDetails.slice(0, 50)}
                                    </p>

                                    <h3 className="card-title">
                                        Price: {order.productPrice}
                                    </h3>
                                </div>
                            </div>
                            <div className="border shadow pt-3 mb-3">
                                <h3>Customer details:</h3>

                                <h5 className="card-title">{order.Name}</h5>
                                <h6 className="card-title">{order.email}</h6>
                                <h6 className="card-title">
                                    Address: {order.address}
                                </h6>
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
                                        className={
                                            order.orderCondition !== 'Shipped'
                                                ? 'btn btn-danger mx-2 px-5 my-4'
                                                : 'disabled btn btn-danger mx-2 px-5 my-4'
                                        }
                                        onClick={() => handleDelete(order._id)}
                                    >
                                        Cancel
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

export default MyOrder;
