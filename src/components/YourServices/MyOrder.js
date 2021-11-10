import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyOrder = () => {
    const { user } = useAuth();

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/orders?email=${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);

    return (
        <div className="text-center">
            <h1>
                {orders.length <= 1 ? 'Your Order: ' : 'Your Orders: '}
                {orders.length}
            </h1>
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
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyOrder;
