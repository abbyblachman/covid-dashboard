import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import State from './pages/State';
import { AllStatesDataProvider } from './utils/AllStatesDataContext';

function App() {
  return (
    <Router>
      <AllStatesDataProvider>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/:state" component={State}></Route>
      </AllStatesDataProvider>
    </Router>
  );
}

export default App;
