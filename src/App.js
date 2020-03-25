import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import State from './pages/State';
import { AllStatesDataProvider } from './utils/AllStatesDataContext';
import { USADataProvider } from './utils/USAData';
import { StateDataProvider } from './utils/StateData';
function App() {
  return (
    <Router>
      <AllStatesDataProvider>
        <USADataProvider>
          <StateDataProvider>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/:state" component={State}></Route>
          </StateDataProvider>
        </USADataProvider>
      </AllStatesDataProvider>
    </Router>
  );
}

export default App;
