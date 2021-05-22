// eslint-disable-next-line no-use-before-define
import React from 'react'
import Sensors from './Pages/Sensors'
import Home from './Pages/Home'
import Login from './Pages/Login'
import NotFound from './Pages/404'

import { IsLogged } from '../services/api/Auth'

import {
  BrowserRouter as Router,
  Switch,
  Route
  // useLocation
} from 'react-router-dom'

function App () {
  // const location = useLocation()
  // console.log(location)
  if (!IsLogged()) {
    return (
        <Router>
          <Switch>
            <Route path="*">
              <Login />
            </Route>
          </Switch>
        </ Router>
    )
  } else {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/sensors">
            <Sensors />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </ Router>
    )
  }
}

export default App
