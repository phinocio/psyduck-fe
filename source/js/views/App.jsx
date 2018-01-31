import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { routeCodes } from 'constants/routes';
import Menu from 'components/global/Menu';
import Dashboard from 'views/Dashboard';
import Leaderboard from 'views/Leaderboard';
import UserProfile from 'views/UserProfile';
import NotFound from 'views/NotFound';


class App extends Component {
  render() {
    return (
      <div className='app'>
        <Menu />

        <div className='page'>
          <Switch>
            <Route exact path={routeCodes.DASHBOARD} component={Dashboard} />
            <Route path={routeCodes.USER_PROFILE} component={UserProfile} />
            <Route path={routeCodes.LEADERBOARD} component={Leaderboard} />
            <Route path='*' component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
