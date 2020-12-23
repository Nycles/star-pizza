import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Admin from "./admin/Admin"
import Main from "./main/Main"
import ShoppingCart from "./cart/ShoppingCart"

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"} component={Main} />
        <Route path={"/shopping-cart"} component={ShoppingCart} />
        <Route path={"/admin"} component={Admin} />
      </Switch>
    </BrowserRouter>
  )
}
