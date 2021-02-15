import react, { useState } from 'react';
import './signup.css';
import { Link, useHistory } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { useAuth } from '../../Context/AuthContext'

export default function Signup() {
    const history = useHistory();
    const { signup } = useAuth()
    const { register, handleSubmit, watch, errors } = useForm();
    const [error, seterror] = useState('');
    const [Loading, setLoading] = useState(false);
    const onSubmit = async (data) => {
        const username = data.fname + ' ' + data.lname
        if (data.password !== data.confirmPassword) {
            return seterror('Password doesnot match')
        }

        try {
            seterror('')
            setLoading(true)
            await signup(username, data.email, data.password)
            history.push('/')
        } catch {
            seterror('Failed to create an account')
        }
        setLoading(false)
    };

    return (
        <div>
            <div className="signup-form-box container-fluid">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <label className="form-label">First Name</label>
                        <input type="text" className="form-control" name="fname" ref={register} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Last Name</label>
                        <input type="text" className="form-control" name="lname" ref={register} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="email" className="form-control" name="email" ref={register} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" name="password" ref={register} />
                        <div className="form-text">Password must be of 6 character</div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" name="confirmPassword" ref={register} />
                    </div>
                    <div className="form-text mb-3 mt-2" style={{ color: 'red' }}>{error}</div>
                    <button disabled={Loading} type="submit" className="btn btn-primary mb-3">Signup</button>
                </form>
                <div className="form-text">Have a account <Link to='/'>Log In.</Link> </div>
            </div>
        </div>
    );
}