import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Shipping = () => {
    const [products, setProducts] = useState({});
    const { register, handleSubmit, reset } = useForm();
    const { id } = useParams();
    // console.log(id);
    const { user } = useAuth();
    // console.log(user);

    const orderCondition = 'pending';

    useEffect(() => {
        fetch(`http://localhost:5000/services/${id}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                // reset(data);
            });
    }, [id, reset]);

    const onSubmit = data => {
        data.productImg = products.img;
        data.productName = products.Name;
        data.productPrice = products.price;
        data.productDetails = products.details;
        console.log(data);
        axios.post('http://localhost:5000/shipping', data).then(res => {
            // console.log(res);
            if (res.data.insertedId) {
                alert('Order added successfully');
                reset();
            }
        });
    };

    console.log(products);
    return (
        <div className="text-center my-5">
            <h2>This is the shipping</h2>
            <h4>Please, Fill the form below</h4>
            <form
                className="d-flex flex-column justify-content-center align-items-center"
                onSubmit={handleSubmit(onSubmit)}
            >
                <input
                    className="w-50 mb-3"
                    placeholder="Name"
                    value={user.displayName}
                    {...register('Name', {
                        required: true,
                        maxLength: 100,
                    })}
                />
                <input
                    className="w-50 mb-3"
                    placeholder="Email"
                    value={user.email}
                    {...register('email')}
                />
                <input
                    className="w-50 mb-3 d-none"
                    placeholder="ProductID"
                    value={id}
                    {...register('productId')}
                />
                <input
                    className="w-50 mb-3 d-none"
                    placeholder="productImg"
                    value={products.img}
                    {...register('productImg')}
                />
                <input
                    className="w-50 mb-3"
                    placeholder="productName"
                    value={products.Name}
                    {...register('productName')}
                />

                <input
                    className="w-50 mb-3 d-none"
                    placeholder="ProductPrice"
                    value={products.price}
                    {...register('productPrice')}
                />
                <textarea
                    className="w-50 mb-3 d-none"
                    placeholder="ProductDetails"
                    value={products.details}
                    {...register('productDetails')}
                />
                <input
                    className="w-50 mb-3 d-none"
                    placeholder="order condition"
                    value={orderCondition}
                    {...register('orderCondition')}
                />
                <textarea
                    className="w-50 mb-3"
                    placeholder="address"
                    {...register('address')}
                />

                <input
                    className="w-50 mb-3"
                    placeholder="phone"
                    type="number"
                    {...register('phone')}
                />
                <input className="btn btn-success px-5 my-3" type="submit" />
            </form>
        </div>
    );
};

export default Shipping;
