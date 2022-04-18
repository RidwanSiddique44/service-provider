import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../SharedPages/Loading/Loading';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Signup.css';

const Signup = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        loading,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    if (loading || updating) {
        return <Loading></Loading>
    }
    const handleSignUp = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        navigate('/home');
    }

    return (
        <div className='signup-form mt-5'>
            <h2 className='text-info' style={{ textAlign: 'center' }}>Please SignUp</h2>
            <form onSubmit={handleSignUp}>
                <input type="text" name="name" id="" placeholder='Your Name' />
                <input type="email" name="email" id="" placeholder='Email Address' required />
                <input type="password" name="password" id="" placeholder='Enter Password' required />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Our Terms and Conditions</label>
                <input
                    disabled={!agree}
                    className='w-50 mx-auto btn btn-info mt-2 fw-bolder text-light'
                    type="submit"
                    value="SignUp" />
            </form>
            <p>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please LogIn</Link> </p>

        </div>
    );
};

export default Signup;