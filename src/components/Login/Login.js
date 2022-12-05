import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import googleLogo from '../../images/google-logo.png';

const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form action="">
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" placeholder='Enter Email' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" placeholder='Enter Password' required />
                    </div>
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