import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Appers from "./pages/Appers";
import AppDetail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Appers} />
          <Route exact path="/appers" component={Appers} />
          <Route exact path="/appers/:id" component={AppDetail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
