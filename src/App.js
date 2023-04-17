import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
