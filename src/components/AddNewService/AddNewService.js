import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddNewService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios
            .post(
                'https://gentle-citadel-90786.herokuapp.com/AddNewService',
                data
            )
            .then(res => {
                // console.log(res);
                if (res.data.insertedId) {
                    alert('service added successfully');
                    reset();
                }
            });
    };
    return (
        <div className="text-center order-bg mt-5">
            <h1>Please, Add A New Service</h1>
            <form
                className="d-flex flex-column justify-content-center align-items-center"
                onSubmit={handleSubmit(onSubmit)}
            >
                <input
                    className="w-50 mb-3"
                    placeholder="Name"
                    {...register('Name', {
                        required: true,
                        maxLength: 100,
                    })}
                />
                <input
                    className="w-50 mb-3"
                    placeholder="Email"
                    {...register('email')}
                />
                <textarea
                    className="w-50 mb-3"
                    placeholder="details"
                    {...register('details')}
                />
                <input
                    className="w-50 mb-3"
                    placeholder="image url"
                    {...register('img')}
                />
                <input
                    className="w-50 mb-3"
                    placeholder="price"
                    type="number"
                    {...register('price')}
                />
                <input className="btn btn-success px-5 my-3" type="submit" />
            </form>
        </div>
    );
};

export default AddNewService;
