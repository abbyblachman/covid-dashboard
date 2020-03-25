import React, { createContext, useState } from 'react';

export const AllStatesDataContext = createContext();

export const AllStatesDataProvider = props => {
  const [AllStatesData, setAllStatesData] = useState([]);

  return (
    <AllStatesDataContext.Provider value={[AllStatesData, setAllStatesData]}>
      {props.children}
    </AllStatesDataContext.Provider>
  );
};
