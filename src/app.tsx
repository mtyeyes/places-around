import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// @ts-ignore
export const PATH = JSON.stringify(PUBLIC_PATH).replaceAll('"', '');

import Home from './domain/home/home';
import Error from './domain/error/error';

const App = () => {
  return (
    <Router basename={PATH}>
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route path='*' component={ Error }/>
      </Switch>
    </Router>
  );
};

export default App;