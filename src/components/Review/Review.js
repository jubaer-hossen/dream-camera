// import { Input, Select } from '@mui/material';
import React from 'react';
import './Review.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Review = () => {
    const Input = ({ label, register, required }) => (
        <>
            <label>{label}</label>
            <br />
            <textarea
                className="w-50"
                placeholder="Please write some review"
                {...required}
                {...register(label, { required })}
            />
        </>
    );

    const Select = React.forwardRef(
        ({ onChange, onBlur, name, label }, ref) => (
            <>
                <label>{label}</label>
                <br />
                <p className="fw-bold">Please choose your rating</p>
                <select
                    className="w-25 py-2 px-5 fw-bold"
                    name={name}
                    ref={ref}
                    onChange={onChange}
                    onBlur={onBlur}
                >
                    <option value="5">5</option>
                    <option value="4.5">4.5</option>
                    <option value="4">4</option>
                    <option value="3.5">3.5</option>
                    <option value="3">3</option>
                    <option value="2.5">2.5</option>
                    <option value="2">2</option>
                    <option value="1.5">1.5</option>
                    <option value="1">1</option>
                </select>
            </>
        )
    );
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        // alert(JSON.stringify(data));

        axios
            .post('https://gentle-citadel-90786.herokuapp.com/reviews', data)
            .then(res => {
                // console.log(res);
                if (res.data.insertedId) {
                    alert('review added successfully');
                    reset();
                }
            });
    };
    return (
        <div className="text-center review">
            <h1>Please give feedback or review billow</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input label="Review" register={register} required />
                <br />
                <Select label="Rating" {...register('Rating')} />
                <br />
                <input className="btn btn-primary mt-3" type="submit" />
            </form>
        </div>
    );
};

export default Review;
