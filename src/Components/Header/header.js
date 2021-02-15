import react, { useState, useEffect } from 'react';
import { useAuth } from '../../Context/AuthContext';
import { useHistory } from 'react-router-dom';
export default function Header() {
    const history = useHistory();
    const { logout, currentUser } = useAuth();
    // const [userName, setuserName] = useState();
    // useEffect(() => {
    //     setuserName(currentUser.displayName)
    // }, [])

    const signout = () => {
        logout()
        history.push('/')
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Dashboard</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a className="nav-link">Hi {currentUser?.displayName}</a>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <button className="btn btn-outline-success" type="button" onClick={signout}>Logout</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}