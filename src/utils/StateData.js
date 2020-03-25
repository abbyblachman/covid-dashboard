import React, { createContext, useState } from 'react';

export const StateDataContext = createContext();

export const StateDataProvider = props => {
  const [stateData, setStateData] = useState(false);

  return (
    <StateDataContext.Provider value={[stateData, setStateData]}>
      {props.children}
    </StateDataContext.Provider>
  );
};
