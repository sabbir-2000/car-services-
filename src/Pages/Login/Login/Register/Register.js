import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Register/Register.css'

const Register = () => {
    const navigate = useNavigate()
    const navigteLogin = () => {
        navigate('/login')
    }

    const handleRegister = event => {
        event.preventDefault()
    }

    return (
        <div className='register-form'>
            <h3 style={{ textAlign: "center", color: "blue" }}>please register</h3>
            <form onSubmit={handleRegister}>
                <input type="text" name="text" id="" placeholder='your name' />

                <input type="email" name="email" id="" placeholder='email adress' required />

                <input type="password" name="password" id="" placeholder='password' required />

                <input type="submit" value="register" />
            </form>
            <p>New to Genius Car <Link to="/login" className='text-danger text-decoration-none' onClick={navigteLogin}>Already have an account</Link></p>
        </div>
    );
};

export default Register;