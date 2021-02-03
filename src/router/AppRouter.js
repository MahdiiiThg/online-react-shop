import React from 'react'
// react-router
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";

// containers
import Home from '../container/Home'
import ShoppingBasket from '../container/ShoppingBasket'
import Search from '../container/Search'

const history = createBrowserHistory();

export default function AppRouter() {
  return (
    <BrowserRouter history={history}>
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/basket" component={ShoppingBasket} />
          <Route path="/search" component={Search} />
        </Switch>
    </BrowserRouter>
  )
}
