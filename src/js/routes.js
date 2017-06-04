import React from 'react'
import { Router, Route, browserHistory } from 'react-router'

export default () => (
  <Router history={browserHistory}>
    <Route path="/" getComponent={Login} />
    <Route path="/about" getComponent={About} />
  </Router>
)
