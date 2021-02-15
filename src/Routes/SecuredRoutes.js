import react from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';


export default function SecuredRoutes({ component: Cmp, ...resetData }) {
    const { currentUser } = useAuth();
    return (
        <Route
            {...resetData}
            render={(props) => (
                currentUser ? (
                    <Cmp {...props} />
                ) :
                    <Redirect exact to="/" />
            )}
        />
    );
}