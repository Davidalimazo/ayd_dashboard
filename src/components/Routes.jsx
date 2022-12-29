import React from 'react'
import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'
import { Switch, Route } from 'react-router-dom'
export default function Routes() {
  return (
    <Switch>
      <Route exact path='/' component={Dashboard}/>
      <Route path='/customers' component={Customers}/>
    </Switch>
  )
}
