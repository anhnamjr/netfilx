import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, Browse, SignIn, SignUp } from "./pages"

import * as ROUTE from "./constants/routes";

export default function App() {
  return (
    <Router>
      <Route exact path={ROUTE.HOME}>
        <Home />
      </Route>
      <Route exact path={ROUTE.BROWSE}>
        <Browse />
      </Route>
      <Route exact path={ROUTE.SIGN_UP}>
        <SignUp />
      </Route>
      <Route exact path={ROUTE.SIGN_IN}>
        <SignIn />
      </Route>
    </Router>
  );
}
