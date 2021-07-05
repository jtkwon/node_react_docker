import React from 'react';
import { Switch, Route } from 'react-router-dom';
// internal
import Home from './components/Home';

export const LINKS = Object.freeze([
  {
    id: 'home',
    to: '/',
    text: 'Home',
    Component: Home,
  },
]);

export const Routes = () => (
  <Switch>
    {LINKS.map(({ to, Component, id }) => (
      <Route path={to} key={`route_${id}`}>
        <Component />
      </Route>
    ))}
  </Switch>
);
