import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import * as admin from './Admin'

class Routes extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Switch>

            {/* Admin */}
            <Route exact path="/dashboard" component={admin.Dashboard} />

            {/* PlayGame */}
            <Route exact path="/play-game" component={admin.Game} />

            {/* Profile */}
            <Route exact path="/profile" component={admin.Profile} />
            <Route exact path="/profile/edit/:id" component={admin.CompetitionsEdit} />

            {/* Leaderboard */}
            <Route exact path="/leaderboard" component={admin.Leaderboard} />

            <Route exact path={`/401`} component={admin._401} />
            <Route exact path={`/404`} component={admin._404} />
            <Route exact path={`/500`} component={admin._500} />

          </Switch>
        </Router>
      </Fragment>
    )
  }
}

export default Routes