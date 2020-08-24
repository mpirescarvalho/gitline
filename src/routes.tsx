import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Timeline from './pages/Timeline';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/timeline/:username" component={Timeline} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
