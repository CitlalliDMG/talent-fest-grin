import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Admin from '../components/Admin/Admin'
import RegisterCard from '../components/SignIn/Register'
import Login from '../components/SignIn/SignIn';
import Err from '../components/Page404/Page404'
import Home from '../components/Home/Home';

const admin = () => (
    <div>
        <Admin />
    </div>
);

const register = () => (
    <div>
        <RegisterCard />
    </div>
);

const login = () => (
    <Login />
)

const err = () => (
    <div>
        <Err />
    </div>
);

const home = () => (
    <div>
        <Home />
    </div>
)

const Routes = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route exact strict path="/" component={login} />
                <Route exact strict path="/admin" component={admin} />
                <Route exact strict path="/register" component={register} />
                <Route exact strict path="/404" component={err} />
                <Route exact strict path="/home" component={home} />
            </Switch>
    </BrowserRouter>
);

export default Routes