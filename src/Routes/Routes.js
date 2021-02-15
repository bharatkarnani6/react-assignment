import react from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard/dashboard';
import Login from '../Pages/Login/login'
import Signup from '../Pages/Signup/signup'
import SecuredRoutes from './SecuredRoutes';
export default function routes() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Login />
                    </Route>
                    <Route exact path="/signup">
                        <Signup />
                    </Route>
                    <SecuredRoutes exact path="/dashboard" component={Dashboard}>
                    </SecuredRoutes>

                </Switch>
            </BrowserRouter>
        </div>
    );
}