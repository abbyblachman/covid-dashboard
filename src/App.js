import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AllStatesDataProvider } from './utils/AllStatesDataContext';
import { USADataProvider } from './utils/USAData';
import { StateDataProvider } from './utils/StateData';
import { StateNameProvider } from './utils/StateName';
import Home2 from './pages/Home2';

function App() {
  return (
    <Router>
      <AllStatesDataProvider>
        <USADataProvider>
          <StateDataProvider>
            <StateNameProvider>
              <Route path={['/', '/COVID']} component={Home2}></Route>
            </StateNameProvider>
          </StateDataProvider>
        </USADataProvider>
      </AllStatesDataProvider>
    </Router>
  );
}

export default App;
