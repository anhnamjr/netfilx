import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "./pages"

import * as ROUTE from "./constants/routes";

export default function App() {
  return (
    <Router>
      <Route exact path={ROUTE.HOME}>
        <Home />
      </Route>
    </Router>
  );
}
