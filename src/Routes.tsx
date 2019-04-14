import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Landing, Login } from './page';
import { Typography } from '@material-ui/core';

const PageNotFound = () => <Typography>Page not found!</Typography>;

const routes = (
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route component={PageNotFound} />
    </Switch>
);

export default routes;
