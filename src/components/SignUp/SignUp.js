import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import googleLogo from '../../images/google-logo.png';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword,
        user] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handleConfirmPassBlur = event => {
        setConfirmPass(event.target.value);
    }
    const handleFormSubmit = event => {
        event.preventDefault();
        if (password !== confirmPass) {
            setError('Password dit not match');
            return;
        }
        if (password.length < 6) {
            setError('Password must be 6 characters or more');
            return;
        }
        createUserWithEmailAndPassword(email, password);
    }
    if (user) {
        navigate('/login');
    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Sign Up</h2>
                <form onSubmit={handleFormSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" placeholder='Enter Email' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" placeholder='Enter Password' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handleConfirmPassBlur} type="password" name="confirm-password" id="" placeholder='Re-enter Password' required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className='form-submit' type="submit" value="Sign Up" />
                </form>
                <p className='page-toggle'>
                    Already have an Account? <Link className='form-link' to='/login'>Login</Link>
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

export default SignUp;