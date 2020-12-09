import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import AuthComponent from '../HOC/AuthComponent';
import { Home } from '../pages/Home';
import LoginPage from '../pages/login';
import {Restaurants} from "../pages/Restaurants";

export const Routes = () => {
    return <>
        <Router>
            <Switch>
                <Route path="/auth/login" component={LoginPage} exact />
                <Route path='/search/*' component={Restaurants} exact />
                {/*<Route path='/*' component={AuthComponent(Home)} exact />*/}
                <Route path='/home' component={Home} exact />
                <Route path='/*' component={Home} exact />
            </Switch>
        </Router>
    </>
}
