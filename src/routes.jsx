import React from 'react';
import { Route, Switch } from 'react-router';
import HomeContainer from './containers/Home/home_container'


const DefaultRouter = () => (
  <Switch>
    <Route exact path='/' component={HomeContainer}/>
  </Switch>
)


export default DefaultRouter;