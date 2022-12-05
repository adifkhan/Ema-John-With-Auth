import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import googleLogo from '../../images/google-logo.png';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handleFormSubmit = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }
    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form onSubmit={handleFormSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" placeholder='Enter Email' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" placeholder='Enter Password' required />
                    </div>
                    <p style={{ color: 'red' }}>{error?.message}</p>
                    {
                        loading && <p>Loading...</p>
                    }
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p className='page-toggle'>
                    New to Ema-John? <Link className='form-link' to='/signup'>Create New Account</Link>
                </p>
                <div className="form-divider">
                    <div className="divider-line"></div>
                    <p className='divider-text'>or</p>
                    <div className="divider-line"></div>
                </div>
                <div className='google-button'>
                    <img className='link-logo' src={googleLogo} alt="" />
                    <p>Continue with Google</p>
                </div>
            </div>
        </div>
    );
};

export default Login;