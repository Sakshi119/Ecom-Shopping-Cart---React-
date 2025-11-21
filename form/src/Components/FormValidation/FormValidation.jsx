import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import '../FormValidation/FormValidation.css'

const FormValidation = () => {
    const { register, handleSubmit, reset,
        formState: { errors },
    } = useForm()

    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        try {
            const res = await fetch("http://localhost:5000/users");
            const data = await res.json()
            setUsers(data)
            console.log(users)
        } catch (err) {
            console.error("Error Fetching the data", err)
        }
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    const onSubmit = async (data) => {
        try {
            const response = await fetch("http://localhost:5000/users", {
                method: "POST",
                header: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
            if (!response.ok) {
                throw new Error("Error saving data");
            }
            const result = await response.json();
            console.log("User Added", result);

            alert("User successfully added!")
            fetchUsers()
            reset() 

        } catch (error) {
            console.error(error)
            alert("Error saving data");
        }
    }

    return (
        <>
            <div className='form-validation'>
                <h2>User Registration - Form Validation</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='form-validation'>
                <div className='form-input'>
                    <label>Name:</label>
                    <input {...register("name", { required: "Name is required" })} placeholder='Enter your name' />
                    {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
                </div>

                <div className='form-input'>
                    <label>Email:</label>
                    <input {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Enter a valid email"
                        }
                    })} placeholder='Enter your email' />
                    {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
                </div>


                <div className='form-input'>
                    <label>Age:</label>
                    <input {...register("age", {
                        required: "Age is required",
                        min: { value: 18, message: "Minimum age is 18" },
                        max: { value: 60, message: "Maximum age is 60" }
                    })} placeholder='Enter your age' />
                    {errors.age && <p style={{ color: "red" }}>{errors.age.message}</p>}
                </div>

                <button type="submit" className='validation-btn'>Submit</button>
            </form>

            <div className='registration-list'>
                {users.map((user) => {
                    return (
                        <li key={user.id} style={{ display: 'flex', justifyContent: 'center' }}>
                            <p style={{ marginRight: "5px" }}>{user.name} -</p>
                            <p>{user.email}</p>
                        </li>
                    )
                })}
            </div>
        </>
    )
}

export default FormValidation