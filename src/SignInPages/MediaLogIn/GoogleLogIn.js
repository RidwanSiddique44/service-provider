import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../../SharedPages/Loading/Loading';

const GoogleLogIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    let errorElement;

    if (loading || loading) {
        return <Loading></Loading>
    }

    if (error || error) {
        errorElement = <p className='text-danger'>Error: {error?.message} {error?.message}</p>
    }

    if (user || user) {
        navigate('/home');
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
            </div>
            {errorElement}
            <div className=''>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-secondary w-50 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={require('../../image/google.png')} alt="" />
                    <span className='px-2 fw-bolder'>Google Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default GoogleLogIn;