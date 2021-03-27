import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from '../containers/Home'

export const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
    </Switch>
  </BrowserRouter>
)
