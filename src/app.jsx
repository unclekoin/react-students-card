import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import EditPage from './pages/edit-page';
import HomePage from './pages/home-page';

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/edit" component={EditPage} />
        <Route path="/" component={HomePage} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
