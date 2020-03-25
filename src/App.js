import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import State from './pages/State';
import { AllStatesDataProvider } from './utils/AllStatesDataContext';
import { USADataProvider } from './utils/USAData';
function App() {
  return (
    <Router>
      <AllStatesDataProvider>
        <USADataProvider>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/:state" component={State}></Route>
        </USADataProvider>
      </AllStatesDataProvider>
    </Router>
  );
}

export default App;
