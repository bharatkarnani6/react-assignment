import react, { useState } from 'react';
import './login.css';
import { Link, useHistory } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { useAuth } from '../../Context/AuthContext';

export default function Login() {
    const history = useHistory();
    const { login, currentUser } = useAuth();
    const { register, handleSubmit, watch, errors } = useForm();
    const [error, seterror] = useState()
    const onSubmit = async (data) => {
        try {
            await login(data.email, data.password)
            history.push('/dashboard');
        }
        catch {
            seterror('Failed to Login')
        }

    };
    return (
        <div>
            <div className="login-form-box container-fluid">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="email" className="form-control" name="email" ref={register} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" name="password" ref={register} />
                    </div>
                    <div className="form-text mb-3 mt-2" style={{ color: 'red' }}>{error}</div>
                    <button type="submit" className="btn btn-primary mb-3 btn-lg">Login</button>
                </form>
                <div className="form-text">Create a new account <Link to='/signup'>Sign up.</Link> </div>
            </div>
        </div>
    );
}