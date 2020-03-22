import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import State from "./pages/State"

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/:state" component={State}></Route>
    </Router>
  );
}

export default App;
